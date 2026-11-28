<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Bid extends Model
{
    use HasFactory;

    protected $fillable = [
        'campaign_id',
        'creator_id',
        'bid_base_dp',
        'bid_commission_per_scan',
        'pitch_message',
        'ai_margin_fit_score',
        'ai_bep_coupons',
        'status',
    ];

    protected $casts = [
        'bid_base_dp' => 'decimal:2',
        'bid_commission_per_scan' => 'decimal:2',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public function campaign(): BelongsTo
    {
        return $this->belongsTo(Campaign::class);
    }

    public function creator(): BelongsTo
    {
        return $this->belongsTo(Creator::class);
    }
}
