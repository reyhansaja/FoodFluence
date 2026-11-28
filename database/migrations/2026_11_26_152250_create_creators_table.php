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
        Schema::create('creators', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('username_social');
            $table->decimal('base_dp_rate', 12, 2)->default(0);
            $table->string('portofolio_url')->nullable();
            $table->string('city');
            $table->decimal('wallet_balance', 12, 2)->default(0);
            $table->decimal('pending_escrow_balance', 12, 2)->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('creators');
    }
};
