<?php

namespace App\Http\Controllers;

use App\Mail\NurseRegistrationMail;
use App\Models\Donation;
use App\Models\Donor;
use App\Models\NurseRegistration;
use App\Models\NurseRegistrationPayment;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;
use PhpParser\Node\Expr\Cast\Object_;
use Unicodeveloper\Paystack\Paystack;

class PaymentController extends Controller
{
    /**
     * Redirect the User to Paystack Payment Page
     * @param Request $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function redirectToGateway(Request $request)
    {
        if($request->has('pay_type')){
            $this->validate($request, [
                'name' => 'required',
                'phone_number' => 'required',
                'amount' => 'required',
                'email' => 'required|email'
            ]);
        }
        else {
            $this->validate($request, [
                'first_name' => 'required',
                'last_name' => 'required',
                'phone' => 'required',
                'amount' => 'required',
                'project_id' => 'required',
                'email' => 'required|email'
            ]);
        }
        $paystack = new Paystack();
        $data = $request->all();
        //Initialize the required data here locally not from blade view
        $request->reference = $paystack->genTranxRef();
        $request->key = config('paystack.secretKey');
        //$request->amount *= 100;
        $request->amount *= 100;
        $request->currency = 'GHS';
        $data['reference'] = $request->reference;
        $data['amount'] = $request->amount;
        $data['currency'] = $request->currency;
        $data['pay_type'] = $request->has('pay_type') ? $request->pay_type: 'donation';
        Session::put('requestDetails', $data);

        try{
            return $paystack->getAuthorizationUrl()->redirectNow();
        }catch(\Exception $e) {
            return Redirect::back()->with('error', 'Error establishing transaction, please try again');
        }
    }


    /**
     * Obtain Paystack payment information
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     * @throws \Unicodeveloper\Paystack\Exceptions\PaymentVerificationFailedException
     */
    public function handleGatewayCallback()
    {
        $paystack = new Paystack();
        try {
            $paymentDetails = $paystack->getPaymentData();
        } catch (\Exception $e) {
            return view('welcome')->with('error', 'Error encountered during payment processing');
        }
        $requestDetails = Session::get('requestDetails');
        $sessionReference = $requestDetails['reference'];
        $paymentReference = $paymentDetails['data']['reference'];
        $payType = $requestDetails['pay_type'];
        switch ($payType){
            case 'donation':
                $donorData = [
                    'email' => $paymentDetails['data']['customer']['email'],
                    'first_name' => $requestDetails['first_name'],
                    'last_name' => $requestDetails['last_name'],
                    'phone_number' => $requestDetails['phone']
                ];
                $donationData = [
                    'amount' => $paymentDetails['data']['amount'],
                    'fees' => $paymentDetails['data']['fees'],
                    'balance' => ($paymentDetails['data']['amount'] - $paymentDetails['data']['fees']),
                    'reference' => $paymentDetails['data']['reference'],
                    'currency' => $paymentDetails['data']['currency'],
                    'paid_at' => Carbon::create($paymentDetails['data']['paid_at']),
                    'project_id' => $requestDetails['project_id']
                ];
                $donor = Donor::firstOrCreate(['email' => $donorData['email']], $donorData);
                $donation = $donor->donation()->create($donationData);
                $message = 'Thank You for your donation, We really appreciate';
                break;
            case 'nurse_registration':
                $registrationCode = $this->generateRegistrationCode();
                $userData = [
                    'email' => $paymentDetails['data']['customer']['email'],
                    'name' => $requestDetails['name'],
                    'phone_number' => $requestDetails['phone_number'],
                    'registration_code' => $registrationCode,
                ];
                $paymentData = [
                    'email' => $paymentDetails['data']['customer']['email'],
                    'name' => $requestDetails['name'],
                    'phone_number' => $requestDetails['phone_number'],
                    'amount' => $paymentDetails['data']['amount'],
                    'fees' => $paymentDetails['data']['fees'],
                    'balance' => ($paymentDetails['data']['amount'] - $paymentDetails['data']['fees']),
                    'reference' => $paymentDetails['data']['reference'],
                    'currency' => $paymentDetails['data']['currency'],
                    'paid_at' => Carbon::create($paymentDetails['data']['paid_at']),
                ];
                $registrationPayment = NurseRegistrationPayment::create($paymentData);
                $nurseRegistration = NurseRegistration::create([
                    'nurse_registration_payment_id' => $registrationPayment->id,
                    'name' => $userData['name'],
                    'email' => $userData['email'],
                    'phone_number' => $userData['phone_number'],
                    'registration_code' => $userData['registration_code']
                    ]);

                $mailData = [
                    'email' => $userData['email'],
                    'name' => $userData['name'],
                    'subject' => 'Nurses Recruitment Registration',
                    'registration_code' => $userData['registration_code'],
                ];

                $message = 'Payment Completed Successfully, Please Check Your Email For Your Registration Code';
                Mail::to($mailData['email'])->send(new NurseRegistrationMail($mailData));
                break;
            default:
            $message = 'Payment Type Cannot be determined';
        }


        Session::forget('requestDetails');

        return \redirect('/')->with('success', $message);
        // Now you have the payment details,
        // you can store the authorization_code in your db to allow for recurrent subscriptions
        // you can then redirect or do whatever you want
    }

    public function getDonationInfo(){
        $donors = Donor::all()->count();
        $donationAmount = Donation::all()->sum('amount');
        $data = [
            'donors' => $donors,
            'donationAmount' => $donationAmount
        ];
        return response()->json($data);
    }

    public function generateRegistrationCode(){
        do{
            //generate key
            $code = Str::random(6);
        } while(NurseRegistration::where('registration_code', $code)->exists());
        return $code;
    }
}
