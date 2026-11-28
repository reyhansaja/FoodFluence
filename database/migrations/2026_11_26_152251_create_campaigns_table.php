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
        Schema::create('campaigns', function (Blueprint $table) {
            $table->id();
            $table->foreignId('merchant_id')->constrained()->onDelete('cascade');
            $table->foreignId('creator_id')->nullable()->constrained()->onDelete('set null');
            $table->string('slug')->unique();
            $table->string('menu_name');
            $table->decimal('menu_price', 12, 2);
            $table->decimal('hpp_cost', 12, 2);
            $table->decimal('discount_percent', 5, 2);
            $table->decimal('min_order_amount', 12, 2);
            $table->integer('coupon_quota');
            $table->integer('coupons_redeemed')->default(0);
            $table->decimal('base_dp_amount', 12, 2);
            $table->decimal('commission_per_scan', 12, 2);
            $table->decimal('platform_fee', 12, 2)->default(0);
            $table->enum('status', ['draft', 'open_bidding', 'bid_accepted', 'escrow_funded', 'dp_released', 'coupon_redeemed', 'completed'])->default('draft');
            $table->text('ai_feasibility_status')->nullable();
            $table->integer('ai_break_even_coupons')->nullable();
            $table->decimal('ai_projected_profit', 12, 2)->nullable();
            $table->json('ai_suggestions')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('campaigns');
    }
};
