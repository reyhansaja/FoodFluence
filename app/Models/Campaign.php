<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Campaign extends Model
{
    use HasFactory;

    protected $fillable = [
        'merchant_id',
        'creator_id',
        'slug',
        'menu_name',
        'menu_price',
        'hpp_cost',
        'discount_percent',
        'min_order_amount',
        'coupon_quota',
        'coupons_redeemed',
        'base_dp_amount',
        'commission_per_scan',
        'platform_fee',
        'status',
        'ai_feasibility_status',
        'ai_break_even_coupons',
        'ai_projected_profit',
        'ai_suggestions',
    ];

    protected $casts = [
        'menu_price' => 'decimal:2',
        'hpp_cost' => 'decimal:2',
        'discount_percent' => 'decimal:2',
        'min_order_amount' => 'decimal:2',
        'base_dp_amount' => 'decimal:2',
        'commission_per_scan' => 'decimal:2',
        'platform_fee' => 'decimal:2',
        'ai_projected_profit' => 'decimal:2',
        'ai_suggestions' => 'array',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public function merchant(): BelongsTo
    {
        return $this->belongsTo(Merchant::class);
    }

    public function creator(): BelongsTo
    {
        return $this->belongsTo(Creator::class);
    }

    public function bids(): HasMany
    {
        return $this->hasMany(Bid::class);
    }

    public function coupons(): HasMany
    {
        return $this->hasMany(Coupon::class);
    }

    public function escrowTransactions(): HasMany
    {
        return $this->hasMany(EscrowTransaction::class);
    }

    public function getProgressPercentAttribute(): float
    {
        if ($this->coupon_quota === 0) {
            return 0;
        }

        return round(($this->coupons_redeemed / $this->coupon_quota) * 100, 1);
    }

    public function getRemainingCouponsAttribute(): int
    {
        return $this->coupon_quota - $this->coupons_redeemed;
    }
}
