<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NurseRegistration extends Model
{
    use HasFactory;

    protected $fillable = [
        'nurse_registration_payment_id',
        'name',
        'email',
        'dob',
        'phone_number',
        'registration_code',
        'website',
        'residential_address',
        'nationality',
        'profession',
        'emergency_contact',
        'name_of_relative',
        'postal_address',
        'experience',
        'organizations_worked_with',
        'travel_experience'
    ];

}
