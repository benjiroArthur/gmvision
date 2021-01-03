<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;
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
        $paystack = new Paystack();

        //Initialize the required data here locally not from blade view
        $request->reference = $paystack->genTranxRef();
        $request->key = config('paystack.secretKey');
        $request->amount .= '00';
        $request->currency = 'GHS';

        try{
            return $paystack->getAuthorizationUrl()->redirectNow();
        }catch(\Exception $e) {
            dd($e);
            return Redirect::back()->with('error', 'The paystack token has expired. Please refresh the page and try again.');
        }
    }

    /**
     * Obtain Paystack payment information
     * @return void
     * @throws \Unicodeveloper\Paystack\Exceptions\PaymentVerificationFailedException
     */
    public function handleGatewayCallback()
    {
        $paystack = new Paystack();
        $paymentDetails = $paystack->getPaymentData();

        return $paymentDetails;
        // Now you have the payment details,
        // you can store the authorization_code in your db to allow for recurrent subscriptions
        // you can then redirect or do whatever you want
    }
}
