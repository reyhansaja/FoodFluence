<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Creator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class AiMatchController extends Controller
{
    public function recommend(Request $request)
    {
        $validated = $request->validate([
            'users_id' => 'required|numeric',
            'menu_price' => 'required|numeric',
            'hpp_cost' => 'required|numeric',
            'discount_percent' => 'required|numeric',
            'coupon_quota' => 'required|integer',
            'category' => 'nullable|string',
            'city' => 'nullable|string',
            'menu_name' => 'nullable|string',
        ]);

        $menuPrice = $validated['menu_price'];
        $hpp = $validated['hpp_cost'];
        $discount = $validated['discount_percent'];
        $quota = $validated['coupon_quota'];

        $netRevenue = $menuPrice - ($menuPrice * ($discount/100));
        $profitPerPortion = $netRevenue - $hpp;

        $creators = Creator::all()->map(function ($c) {
            return [
                'id' => $c->id,
                'name' => $c->username_social,
                'city' => $c->city,
                'base_dp' => $c->base_dp_rate,
                'portofolio_url' => $c->portofolio_url,
            ];
        });

        $webhookUrlTest = env('WEBHOOK_URL_TEST');
        $webhookUrlProduction = env('WEBHOOK_URL_PRODUCTION');
        $aiRecommendations = [];
        $recommendations = [];
        $commisiion = 2500;

        if ($webhookUrlProduction) {
            try {
                $response = Http::timeout(10)->post($webhookUrlProduction, [
                    'users_id' => $validated['users_id'],
                    'profit_per_portion' => $profitPerPortion,
                    'coupon_quota' => $quota,
                    'menu_name' => $validated['menu_name'],
                    'menu_price' => $menuPrice,
                    'hpp_const' => $hpp,
                    'commission' => $commisiion,
                    'discount_percent' => $discount,
                    'creators' => $creators,
                ]);

                if ($response->successful()) {
                    $results = $response->json();
                    $recommendations = $results['recommendations'] ?? [];
                    $aiRecommendations = $results['ai_recommendations'] ?? $results['ai_results'] ?? [];
                }
            } catch (\Exception $e) {
                Log::error('error callback: ' . $e->getMessage());
            }

            if (empty($recommendations)) {
                $recommendations = Creator::all()->map(function ($c) use ($profitPerPortion, $quota) {
                    $totalCost = $c->base_dp_rate + (2500 * $quota);
                    $potentialProfit = ($profitPerPortion * $quota) - $totalCost;
                    $fitScore =  min(99, max(60, round(85 + (($potentialProfit/max(1, $totalCost)) * 10))));

                    return [
                        'id' => $c->id,
                        'name' => $c->username_social,
                        'city' => $c->city,
                        'base_dp' => $c->base_dp_rate,
                        'portofolio_url' => $c->portofolio_url,
                        'fit_score' => $fitScore,
                        'badge' => $c->base_dp_rate <= 75000 ? 'Hemat' : ($c->base_dp_rate >=150000 ? 'Premium' : 'Sesuai Pasar'),
                        'estimated_bep' => ceil($c->base_dp_rate/max(1, $profitPerPortion)),
                    ];  
                })->sortByDesc('fit_score')->values();

                $aiRecommendations = $profitPerPortion > 0 ? ['Margin aman untuk melakukan promosi', 'Dapat mempertimbangkan kuota kupon'] : ['Margin terlalu tipis, sesuaikan diskon atau HPP'];
            }

            return response()->json([
                'status' => 'success',
                'profit_per_portion' => $profitPerPortion,
                'recommendations' => $recommendations,
                'ai_recommendations' => $aiRecommendations,
            ]);
        }
    }
}