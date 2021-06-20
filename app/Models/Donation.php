<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Donation extends Model
{
    use HasFactory;
    protected $fillable = ['donor_id', 'amount', 'fees', 'balance', 'reference', 'currency', 'project_id', 'paid_at'];

    //relationship
    public function donor() {
        return $this->belongsTo(Donor::class);
    }
    public function project() {
        return $this->belongsTo(Project::class);
    }

    public function getAmountAttribute($value) {
        $value /= 100;
        return round($value, 2);
    }

    public function getBalanceAttribute($value) {
        $value /= 100;
        return round($value, 2);
    }
}
