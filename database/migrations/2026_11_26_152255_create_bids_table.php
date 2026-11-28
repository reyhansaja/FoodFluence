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
        Schema::create('bids', function (Blueprint $table) {
            $table->id();
            $table->foreignId('campaign_id')->constrained()->onDelete('cascade');
            $table->foreignId('creator_id')->constrained()->onDelete('cascade');
            $table->decimal('bid_base_dp', 12, 2);
            $table->decimal('bid_commission_per_scan', 12, 2);
            $table->text('pitch_message')->nullable();
            $table->integer('ai_margin_fit_score')->nullable();
            $table->integer('ai_bep_coupons')->nullable();
            $table->enum('status', ['pending', 'accepted', 'rejected'])->default('pending');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bids');
    }
};
