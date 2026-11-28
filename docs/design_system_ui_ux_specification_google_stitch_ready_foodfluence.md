# Design System & UI/UX Specification: FoodFluence
**Target Implementasi:** Google Stitch / Frontend Web Application (React + Tailwind CSS)  
**Karakteristik Visual:** *Clean Modern FinTech & SaaS* dipadukan dengan sentuhan hangat industri kuliner (*approachable, trustworthy, data-driven*).

---

## 1. Global Design System (System Prompt untuk Google Stitch)

Gunakan blok spesifikasi di bawah ini sebagai instruksi gaya utama (*base design prompt*) saat menghasilkan seluruh layar di Google Stitch:

> **Design System Context:**  
> Build a modern, clean, responsive B2B2C FinTech & Marketing SaaS web application named **FoodFluence** for local F&B businesses and content creators.  
> - **Color Palette:** Primary color is Deep Emerald Green (`#059669`) representing financial trust, profit margin, and escrow security. Secondary accent color is Warm Terracotta Orange (`#EA580C`) representing culinary energy and primary action buttons. Main canvas background is Soft Slate White (`#F8FAFC`), card surfaces are Pure White (`#FFFFFF`) with subtle `1px solid #E2E8F0` borders and `12px` rounded corners.  
> - **Typography:** Use `Plus Jakarta Sans` (Bold/SemiBold) for headings and large KPI numbers, paired with `Inter` (Regular/Medium) with `tabular-nums` for body text, data tables, and currency values (`Rp`).  
> - **Semantic Colors:** Success/Profitable (`#10B981` with `#ECFDF5` badge fill), Warning/Escrow Held (`#F59E0B` with `#FFFBEB` badge fill), Danger/Loss Risk (`#EF4444` with `#FEF2F2` badge fill).  
> - **UI Style:** Crisp SaaS dashboard cards, subtle elevation shadows (`0 1px 3px rgba(15, 23, 42, 0.06)`), clear visual hierarchy, generous whitespace, and high-contrast mobile-first views for QR scanning and coupon redemption.

---

## 2. Design Tokens

### 2.1. Palet Warna
| Token | Nama | Kode Hex | Penggunaan Utama |
| :--- | :--- | :--- | :--- |
| `--color-primary` | Deep Emerald Green | `#059669` | Brand identity, sidebar aktif, indikator profit, tombol konfirmasi finansial. |
| `--color-primary-hover` | Dark Emerald | `#047857` | Hover state tombol utama hijau. |
| `--color-accent` | Warm Terracotta | `#EA580C` | CTA utama kampanye (`Ajukan Bid`, `Buat Kampanye`), sorotan F&B. |
| `--color-bg-canvas` | Soft Slate White | `#F8FAFC` | Latar belakang utama halaman dasbor. |
| `--color-surface` | Pure White | `#FFFFFF` | Latar belakang kartu, modal, formulir, dan tabel. |
| `--color-border` | Slate Border | `#E2E8F0` | Garis tepi kartu, input field, dan pemisah tabel. |
| `--color-text-primary` | Deep Slate | `#0F172A` | Judul utama, angka KPI, teks penting. |
| `--color-text-secondary` | Muted Slate | `#475569` | Label formulir, deskripsi kartu, subjudul. |
| `--color-success` | Mint Emerald | `#10B981` | Badge `LAYAK`, `KUPON VALID`, `DP_RELEASED`. |
| `--color-warning` | Warm Amber | `#F59E0B` | Badge `ESCROW_FUNDED`, `MARGIN TIPIS`, timer peringatan. |
| `--color-danger` | Coral Red | `#EF4444` | Badge `RISIKO BONCOS`, `KEDALUWARSA`, pesan error. |

### 2.2. Tipografi & Skala Ukuran
* **Font Display & Headings:** `Plus Jakarta Sans`
  * `H1 (Page Title):` `28px` / `1.75rem`, Weight `700`, Line-height `1.25`
  * `H2 (Section Title):` `20px` / `1.25rem`, Weight `600`, Line-height `1.3`
  * `KPI Metric Value:` `24px–32px`, Weight `700`, `font-variant-numeric: tabular-nums`
* **Font Body & UI:** `Inter`
  * `Body Regular:` `14px` / `0.875rem`, Weight `400`, Line-height `1.5`
  * `Label / Table Header:` `12px` / `0.75rem`, Weight `600`, Letter-spacing `0.03em`

