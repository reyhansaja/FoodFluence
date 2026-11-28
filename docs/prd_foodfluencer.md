# Product Requirements Document (PRD): FoodFluence
**Versi:** 2.0 (Fokus MVP F&B Marketing & QR Attribution)  
**Nama Produk:** FoodFluence  
**Tagline:** *Promosi Kuliner Terukur, Untung Dibagi Adil.*  

---

## 1. Ringkasan Eksekutif
**FoodFluence** adalah platform web B2B2C berbasis SaaS yang menghubungkan pelaku UMKM Kuliner (F&B) skala mikro–kecil dengan *nano/micro-influencer* lokal melalui skema kolaborasi pemasaran berbasis performa (*hybrid revenue sharing*). 

Platform ini dirancang untuk menyelesaikan masalah ketimpangan standar *rate card* kreator, risiko kerugian biaya promosi di muka (*boncos*), dan ketiadaan alat pelacak konversi pelanggan di kasir fisik—tanpa memaksa pemilik kedai F&B mengganti sistem kasir (POS) maupun QRIS bawaan toko yang sudah ada.

---

## 2. Latar Belakang Masalah, Urgensi & Keselarasan SDGs

### 2.1. Urgensi & Celah Pasar
1. **Risiko "Boncos" Promosi pada Margin F&B:** UMKM kuliner memiliki margin produk yang sensitif. Ketidakjelasan standar *rate card* kreator lokal sering membuat pelaku usaha mengeluarkan biaya besar di awal tanpa jaminan balik modal (*break-even*).
2. **Ketiadaan Alat Ukur Konversi (*Offline Attribution Gap*):** Pemilik kedai tidak dapat melacak secara pasti berapa banyak pelanggan *walk-in* yang datang ke kasir akibat konten video seorang *influencer*.
3. **Kesepakatan Informal & Praktik *Mark-Up*:** Kolaborasi melalui pesan langsung (DM/WhatsApp) rawan pembatalan sepihak, revisi tanpa batas, serta pemotongan biaya berlapis oleh perantara/agensi.
4. **Celah Aplikasi:** FoodFluence mengisi celah antara *marketplace freelancer* konvensional (mahal, tidak berbasis radius lokasi, tidak melacak penjualan kasir) dan program afiliasi *e-commerce* (hanya melacak transaksi daring, tidak menjangkau kedai fisik F&B).

### 2.2. Keselarasan dengan Sustainable Development Goals (SDGs)
* **SDG 8 (*Decent Work and Economic Growth*):** Mendorong keberlanjutan UMKM kuliner melalui pencegahan kerugian promosi berbasis AI (Target 8.3) serta menciptakan pekerjaan lepas yang adil dan terlindungi kontrak digital bagi kreator muda lokal (Target 8.5).
* **SDG 9 (*Industry, Innovation, and Infrastructure*):** Mendemokratisasi akses teknologi *Marketing Technology* (AI ROI Simulator & pelacakan kupon QR) bagi usaha kuliner mikro.
* **SDG 10 (*Reduced Inequalities*):** Menghapus praktik *mark-up* perantara sehingga anggaran pemasaran mengalir langsung dan transparan ke kreator lokal.

---

## 3. Target Pengguna & Batasan Ruang Lingkup

### 3.1. Target Pengguna (*User Personas*)
* **UMKM F&B (*Merchant Owner*):** Usaha kuliner rintisan skala mikro–kecil (kedai kopi lokal, minuman kekinian, *dessert/bakery*, camilan, kafe kasual) dengan margin kotor produk 50%–70% di area urban/kota pendidikan.
* **Kasir F&B (*Cashier Staff*):** Staf operasional di meja kasir yang bertugas memindai tiket QR kupon pelanggan menggunakan browser HP/tablet toko.
* **Influencer Lokal (*Content Creator*):** *Nano-influencer* (1.000–10.000 *followers*) dan *micro-influencer* (10.000–100.000 *followers*) kuliner yang berdomisili di kota yang sama dengan gerai F&B.
* **Pelanggan Akhir (*End-Customer*):** Penonton konten TikTok/Instagram Reels yang mengeklaim kupon diskon dan bertransaksi langsung di kedai.

### 3.2. Batasan Ruang Lingkup (*Out of Scope*)
Untuk menjaga fokus penuh pada akselerasi pemasaran dan kemudahan adopsi (*zero switching cost*), versi MVP ini **tidak** mencakup:
* Sistem kasir penuh (POS) seperti katalog menu lengkap, perhitungan kembalian, cetak struk *thermal*, maupun pemrosesan pembayaran makanan di kasir.
* Keranjang belanja *e-commerce* maupun layanan pesan-antar makanan.
* Sistem manajemen stok bahan baku dan pembukuan akuntansi penuh.

