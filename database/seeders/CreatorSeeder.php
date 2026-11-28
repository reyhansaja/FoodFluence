<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Creator;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class CreatorSeeder extends Seeder
{
    public function run(): void
    {
        $creatorsData = [
            [
                'name' => 'Foodie Jakarta',
                'email' => 'foodiejkt@example.com',
                'username_social' => '@foodie_jkt',
                'base_dp_rate' => 50000.00, // Kategori Hemat
                'portofolio_url' => 'https://instagram.com/foodie_jkt',
                'city' => 'Jakarta',
            ],
            [
                'name' => 'Kuliner Bandung Euy',
                'email' => 'kulinerbdg@example.com',
                'username_social' => '@kuliner_bdg',
                'base_dp_rate' => 75000.00, // Kategori Hemat (Batas Bawah)
                'portofolio_url' => 'https://tiktok.com/@kuliner_bdg',
                'city' => 'Bandung',
            ],
            [
                'name' => 'Makan Terus Jogja',
                'email' => 'makanjogja@example.com',
                'username_social' => '@makanjogja',
                'base_dp_rate' => 100000.00, // Kategori Sesuai Pasar
                'portofolio_url' => 'https://instagram.com/makanjogja',
                'city' => 'Yogyakarta',
            ],
            [
                'name' => 'Surabaya Food Directory',
                'email' => 'sbyfood@example.com',
                'username_social' => '@sbyfoodie',
                'base_dp_rate' => 149000.00, // Kategori Sesuai Pasar (Menjelang Premium)
                'portofolio_url' => 'https://instagram.com/@sbyfoodie',
                'city' => 'Surabaya',
            ],
            [
                'name' => 'Anak Jajan Official',
                'email' => 'anakjajan@example.com',
                'username_social' => '@anakhitsjajan',
                'base_dp_rate' => 200000.00, // Kategori Premium
                'portofolio_url' => 'https://instagram.com/anakhitsjajan',
                'city' => 'Jakarta',
            ],
            [
                'name' => 'Bali Food Hunter',
                'email' => 'balifood@example.com',
                'username_social' => '@balifoodhunter',
                'base_dp_rate' => 0.00, // Kreator Gratis (Uji coba test BEP = 1)
                'portofolio_url' => 'https://tiktok.com/@balifoodhunter',
                'city' => 'Bali',
            ],
        ];

        foreach ($creatorsData as $data) {
            // 1. Buat User-nya dulu
            $user = User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => Hash::make('password123'),
            ]);

            // 2. Buat Creator yang terhubung ke User tersebut
            Creator::create([
                'user_id' => $user->id,
                'username_social' => $data['username_social'],
                'base_dp_rate' => $data['base_dp_rate'],
                'portofolio_url' => $data['portofolio_url'],
                'city' => $data['city'],
                'wallet_balance' => 0.00,
                'pending_escrow_balance' => 0.00,
            ]);
        }
    }
}