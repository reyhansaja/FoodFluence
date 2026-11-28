import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    Calculator,
    ShieldCheck,
    QrCode,
    Sparkles,
    CheckCircle2,
    ArrowRight,
    TrendingUp,
    Store,
    Users,
    Receipt,
    Wallet,
} from 'lucide-react';

export default function Welcome() {
    return (
        <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
            <Head title="FoodFluence - Promosi Kuliner Terukur, Untung Dibagi Adil" />

            {/* Top Navigation */}
            <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E2E8F0]">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Link href="/" className="text-xl font-bold text-[#059669] flex items-center gap-2">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                            FoodFluence
                        </Link>

                        <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#475569]">
                            <a href="#cara-kerja" className="hover:text-[#059669] transition-colors">Cara Kerja</a>
                            <Link href="/merchant/ai-calculator" className="hover:text-[#059669] transition-colors">Kalkulator ROI</Link>
                            <Link href="/creator/marketplace" className="hover:text-[#059669] transition-colors">Bursa Kampanye</Link>
                            <Link href="/cashier/login" className="hover:text-[#EA580C] transition-colors">Scanner Kasir</Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link href="/login">
                            <Button variant="ghost" className="text-sm font-semibold text-[#475569] hover:text-[#0F172A]">
                                Masuk
                            </Button>
                        </Link>
                        <Link href="/register">
                            <Button className="bg-[#059669] hover:bg-[#047857] text-white rounded-xl h-10 px-5 font-semibold text-sm shadow-sm">
                                Daftar Gratis
                            </Button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section (2-Column) */}
            <header className="max-w-7xl mx-auto px-6 pt-16 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left Column */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="inline-flex items-center gap-2 bg-[#ECFDF5] border border-[#059669]/20 text-[#059669] px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide">
                            <Sparkles className="w-4 h-4" /> Platform Kolaborasi Kuliner & Kreator Lokal Terukur
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.15]">
                            Promosi Kuliner Terukur, <br />
                            <span className="text-[#059669]">Untung Dibagi Adil.</span>
                        </h1>

                        <p className="text-lg text-[#475569] max-w-xl leading-relaxed">
                            Hubungkan kedai F&B dengan *nano & micro-influencer* lokal lewat simulasi margin anti-boncos bertenaga AI, proteksi escrow, dan pelacakan QR kupon langsung di kasir toko fisik.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <Link href="/register">
                                <Button className="w-full sm:w-auto bg-[#059669] hover:bg-[#047857] text-white rounded-xl h-12 px-7 font-bold text-base shadow-sm">
                                    <Store className="w-5 h-5 mr-2" /> Daftar sebagai UMKM F&B
                                </Button>
                            </Link>
                            <Link href="/creator/marketplace">
                                <Button className="w-full sm:w-auto bg-[#EA580C] hover:bg-[#C2410C] text-white rounded-xl h-12 px-7 font-bold text-base shadow-sm">
                                    <Users className="w-5 h-5 mr-2" /> Gabung sebagai Kreator
                                </Button>
                            </Link>
                        </div>

                        <div className="flex items-center gap-6 pt-4 text-xs font-semibold text-[#64748B]">
                            <span className="flex items-center gap-1.5">
                                <CheckCircle2 className="w-4 h-4 text-[#059669]" /> Tanpa Ganti Mesin Kasir / QRIS
                            </span>
                            <span className="flex items-center gap-1.5">
                                <CheckCircle2 className="w-4 h-4 text-[#059669]" /> Escrow Aman Berizin BI
                            </span>
                        </div>
                    </div>

                    {/* Right Column: Interactive SaaS UI Mockup */}
                    <div className="lg:col-span-5 relative">
                        <div className="relative mx-auto max-w-md space-y-4">
                            {/* Card 1: AI Decision Simulator */}
                            <div className="bg-white rounded-2xl p-5 shadow-xl border border-[#E2E8F0] relative z-10 transition-transform hover:-translate-y-1 duration-300">
                                <div className="flex justify-between items-start mb-3">
                                    <div className="flex items-center gap-2">
                                        <div className="p-2 bg-[#ECFDF5] rounded-lg text-[#059669]">
                                            <Calculator className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-[#0F172A]">AI Margin Simulator</p>
                                            <p className="text-[10px] text-[#64748B]">Es Kopi Susu Aren • HPP Rp8.000</p>
                                        </div>
                                    </div>
                                    <Badge className="bg-[#ECFDF5] text-[#059669] text-[10px] font-bold">LAYAK • MARGIN AMAN</Badge>
                                </div>

                                <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] space-y-1.5 mb-3">
                                    <div className="flex justify-between text-xs">
                                        <span className="text-[#64748B]">Break-Even Point (BEP):</span>
                                        <span className="font-bold text-[#0F172A]">22 dari 50 Kupon</span>
                                    </div>
                                    <div className="h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
                                        <div className="h-full bg-[#059669] rounded-full" style={{ width: '68%' }}></div>
                                    </div>
                                    <p className="text-[10px] text-[#059669] font-semibold">Proyeksi Laba Bersih Kedai: +Rp 312.500</p>
                                </div>
                            </div>

                            {/* Card 2: Cashier Validated Ticket */}
                            <div className="bg-white rounded-2xl p-5 shadow-xl border border-[#059669]/30 relative z-20 sm:-ml-6 transition-transform hover:-translate-y-1 duration-300">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-2">
                                        <div className="p-2 bg-[#ECFDF5] rounded-lg text-[#059669]">
                                            <QrCode className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-[#0F172A]">Validasi Kasir Fisik Toko</p>
                                            <p className="text-[10px] text-[#64748B]">Kode Token: FF-KOPISUSU-9821</p>
                                        </div>
                                    </div>
                                    <Badge className="bg-[#ECFDF5] text-[#059669] text-[10px] font-bold">KUPON VALID 15%</Badge>
                                </div>

                                <div className="p-3 bg-[#ECFDF5]/50 rounded-xl border border-[#059669]/20 flex items-center justify-between text-xs">
                                    <span className="text-[#059669] font-bold">Bagi Hasil Otomatis:</span>
                                    <span className="font-bold text-[#0F172A] tabular-nums">+Rp 3.000 ke Kreator</span>
                                </div>
                            </div>

                            {/* Decorative blur backdrop */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#059669]/10 to-[#EA580C]/10 rounded-3xl blur-2xl -z-10"></div>
                        </div>
                    </div>
                </div>
            </header>

            {/* How It Works (4-Step Horizontal Cards) */}
            <section id="cara-kerja" className="bg-white py-20 border-y border-[#E2E8F0]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                        <Badge className="bg-[#ECFDF5] text-[#059669] text-xs font-bold px-3 py-1">Alur Kerja 4 Langkah</Badge>
                        <h2 className="text-3xl font-extrabold text-[#0F172A]">Bagaimana FoodFluence Bekerja?</h2>
                        <p className="text-sm text-[#475569]">
                            Solusi lengkap dari pra-kampanye hingga pembayaran di meja kasir tanpa kerumitan teknis.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                step: '01',
                                title: 'Hitung Margin via AI',
                                desc: 'Masukkan harga menu dan HPP modal bahan. AI menghitung titik impas (BEP) dan mencocokkan tarif kreator.',
                                icon: Calculator,
                            },
                            {
                                step: '02',
                                title: 'Kunci MOU & Escrow',
                                desc: 'Kontrak digital otomatis diterbitkan. Dana DP dan deposit kupon tersimpan aman di rekening escrow berizin BI.',
                                icon: ShieldCheck,
                            },
                            {
                                step: '03',
                                title: 'Sebar Kupon Dinamis',
                                desc: 'Kreator membagikan link promo unik ke penonton. Calon pembeli mengklaim kode QR sekali pakai berbatas waktu.',
                                icon: QrCode,
                            },
                            {
                                step: '04',
                                title: 'Scan di Kasir & Bagi Hasil',
                                desc: 'Kasir memindai QR di browser toko. Kuota berkurang 1 dan komisi bagi hasil langsung cair ke dompet kreator.',
                                icon: Receipt,
                            },
                        ].map((item) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={item.step} className="p-6 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] relative group hover:border-[#059669] transition-all">
                                    <span className="font-mono text-3xl font-black text-[#CBD5E1] group-hover:text-[#059669]/30 transition-colors block mb-4">
                                        {item.step}
                                    </span>
                                    <div className="p-3 bg-white w-fit rounded-xl border border-[#E2E8F0] text-[#059669] mb-4 shadow-xs">
                                        <IconComponent className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-base font-bold text-[#0F172A] mb-2">{item.title}</h3>
                                    <p className="text-xs text-[#475569] leading-relaxed">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SDG 8 Impact Strip */}
            <section className="bg-[#F8FAFC] py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="p-8 sm:p-12 bg-gradient-to-br from-[#059669] to-[#047857] rounded-3xl text-white shadow-xl relative overflow-hidden">
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                            <div className="space-y-2">
                                <span className="bg-white/20 text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase">
                                    SDG 8.3 • Akselerasi UMKM
                                </span>
                                <h3 className="text-2xl font-bold">Cegah Kerugian Promosi</h3>
                                <p className="text-sm text-white/80">
                                    Menghilangkan risiko promosi boncos bagi kedai kuliner lokal lewat formula AI Break-Even Point.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <span className="bg-white/20 text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase">
                                    SDG 8.5 • Kerja Layak
                                </span>
                                <h3 className="text-2xl font-bold">Perlindungan Kreator Muda</h3>
                                <p className="text-sm text-white/80">
                                    Jaminan kepastian pembayaran Base DP dan komisi terukur bebas pemotongan perantara ilegal.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <span className="bg-white/20 text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase">
                                    SDG 10.2 • Transparansi
                                </span>
                                <h3 className="text-2xl font-bold">100% Auto-Refund Saldo</h3>
                                <p className="text-sm text-white/80">
                                    Sisa saldo deposit kupon yang kedaluwarsa otomatis dikembalikan ke rekening pemilik kedai F&B.
                                </p>
                            </div>
                        </div>

                        {/* Background decorative circles */}
                        <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white border-t border-[#E2E8F0] py-12">
                <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2 text-[#059669] font-bold text-lg">
                        FoodFluence
                    </div>
                    <p className="text-xs text-[#64748B]">
                        © 2026 FoodFluence. Hak Cipta Dilindungi Undang-Undang. Promosi Kuliner Terukur, Untung Dibagi Adil.
                    </p>
                    <div className="flex gap-4 text-xs font-semibold text-[#475569]">
                        <Link href="/merchant/dashboard" className="hover:text-[#059669]">Dasbor Gerai</Link>
                        <Link href="/creator/dashboard" className="hover:text-[#059669]">Dasbor Kreator</Link>
                        <Link href="/cashier/login" className="hover:text-[#059669]">Scanner Kasir</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