---

## 3. Komponen UI Standar
1. **Metric KPI Card:** Kartu putih (`border-radius: 12px`, `padding: 20px`) berisi ikon kecil berlatar soft tint di sudut kanan atas, label abu-abu di atas, angka besar `tabular-nums` di tengah, dan indikator tren (`+18% minggu ini`) di bawah.
2. **Status Pill Badge:** Kapsul membulat penuh (`border-radius: 9999px`, `padding: 4px 10px`, font `12px` SemiBold) untuk status kampanye (`OPEN_BIDDING`, `ESCROW_FUNDED`, `COUPON_REDEEMED`).
3. **AI Decision Banner:** Kotak peringatan menonjol dengan aksen garis kiri `4px` tebal dan ikon kilau AI untuk menampilkan keputusan kelayakan margin atau saran harga.
4. **Progress Quota Bar:** Batang horizontal (`height: 8px`, rounded) berwarna `#059669` di atas track `#E2E8F0` untuk memvisualisasikan rasio kupon terpakai (misal: `34/50 Kupon`).

---

## 4. Spesifikasi Tata Letak Per Halaman (Screen Blueprints)

### Screen 1: Landing Page (`/` — Desktop & Mobile)
* **Top Navigation:** Logo `FoodFluence`, link navigasi (`Cara Kerja`, `Kalkulator ROI`, `Bursa Kampanye`), tombol ghost `Masuk`, tombol solid `#059669` `Daftar Gratis`.
* **Hero Section (2-Column):**
  * Kiri: Badge *"Platform Kolaborasi Kuliner & Kreator Lokal"*, Headline H1 *"Promosi Kuliner Terukur, Untung Dibagi Adil"*, paragraf deskripsi singkat, dan dua tombol CTA berdampingan (`Daftar sebagai UMKM F&B` berwarna `#059669` dan `Gabung sebagai Kreator` berwarna `#EA580C`).
  * Kanan: Ilustrasi UI Mockup yang memperlihatkan kartu kalkulator margin AI berdampingan dengan tampilan tiket QR valid di kasir.
* **How It Works (4-Step Horizontal Cards):** (1) Hitung Margin & Pilih Kreator via AI → (2) Kunci MOU & Deposit Escrow → (3) Sebar Tautan Kupon Dinamis → (4) Scan QR di Kasir & Bagi Hasil Otomatis.
* **SDG 8 Impact Strip:** 3 kolom statistik dampak ekonomi lokal dan perlindungan pekerja kreatif.

### Screen 2: Login Page (`/login` — Split Screen 50/50)
* **Panel Kiri (Latar `#059669`, Teks Putih):** Logo putih, *tagline*, kartu pratinjau metrik mengambang (*"42 Kupon Tervalidasi di Kasir • ROI +215%"*), dan 3 poin jaminan keamanan *escrow*.
* **Panel Kanan (Latar `#FFFFFF`, Formulir Terpusat Max-Width `420px`):**
  * Judul `Selamat Datang Kembali`, tombol `Masuk dengan Google`, pemisah `atau masuk dengan email / WhatsApp`.
  * Input `Email / Nomor WhatsApp`, input `Kata Sandi` (dengan toggle ikon mata), baris `Ingat saya` & `Lupa Kata Sandi?`.
  * Tombol CTA lebar penuh `Masuk Sekarang` (`#059669`).
  * **Cashier Quick-Access Box:** Kotak berlatar `#F8FAFC` dengan border `#E2E8F0` berisi teks *"Anda staf kasir kedai?"* dan tautan aksen `#EA580C` `Buka Scanner Kasir (Login PIN Gerai)`.

### Screen 3: Registrasi Multi-Role (`/register` — Split Screen 50/50)
* **Panel Kiri (Dinamis mengikuti peran aktif, latar `#059669`):** Menampilkan 3 poin manfaat spesifik untuk UMKM F&B atau untuk Influencer Lokal.
* **Panel Kanan (Formulir Adaptif):**
  * **2-Column Interactive Role Selector Cards:**
    * *State A (Aktif: `Saya Pemilik UMKM F&B`):* Border `2px solid #059669`, latar `#ECFDF5`, menampilkan input tambahan `Nama Kedai / Brand F&B`, `Kategori Kuliner` (dropdown), dan `Kecamatan / Area Gerai`.
    * *State B (Aktif: `Saya Influencer Lokal`):* Border `2px solid #059669`, latar `#ECFDF5`, menampilkan input tambahan `Username TikTok/Instagram` + tombol `Cek Metrik`, `Estimasi Base DP per Video (Rp)` dengan teks bantuan standar tarif kota, dan `Tautan Portofolio`.
  * Input dasar untuk kedua peran: `Nama Lengkap`, `Nomor WhatsApp Aktif`, `Email`, `Kota Domisili`, `Kata Sandi`.
  * Checkbox persetujuan MOU & Escrow + tombol CTA `Daftar & Masuk ke Dasbor` (`#EA580C`).

