<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NurseRegistrationPayment extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'phone_number',
        'amount',
        'fees',
        'balance',
        'reference',
        'currency',
        'paid_at'
    ];
}