---

## 4. Spesifikasi 5 Fitur Utama MVP

### MVP #1: AI ROI & Influencer Matchmaking Calculator
* **Fungsi:** Menghitung kelayakan finansial kampanye sebelum UMKM mengeluarkan dana.
* **Input:** Harga Jual Menu, HPP (modal bahan baku), nominal/persentase diskon pelanggan, target kuota kupon, dan profil *rate card* kreator.
* **Output:** Status kelayakan (`LAYAK` / `RISIKO BONCOS`), perhitungan titik impas (*Break-Even Point* jumlah kupon minimal), proyeksi laba bersih, serta label kewajaran tarif kreator (`Hemat`, `Sesuai Pasar`, `Premium`).

### MVP #2: Dynamic One-Time QR Coupon Generator
* **Fungsi:** Mencegah penyalahgunaan kupon (penyebaran tangkapan layar secara massal di luar audiens kreator).
* **Mekanisme:** Kreator membagikan tautan unik (`foodfluence.id/c/{slug}`). Saat diklik oleh calon pembeli, sistem menerbitkan **QR Code dinamis sekali pakai** yang memiliki batas waktu aktif (misalnya berlaku 2 jam) dan terikat pada sisa kuota kampanye.

### MVP #3: Web-Based Kasir QR Validator
* **Fungsi:** Alat validasi kupon ringan berbasis browser HP/tablet tanpa instalasi aplikasi dan tanpa mengganti mesin EDC/QRIS bawaan toko.
* **Mekanisme:** Kasir masuk menggunakan `Kode Gerai` dan `PIN 6-Digit`, memindai QR pelanggan, menginput nomor struk serta nominal belanja (memvalidasi syarat minimal transaksi), lalu mengonfirmasi pemakaian kupon.

### MVP #4: Automated Revenue Sharing Ledger
* **Fungsi:** Pencatatan mutasi saldo komisi secara *real-time*.
* **Mekanisme:** Setiap kali kupon berubah status menjadi `REDEEMED` di kasir, sistem otomatis memotong kuota kampanye sebesar 1 dan memindahkan nominal komisi bagi hasil dari **Saldo Deposit Kampanye UMKM** ke **Saldo Pendapatan Influencer**.

### MVP #5: Payment Gateway & Escrow Integration
* **Fungsi:** Pengelolaan dana kolaborasi secara legal dan aman melalui *sub-account/escrow* mitra *payment gateway* berizin Bank Indonesia (Xendit/Midtrans).
* **Mekanisme:**
  * Menahan dana **Base DP** + **Deposit Komisi Kupon** saat MOU disetujui.
  * Mencairkan **Base DP** ke saldo kreator setelah tautan video promosi terverifikasi tayang.
  * Memproses penarikan komisi (*disbursement*) kreator dan pengembalian otomatis (*auto-refund*) sisa saldo kupon yang tidak terpakai kepada UMKM saat kampanye berakhir.

---

## 5. Daftar Halaman & Alur Pengguna (*User Flow*)

| No | Nama Halaman | Aktor Utama | Fungsi & Komponen Utama |
| :--- | :--- | :--- | :--- |
| **1** | **Landing Page** | Publik | Proposisi nilai platform, alur kerja 4 langkah, dampak SDG 8, dan tombol pendaftaran berdasarkan peran. |
| **2** | **Login** | UMKM, Kreator, Kasir | Autentikasi email/WhatsApp/Google serta pintasan khusus `Buka Scanner Kasir (Login PIN Gerai)`. |
| **3** | **Registrasi Multi-Role** | UMKM & Kreator | Formulir pendaftaran adaptif dengan *Role Selector* (mengumpulkan data gerai/kategori F&B atau akun sosial media/estimasi *rate card* kreator). |
| **4** | **Dasbor Utama UMKM** | UMKM F&B | Ringkasan 4 KPI (Saldo Escrow, Kupon Tervalidasi, Omzet Terlacak, Kampanye Aktif), tabel kampanye berjalan, dan akses PIN kasir. |
| **5** | **AI ROI Calculator** | UMKM F&B | Simulasi dua kolom (Input HPP/Menu vs Keputusan Kelayakan AI, BEP kupon, dan saran optimasi margin). |
| **6** | **Manajemen Lowongan & Seleksi Bid** | UMKM F&B | Pembuatan lowongan kampanye terbuka dan daftar perbandingan pelamar kreator lengkap dengan *AI Margin Fit Score*. |
| **7** | **Bursa Kampanye & Ajukan Bid** | Influencer | Pencarian lowongan F&B terdekat berdasarkan radius kota dan *drawer* pengajuan penawaran harga (*bidding*) dengan indikator *AI Pitch Advisor*. |
| **8** | **Generator MOU & Checkout Escrow** | UMKM & Kreator | Pembuatan kontrak digital otomatis (hak cipta, revisi, *deliverables*, nominal DP & bagi hasil) serta pembayaran deposit via *payment gateway*. |
| **9** | **Dasbor Influencer** | Influencer | Dompet saldo (*Available* vs *Pending Escrow*), tombol tarik dana, penyalinan tautan kupon unik, input tautan video tayang, dan grafik konversi kasir. |
| **10** | **Halaman Klaim Kupon Pelanggan** | Pelanggan Akhir | Antarmuka *mobile-first* untuk mengeklaim tiket QR dinamis sekali pakai lengkap dengan hitung mundur masa berlaku (*live timer*). |
| **11** | **Web QR Scanner Kasir** | Staf Kasir F&B | Pemindai kamera browser kontras tinggi, validasi keaslian kupon, input nomor nota & total belanja, serta konfirmasi potongan diskon. |

