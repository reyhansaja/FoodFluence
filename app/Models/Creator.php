<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Creator extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'username_social',
        'base_dp_rateset',
        'portfolio_url',
        'city',
        'wallet_balance',
        'pending_escrow_balance',
    ];

    protected $casts = [
        'base_dp_rate' => 'decimal:2',
        'wallet_balance' => 'decimal:2',
        'pending_escrow_balance' => 'decimal:2',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function campaigns()
    {
        return $this->hasMany(Campaign::class);
    }

    public function bids()
    {
        return $this->hasMany(Bid::class);
    }
}