### Screen 4: Dasbor Utama UMKM F&B (`/merchant/dashboard` — Sidebar Layout)
* **Left Sidebar:** Logo `FoodFluence`, menu (`Ringkasan Dasbor`, `Kalkulator AI & Buat Kampanye`, `Lowongan & Seleksi Bid`, `Kampanye Aktif`, `Riwayat Escrow & Refund`, `Pengaturan Gerai & PIN Kasir`).
* **Header:** Nama kedai F&B, badge kota terverifikasi, dan tombol utama `+ Buat Kampanye Baru` (`#EA580C`).
* **Top KPI Grid (4 Kolom):**
  1. `Saldo Deposit Escrow` (`Rp 450.000`)
  2. `Total Kupon Tervalidasi` (`34 / 50 Kupon`)
  3. `Estimasi Omzet Terlacak` (`Rp 1.870.000`)
  4. `Kampanye Aktif` (`2 Kampanye`)
* **Main Table (`Kampanye Berjalan`):** Kolom Nama Influencer, Menu Promo, Progress Bar Kuota Kupon, Status Pill (`DP_RELEASED` / `ESCROW_FUNDED`), dan tombol aksi `Detail` serta `PIN Kasir`.

### Screen 5: AI ROI Calculator & Matchmaking (`/merchant/ai-calculator` — 2-Column Split)
* **Kolom Kiri (Form Input Ekonomi Menu & Kreator):**
  * Input `Nama Menu Promo`, `Harga Jual (Rp)`, `HPP / Modal Bahan Baku (Rp)`, `Diskon Kupon Pelanggan`, `Syarat Minimal Belanja (Rp)`, dan `Target Kuota Kupon`.
  * Kartu pemilih kreator (*Creator Selector*) dengan foto, *Engagement Rate*, *Base DP*, komisi per *scan*, dan badge harga AI (`Sesuai Pasar` / `Hemat`).
* **Kolom Kanan (Panel Keputusan AI Sticky):**
  * Banner status besar: Hijau (`LAYAK — MARGIN AMAN`) atau Merah (`RISIKO BONCOS — MARGIN TERLALU TIPIS`).
  * Visualisasi **Titik Impas (*Break-Even Point*)**: Progress bar yang menandai batas kupon balik modal (misal: `Min. 22 dari 50 kupon untuk tutup biaya DP`).
  * Rincian laba bersih per porsi, potensi total laba bersih, kotak **Saran Optimasi AI**, dan tombol CTA `Kunci Kesepakatan & Lanjut ke MOU` (`#059669`).

### Screen 6: Manajemen Lowongan & Seleksi Bid UMKM (`/merchant/campaigns/bids`)
* **Header:** Judul `Lowongan Kampanye & Penawaran Kreator` + tombol `+ Buka Lowongan Baru` (`#059669`).
* **Applicant Comparison Cards:** Daftar kreator yang melamar lowongan terbuka UMKM, menampilkan:
  * Profil kreator, rata-rata *views*, dan *Engagement Rate*.
  * Nominal bid yang diajukan (`Bid Base DP` + `Komisi/scan`) beserta pesan *pitching* singkat.
  * **Badge AI Margin Fit Score:** Label penilaian dampak bid terhadap HPP menu (misal: `96% Cocok • BEP 18 Kupon`).
  * Tombol `Tonton Portofolio` dan CTA utama `Terima Bid & Lanjut MOU` (`#EA580C`).