---

## 6. Aturan Bisnis, State Machine & Keamanan Sistem

### 6.1. Siklus Status Kampanye & Dana (*Escrow State Machine*)
1. `DRAFT`: Simulasi margin dilakukan pada Kalkulator AI.
2. `OPEN_BIDDING`: UMKM mempublikasikan lowongan terbuka untuk kreator lokal.
3. `BID_ACCEPTED`: Penawaran kreator disetujui (atau penunjukan langsung); nominal dikunci dalam draf MOU.
4. `ESCROW_FUNDED`: UMKM melunasi tagihan awal (Base DP + Deposit Kuota Kupon + Biaya Platform) ke rekening *escrow payment gateway*.
5. `DP_RELEASED`: Kreator mengunggah bukti tautan konten tayang; dana Base DP dilepaskan ke saldo kreator dan tautan klaim kupon aktif.
6. `COUPON_REDEEMED`: Pelanggan mengeklaim QR dan kasir memvalidasinya; saldo deposit UMKM berkurang dan saldo komisi kreator bertambah per transaksi.
7. `COMPLETED`: Kuota kupon habis atau masa kontrak berakhir; akumulasi komisi siap ditarik kreator dan sisa deposit kuota yang tidak terpakai otomatis di-*refund* ke UMKM.

### 6.2. Mekanisme Anti-Kecurangan (*Anti-Fraud*)
* **Skema Pembayaran Hibrida:** Base DP melindungi waktu dan biaya produksi kreator; komisi per *scan* menjaga efisiensi anggaran UMKM.
* **Single-Use Dynamic QR:** Token QR hangus otomatis setelah 1 kali dipindai (`COUPON_REDEEMED`) atau melewati batas kedaluwarsa 2 jam sejak diklaim.
* **Validasi Transaksi Kasir:** Mewajibkan pengisian nomor nota/struk toko, pengecekan syarat minimal nominal belanja, serta pembatasan jeda pemindaian (*rate-limiting* maksimal 1 transaksi per 2 menit pada perangkat kasir yang sama) untuk mencegah *self-redemption* fiktif.

---

## 7. Model Bisnis & Monetisasi
1. **Platform Service Fee (*Take Rate* 5%–10%):** Biaya layanan transparan yang dihitung dari total nilai kampanye untuk fasilitas *escrow*, generator MOU otomatis, dan sistem pelacakan QR.
2. **Freemium SaaS Subscription:** Paket gratis untuk 1 kampanye aktif, serta paket berlangganan bulanan (**FoodFluence Pro**) bagi UMKM untuk membuka simulasi AI tanpa batas dan analitik jam kunjungan pelanggan.

---

## 8. Metrik Keberhasilan (*Key Performance Indicators*)
* **Coupon Redemption Rate:** Persentase kupon yang diklaim penonton dan berhasil divalidasi di kasir F&B (Target MVP: $\ge 25\%$).
* **UMKM Campaign ROI:** Rasio omzet yang tercatat di kasir dibanding total biaya promosi (DP + komisi kupon) yang dikeluarkan UMKM (Target MVP: $\ge 2.5\times$).
* **Escrow Completion & Dispute Rate:** Persentase kampanye yang selesai tanpa sengketa pembayaran atau revisi (Target MVP: $> 95\%$).