<?php

namespace App\Http\Controllers;

use App\Mail\NurseRegisterSuccessMail;
use App\Models\NurseRegistration;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class NurseRegistrationController extends Controller
{

    public function __construct(){
        $this->middleware(['auth'])->except('update');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $nurses = NurseRegistration::latest()->get();
        return response()->json($nurses);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\NurseRegistration  $nurseRegistration
     * @return \Illuminate\Http\Response
     */
    public function show(NurseRegistration $nurseRegistration)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\NurseRegistration  $nurseRegistration
     * @return \Illuminate\Http\Response
     */
    public function edit(NurseRegistration $nurseRegistration)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\NurseRegistration  $nurseRegistration
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request, NurseRegistration $nurseRegistration)
    {
        DB::beginTransaction();
        $isRegistered = ($nurseRegistration->dob !== null);
        try {
            $nurseRegistration->update($request->all());
            DB::commit();
            $mailData = [
                'email' => $request->email,
                'name' => $request->name,
                'subject' => 'Nurses Recruitment Registration - Success',
            ];
            if(!$isRegistered){
                Mail::to($mailData['email'])->send(new NurseRegisterSuccessMail($mailData));
            }
            return back()->with('success', 'Registration Completed Successfully');
        } catch (\Exception $exception){
            DB::rollBack();
            return back()->with('warning', 'Something Went Wrong, Please Try Again Later');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\NurseRegistration  $nurseRegistration
     * @return \Illuminate\Http\Response
     */
    public function destroy(NurseRegistration $nurseRegistration)
    {
        //
    }


    /**
     * Verify if a resource exists.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function verifyRegistration(Request $request){
        $registrationDetails = NurseRegistration::where('registration_code', $request->registration_code)
            ->where('email', $request->email)
            ->first();
        if($registrationDetails){
            return response()->json($registrationDetails);
        }

        return response()->json('Invalid Registration Code Or Email', 403);
    }
}