### Screen 7: Bursa Kampanye F&B & Ajukan Bid Influencer (`/creator/marketplace`)
* **Search & Filter Bar:** Pencarian nama kedai/menu, filter `Radius Lokasi` (`< 5 km`, `Satu Kota`), `Kategori Kuliner`, dan urutan (`Komisi Tertinggi`, `Terbaru`).
* **Campaign Opportunity Grid (3 Kolom):** Kartu lowongan berisi foto menu, jarak kedai (`1.8 km`), ringkasan *deliverables* video, rincian penawaran (`DP Rp100.000 + Komisi Rp3.000/scan`), jumlah pelamar, dan tombol `Ajukan Bid` (`#EA580C`).
* **Slide-Over Submit Bid Drawer:** Panel samping kanan untuk mengisi `Penawaran Base DP (Rp)`, `Usulan Komisi/Scan (Rp)`, indikator otomatis **AI Pitch Advisor** (`Kompetitif` / `Di Atas Anggaran UMKM`), catatan *pitching*, dan tombol `Kirim Penawaran Bid`.

### Screen 8: Generator MOU Digital & Checkout Escrow (`/merchant/escrow-checkout`)
* **Left Panel (Pratinjau Kontrak MOU Digital):** Dokumen bersih berbingkai kertas dengan rincian pihak pertama (UMKM), pihak kedua (Influencer), *deliverables* konten, tenggat tayang, batas revisi (2x), dan skema bagi hasil.
* **Right Panel (Ringkasan Pembayaran Escrow):**
  * Rincian biaya: `Base DP Influencer` + `Deposit Kuota Kupon` + `Biaya Layanan Platform (5%)`.
  * Kotak informasi hijau: *"Dana ditahan aman di rekening Escrow. Sisa saldo kupon tidak terpakai otomatis dikembalikan (Auto-Refund)."*
  * Checkbox tanda tangan digital + tombol `Bayar Deposit via Payment Gateway` (memicu modal pemilihan Virtual Account / QRIS / E-Wallet).

### Screen 9: Dasbor Influencer & Pelacak Pendapatan (`/creator/dashboard`)
* **Top Wallet Cards (2 Kolom):**
  * Kartu 1: `Saldo Dapat Ditarik` (`Rp 245.000`) + tombol `Tarik Dana (Disbursement)` (`#059669`).
  * Kartu 2: `Dana Tertahan di Escrow (Pending DP)` (`Rp 100.000`).
* **Active Collaboration Cards:** Tombol salin cepat **Tautan Klaim Kupon Unik** (`foodfluence.id/c/andi-kopi`), formulir input **Submit Link Video Tayang** untuk pencairan DP, dan grafik batang perbandingan klik tautan vs kupon tervalidasi di kasir.

### Screen 10: Halaman Klaim Kupon Pelanggan (`/c/:slug` — Mobile Web Only, Max-Width `440px`)
* **Header Promo:** Foto menu ukuran penuh dengan sudut membulat, logo kedai F&B, badge *"Rekomendasi dari @andi.kuliner"*, dan detail promo (*"Diskon 15% • Min. Belanja Rp30.000"*).
* **State 1 (Belum Diklaim):** Indikator sisa kuota kupon (`Tersisa 16 dari 50 kupon`) dan tombol besar `Klaim Kupon QR Sekarang` (`#EA580C`).
* **State 2 (Tiket QR Dinamis Aktif):**
  * **Dynamic One-Time QR Code** besar di tengah kartu tiket berdesain *perforated ticket* (sobekan tiket).
  * **Live Countdown Timer** menonjol berwarna amber/merah (`Berlaku selama 01:59:45`).
  * Kode token alfanumerik cadangan di bawah QR dan tombol `Buka Lokasi Kedai di Google Maps`.

### Screen 11: Web QR Scanner & Validator Kasir (`/cashier/scanner` — Mobile/Tablet High-Contrast)
* **Login View (Pin Pad):** Input `Kode Gerai` dan 6 kotak input `PIN Kasir` berukuran besar agar mudah ditekan di layar sentuh.
* **Scanner View:** *Viewfinder* kamera browser di bagian atas dengan bingkai sudut hijau `#059669`, ditambah input kode manual di bagian bawah sebagai cadangan.
* **Validation Confirmation Bottom Sheet / Modal (Muncul saat QR valid):**
  * Banner hijau `KUPON VALID` + nama kampanye & instruksi diskon (*"Berikan Diskon 15% pada tagihan"*).
  * Input wajib: `Nomor Struk / Nota` dan `Total Belanja Pelanggan (Rp)` (menampilkan peringatan otomatis jika di bawah syarat minimal transaksi).
  * Tombol konfirmasi besar lebar penuh: `Konfirmasi Pemakaian Kupon` (`#059669`).