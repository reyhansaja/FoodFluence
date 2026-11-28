import { Head, Link, router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, CreditCard, ArrowLeft, CheckCircle2, Lock, Sparkles, Building2 } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import MerchantLayout from '@/layouts/merchant-layout';
import { useState } from 'react';

export default function EscrowCheckout() {
    const [signed, setSigned] = useState<boolean>(true);
    const [isPaying, setIsPaying] = useState<boolean>(false);
    const [isPaid, setIsPaid] = useState<boolean>(false);

    const handlePay = () => {
        setIsPaying(true);
        setTimeout(() => {
            setIsPaying(false);
            setIsPaid(true);
        }, 1200);
    };

    return (
        <MerchantLayout activeItem="/merchant/campaigns">
            <Head title="MOU & Checkout Escrow - FoodFluence" />

            <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto">
                <nav className="flex items-center gap-4 mb-8">
                    <Link href="/merchant/campaigns/bids">
                        <button className="text-[#475569] hover:text-[#0F172A] p-2 rounded-xl hover:bg-[#F8FAFC] transition-colors border border-[#E2E8F0]">
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-[#0F172A]">Generator MOU Digital & Checkout Escrow</h1>
                        <p className="text-[#475569] text-sm">Selesaikan kesepakatan kolaborasi dengan perlindungan dana aman berizin Bank Indonesia.</p>
                    </div>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Panel - MOU Contract */}
                    <Card className="border-[#E2E8F0] shadow-sm rounded-2xl bg-white h-fit">
                        <div className="p-6 border-b border-[#E2E8F0] flex items-center justify-between">
                            <h2 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider">Surat Perjanjian Kolaborasi (MOU)</h2>
                            <span className="text-[10px] font-mono bg-[#F1F5F9] px-2 py-0.5 rounded text-[#475569]">MOU-20241126-08</span>
                        </div>
                        <CardContent className="p-6 space-y-5 text-sm">
                            <div className="space-y-3 p-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                                <div className="flex gap-2">
                                    <span className="font-bold text-[#0F172A] w-32 shrink-0">Pihak Pertama:</span>
                                    <span className="text-[#475569]">Kopi Kenangan Sudirman (UMKM F&B)</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="font-bold text-[#0F172A] w-32 shrink-0">Pihak Kedua:</span>
                                    <span className="text-[#475569]">Andi Kuliner (@andi.kuliner)</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <p className="font-bold text-[#0F172A]">Ketentuan Hak & Kewajiban:</p>
                                <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#475569]">
                                    <li>Kreator mempublikasikan 1 Video TikTok / Reels dengan ulasan menu Es Kopi Susu Aren.</li>
                                    <li>Batas waktu tayang: Maksimal 3 hari kerja setelah pembayaran escrow terkonfirmasi.</li>
                                    <li>Batas revisi: Maksimal 2 kali minor revisi tanpa mengubah konsep utama.</li>
                                    <li>Hak Cipta: Kedai F&B berhak menggunakan materi video untuk promosi digital lokal selama 3 bulan.</li>
                                </ul>
                            </div>

                            <div className="space-y-2 pt-2 border-t border-[#E2E8F0]">
                                <p className="font-bold text-[#0F172A]">Skema Finansial Hybrid:</p>
                                <ul className="list-disc pl-5 space-y-1 text-xs text-[#475569]">
                                    <li>Base DP: <strong className="text-[#0F172A]">Rp 100.000</strong> (Cair setelah video terverifikasi tayang).</li>
                                    <li>Komisi Performa: <strong className="text-[#059669]">Rp 3.000</strong> per kupon fisik yang divalidasi di kasir.</li>
                                    <li>Auto-Refund: Sisa saldo kupon yang tidak terpakai 100% dikembalikan otomatis ke UMKM.</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Right Panel - Escrow Payment */}
                    <div className="space-y-6">
                        <Card className="border-[#E2E8F0] shadow-sm rounded-2xl">
                            <CardContent className="p-6 space-y-6">
                                <h2 className="font-bold text-[#0F172A]">Rincian Pembayaran Escrow</h2>
                                <div className="space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#475569]">Base DP Kreator</span>
                                        <span className="font-bold text-[#0F172A]">Rp 100.000</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#475569]">Deposit Komisi Kupon (50 Kupon)</span>
                                        <span className="font-bold text-[#0F172A]">Rp 150.000</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#475569]">Biaya Layanan Platform (5%)</span>
                                        <span className="font-bold text-[#0F172A]">Rp 12.500</span>
                                    </div>
                                    <div className="pt-4 border-t border-[#E2E8F0] flex justify-between text-lg font-bold">
                                        <span>Total Tagihan Escrow</span>
                                        <span className="text-[#059669] tabular-nums">Rp 262.500</span>
                                    </div>
                                </div>

                                <div className="p-4 bg-[#ECFDF5] rounded-xl border border-[#059669]/30 flex gap-3">
                                    <ShieldCheck className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                                    <p className="text-xs text-[#065F46] leading-relaxed">
                                        Dana ditahan aman di rekening Escrow mitra perbankan. DP baru dilepaskan setelah video tayang, dan sisa saldo kupon tidak terpakai otomatis dikembalikan.
                                    </p>
                                </div>

                                <div className="flex items-start gap-2.5">
                                    <Checkbox
                                        id="mou_sign"
                                        checked={signed}
                                        onCheckedChange={(c) => setSigned(Boolean(c))}
                                        className="mt-0.5"
                                    />
                                    <Label htmlFor="mou_sign" className="text-xs text-[#475569] leading-relaxed cursor-pointer">
                                        Saya telah membaca dan menyetujui seluruh isi MOU digital serta klausul perlindungan escrow.
                                    </Label>
                                </div>

                                <Button
                                    disabled={!signed || isPaying || isPaid}
                                    onClick={handlePay}
                                    className="w-full h-12 bg-[#059669] hover:bg-[#047857] rounded-xl text-sm font-bold shadow-sm"
                                >
                                    <CreditCard className="w-4 h-4 mr-2" />
                                    {isPaying ? 'Memproses Gateway...' : isPaid ? 'Deposit Berhasil Dilunasi' : 'Bayar Deposit via Payment Gateway (QRIS / VA)'}
                                </Button>

                                {isPaid && (
                                    <div className="p-4 bg-[#ECFDF5] border border-[#059669] rounded-xl text-center space-y-3 animate-fadeIn">
                                        <div className="flex items-center justify-center gap-2 text-[#059669] font-bold text-sm">
                                            <CheckCircle2 className="w-5 h-5" /> Pembayaran Escrow Berhasil!
                                        </div>
                                        <p className="text-xs text-[#475569]">
                                            Status kampanye kini aktif: <strong className="text-[#0F172A]">ESCROW_FUNDED</strong>. Notifikasi telah dikirim ke kreator untuk pembuatan video.
                                        </p>
                                        <Link href="/merchant/campaigns" className="block">
                                            <Button className="w-full bg-[#059669] hover:bg-[#047857] rounded-xl text-xs font-bold h-10">
                                                Lihat di Daftar Kampanye Aktif
                                            </Button>
                                        </Link>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </MerchantLayout>
    );
}
