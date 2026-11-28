<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

// FoodFluence Core MVP Routes
Route::inertia('/merchant/dashboard', 'merchant/dashboard')->name('merchant.dashboard');
Route::inertia('/merchant/ai-calculator', 'merchant/ai-calculator')->name('merchant.ai-calculator');
Route::inertia('/merchant/campaigns/bids', 'merchant/bids')->name('merchant.bids');
Route::inertia('/merchant/campaigns', 'merchant/campaigns')->name('merchant.campaigns');
Route::inertia('/merchant/escrow-history', 'merchant/escrow-history')->name('merchant.escrow-history');
Route::inertia('/merchant/settings', 'merchant/settings')->name('merchant.settings');
Route::inertia('/merchant/escrow-checkout', 'merchant/escrow-checkout')->name('merchant.escrow-checkout');

Route::inertia('/creator/dashboard', 'creator/dashboard')->name('creator.dashboard');
Route::inertia('/creator/marketplace', 'creator/marketplace')->name('creator.marketplace');
Route::inertia('/creator/campaigns', 'creator/campaigns')->name('creator.campaigns');
Route::inertia('/creator/withdrawals', 'creator/withdrawals')->name('creator.withdrawals');
Route::inertia('/creator/analytics', 'creator/analytics')->name('creator.analytics');

Route::inertia('/c/{slug?}', 'coupon/claim')->name('coupon.claim');
Route::inertia('/cashier/scanner', 'cashier/scanner')->name('cashier.scanner');
Route::inertia('/cashier/login', 'cashier/login')->name('cashier.login');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
