<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CouponRedemption extends Model
{
    use HasFactory;

    protected $fillable = [
        'coupon_id',
        'cashier_id',
        'receipt_number',
        'total_transaction_amount',
    ];

    protected $casts = [
        'total_transaction_amount' => 'decimal:2',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public function coupon(): BelongsTo
    {
        return $this->belongsTo(Coupon::class);
    }

    public function cashier(): BelongsTo
    {
        return $this->belongsTo(Cashier::class);
    }
}
