<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('escrow_transactions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('campaign_id')->constrained()->onDelete('cascade');
            $table->foreignId('merchant_id')->constrained()->onDelete('cascade');
            $table->foreignId('creator_id')->nullable()->constrained()->onDelete('set null');
            $table->enum('type', ['base_dp', 'coupon_deposit', 'commission_release', 'dp_release', 'refund', 'platform_fee']);
            $table->decimal('amount', 12, 2);
            $table->enum('status', ['pending', 'completed', 'failed', 'refunded']);
            $table->string('payment_gateway_ref')->nullable();
            $table->json('metadata')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('escrow_transactions');
    }
};
