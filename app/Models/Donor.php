<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Donor extends Model
{
    use HasFactory;protected $fillable = ['first_name', 'last_name', 'email', 'phone_number'];
    //relationships
    public function donation(){
        return $this->hasMany(Donation::class);
    }
}
