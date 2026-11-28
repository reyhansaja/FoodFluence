# Struktur Folder Proyek FoodFluence

Dokumen ini memetakan struktur direktori dan organisasi kode sumber aplikasi **FoodFluence** (Laravel 12 + Inertia React + TypeScript + Tailwind CSS v4).

---

## 1. Ikhtisar Arsitektur Direktori

```text
foodfluence/
├── app/                                 # Logika backend PHP & Domain Models
│   ├── Actions/Fortify/                 # Aksi registrasi & manajemen akun (Laravel Fortify)
│   ├── Concerns/                        # Trait & reusable validation rules
│   ├── Http/                            # Controller & Middleware Inertia/Appearance
│   ├── Models/                          # 9 Eloquent Models (UMKM, Kreator, Kampanye, dll.)
│   └── Providers/                       # Service providers Laravel
├── bootstrap/                           # Bootstrap aplikasi & konfigurasi framework
├── config/                              # File konfigurasi Laravel (auth, session, fortify, dll.)
├── database/                            # Migrasi skema database, seeders & factories
│   ├── factories/                       # Factory data dummy untuk testing
│   ├── migrations/                      # Migrasi tabel sistem & 8 tabel domain F&B
│   └── seeders/                         # Seeder database awal
├── docs/                                # Dokumentasi resmi proyek & PRD
│   ├── design_system_ui_ux_...md        # Spesifikasi UI/UX & Design Tokens (Google Stitch)
│   ├── prd_foodfluencer.md              # Product Requirements Document (PRD) v2.0
│   └── struktur_folder.md               # Peta struktur folder aplikasi ini
├── public/                              # Entry point web server & aset statis publik
├── resources/                           # Aset Frontend (React, Inertia, Tailwind CSS)
│   ├── css/                             # Konfigurasi Tailwind CSS v4 (@theme & tokens)
│   ├── js/                              # Kode sumber TypeScript/React
│   │   ├── actions/                     # Generated route actions (Laravel Wayfinder)
│   │   ├── components/                  # Komponen UI (shadcn/ui, sidebar, icon, dialog)
│   │   ├── hooks/                       # React custom hooks (appearance, clipboard, dll.)
│   │   ├── layouts/                     # Master layout (Merchant, Creator, App, Auth)
│   │   ├── lib/                         # Utilitas helper (cn / classnames merge)
│   │   ├── pages/                       # Halaman aplikasi berbasis Inertia.js
│   │   │   ├── auth/                    # Halaman autentikasi & reset password
│   │   │   ├── cashier/                 # Terminal scan QR & login kasir fisik kedai
│   │   │   ├── coupon/                  # Halaman klaim tiket QR dinamis pelanggan
│   │   │   ├── creator/                 # Dasbor, bursa, kampanye, dompet kreator
│   │   │   ├── merchant/                # Dasbor, kalkulator AI, seleksi bid, escrow
│   │   │   └── settings/                # Pengaturan profil, keamanan, preferensi
│   │   ├── routes/                      # Typed route helper (Laravel Wayfinder)
│   │   └── types/                       # Definisi antarmuka TypeScript (.d.ts)
│   └── views/                           # Root Blade template (app.blade.php)
├── routes/                              # Definisi rute aplikasi (web, settings, console)
├── tests/                               # Test suite berbasis Pest PHP
│   ├── Feature/                         # Feature test autentikasi & dasbor
│   └── Unit/                            # Unit test logika spesifik
├── UI/                                  # Referensi tangkapan layar desain mockup UI
├── AGENTS.md                            # Panduan & aturan instruksi AI coding agent
├── composer.json                        # Dependensi backend PHP
├── package.json                         # Dependensi frontend Node.js / React
├── tsconfig.json                        # Konfigurasi TypeScript
└── vite.config.ts                       # Konfigurasi Vite & Wayfinder bundler
```

---

## 2. Rincian Direktori Penting

### 2.1. Backend (`app/`)
* **`app/Models/`**: Berisi seluruh representasi data entitas utama F&B Marketing:
  * `Merchant.php` : Profil kedai UMKM F&B, kategori kuliner, alamat, dan nomor rekening refund.
  * `Creator.php` : Profil influencer lokal (handle media sosial, estimasi base DP, rate card).
  * `Campaign.php` : Data kampanye promosi kuliner, status siklus dana (`DRAFT` hingga `COMPLETED`).
  * `Bid.php` : Penawaran kolaborasi kreator (usulan Base DP, komisi per scan, catatan pitch).
  * `Coupon.php` : Kupon promosi dinamis sekali pakai, token alfanumerik, dan batas waktu aktif.
  * `CouponRedemption.php` : Catatan transaksi pemindaian kupon di kasir toko (nomor struk, total belanja).
  * `EscrowTransaction.php` : Buku besar mutasi dana deposit escrow, pencairan DP, dan auto-refund.
  * `Cashier.php` : Kredensial terminal kasir fisik (Kode Gerai & PIN 6-digit).
  * `User.php` : Model akun pengguna utama terintegrasi Laravel Fortify (Multi-role).

---

### 2.2. Database & Migrasi (`database/`)
* **`database/migrations/`**:
  * `2026_11_26_152249_create_merchants_table.php` : Tabel profil gerai UMKM.
  * `2026_11_26_152250_create_creators_table.php` : Tabel kreator/influencer.
  * `2026_11_26_152251_create_campaigns_table.php` : Tabel kampanye promosi F&B.
  * `2026_11_26_152255_create_bids_table.php` : Tabel lamaran/bidding kreator.
  * `2026_11_26_152256_create_coupons_table.php` : Tabel tiket QR kupon pelanggan.
  * `2026_11_26_152257_create_escrow_transactions_table.php` : Tabel buku besar escrow.
  * `2026_11_26_152301_create_cashiers_table.php` : Tabel autentikasi kasir gerai.
  * `2026_11_26_152302_create_coupon_redemptions_table.php` : Tabel validasi nota kasir.

