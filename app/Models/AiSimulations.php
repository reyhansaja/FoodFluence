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
        Schema::create('ai_simulations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->string('menu_name', 150)->nullable();
            $table->decimal('menu_price', 12, 2);
            $table->decimal('hpp_cost', 12, 2);
            $table->decimal('discount_percent', 5, 2)->default(0);
            $table->unsignedInteger('coupon_quota')->default(50);
            $table->string('target_city', 100)->nullable();
            $table->json('ai_result_json');
            $table->boolean('is_converted')->default(false);
            $table->timestamps();

            $table->index(['user_id', 'created_at'], 'idx_user_simulations');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ai_simulations');
    }
};