---

### 2.3. Frontend (`resources/js/pages/`)

Setiap halaman di bawah ini terhubung ke rute Inertia pada [routes/web.php](file:///media/febrian/Local%20Disk/Techcomfest/foodfluence/routes/web.php):

#### A. Gerai UMKM Kuliner (`pages/merchant/`)
* **`dashboard.tsx`** (`/merchant/dashboard`): Dasbor ringkasan 4 metrik KPI utama (Saldo Escrow, Kupon Tervalidasi, Estimasi Omzet, Kampanye Aktif) dan tabel kampanye berjalan.
* **`ai-calculator.tsx`** (`/merchant/ai-calculator`): Simulasi kelayakan margin F&B (HPP, Diskon, BEP kupon, dan pencocokan profil kreator).
* **`bids.tsx`** (`/merchant/campaigns/bids`): Halaman seleksi bid kreator pelamar lowongan dengan penilaian kecocokan AI (*AI Margin Fit Score*).
* **`campaigns.tsx`** (`/merchant/campaigns`): Daftar seluruh kampanye aktif, pemantauan kuota kupon real-time, dan status escrow.
* **`escrow-checkout.tsx`** (`/merchant/escrow-checkout`): Generator MOU digital otomatis dan checkout deposit escrow via payment gateway.
* **`escrow-history.tsx`** (`/merchant/escrow-history`): Buku besar pencatatan mutasi escrow, pencairan DP kreator, dan auto-refund saldo.
* **`settings.tsx`** (`/merchant/settings`): Pengaturan profil gerai dan generator Kode Gerai + PIN 6-digit akses terminal kasir.

#### B. Content Creator (`pages/creator/`)
* **`dashboard.tsx`** (`/creator/dashboard`): Dompet saldo kreator (Saldo Dapat Ditarik vs Pending Escrow), tautan kupon unik, dan grafik konversi.
* **`marketplace.tsx`** (`/creator/marketplace`): Bursa lowongan F&B berdasarkan radius lokasi dan *Slide-Over Bid Drawer* dengan *AI Pitch Advisor*.
* **`campaigns.tsx`** (`/creator/campaigns`): Kampanye aktif kreator, formulir pengiriman tautan video tayang untuk pencairan Base DP.
* **`withdrawals.tsx`** (`/creator/withdrawals`): Formulir penarikan saldo instan (*Instant Disbursement*) ke bank/e-wallet dan riwayat transfer.
* **`analytics.tsx`** (`/creator/analytics`): Analitik performa video, klik kupon, hingga grafik jam sibuk kasir toko (*walk-in peak hours*).

#### C. Staf Kasir & Terminal Toko (`pages/cashier/`)
* **`login.tsx`** (`/cashier/login`): Halaman otorisasi staf kasir via Kode Gerai & PIN 6-digit keypad.
* **`scanner.tsx`** (`/cashier/scanner`): Pemindai kamera browser berbingkai kontras tinggi, input nomor struk nota fisik, dan validasi syarat minimal belanja.

#### D. Pelanggan Akhir (`pages/coupon/`)
* **`claim.tsx`** (`/c/{slug?}`): Antarmuka *mobile-first* tiket diskon dinamis dengan *live countdown timer* (01:59:45) dan kode alfanumerik cadangan.

#### E. Publik & Autentikasi (`pages/auth/` & `welcome.tsx`)
* **`welcome.tsx`** (`/`): Landing page publik dengan kalkulator mockup AI, alur 4 langkah kerja, dan statistik dampak ekonomi SDG 8.
* **`auth/login.tsx`** (`/login`): Formulir masuk multi-peran dengan pintasan langsung ke terminal kasir.
* **`auth/register.tsx`** (`/register`): Registrasi adaptif dengan selektor peran interaktif (*Pemilik UMKM F&B* vs *Influencer Lokal*).

---

### 2.4. Layouts & Navigasi (`resources/js/layouts/` & `resources/js/components/`)
* **`dashboard-sidebar.tsx`** (`resources/js/components/dashboard-sidebar.tsx`): Komponen master sidebar universal responsif (mobile topbar burger, drawer slide-over dengan backdrop, dan desktop sidebar).
* **`merchant-layout.tsx`**: Wrapper layout hijau zamrud (`#059669`) untuk gerai UMKM F&B berbasis `DashboardSidebar`.
* **`creator-layout.tsx`**: Wrapper layout oranye terakota (`#EA580C`) untuk content creator kuliner berbasis `DashboardSidebar`.
* **`auth-layout.tsx`**: Tata letak layar split-screen 50/50 untuk login dan registrasi.
* **`app-layout.tsx`**: Layout default fallback bawaan starter kit.

---

### 2.5. Dokumentasi (`docs/`)
* **`prd_foodfluencer.md`**: Dokumen persyaratan produk (PRD) v2.0 yang mencakup latar belakang, urgensi SDG 8, 5 fitur utama MVP, alur pengguna, dan aturan bisnis anti-boncos.
* **`design_system_ui_ux_specification_google_stitch_ready_foodfluence.md`**: Spesifikasi token warna, tipografi, ukuran, dan blueprint setiap layar aplikasi.
* **`struktur_folder.md`**: Peta struktur folder komprehensif ini.
