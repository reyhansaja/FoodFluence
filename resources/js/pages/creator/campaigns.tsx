import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Video, Copy, Check, ExternalLink, TicketCheck, ArrowRight, ShieldCheck, UploadCloud, Plus } from 'lucide-react';
import CreatorLayout from '@/layouts/creator-layout';
import { useState } from 'react';

export default function CreatorCampaigns() {
    const [copied, setCopied] = useState<string | null>(null);
    const [videoInput, setVideoInput] = useState('');
    const [submittedVideo, setSubmittedVideo] = useState(false);

    const handleCopy = (slug: string) => {
        const fullUrl = `${window.location.origin}/c/${slug}`;
        navigator.clipboard.writeText(fullUrl);
        setCopied(slug);
        setTimeout(() => setCopied(null), 2000);
    };

    const handleVideoSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!videoInput) return;
        setSubmittedVideo(true);
        setTimeout(() => setSubmittedVideo(false), 4000);
    };

    return (
        <CreatorLayout activeItem="/creator/campaigns">
            <Head title="Kampanye Kolaborasi Saya - FoodFluence" />

            <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
                <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-[#0F172A]">Kampanye Kolaborasi Saya</h1>
                        <p className="text-[#475569] text-sm mt-1">
                            Kelola konten video tayang, pantau pencairan Base DP, dan salin tautan kupon unik untuk audiens Anda.
                        </p>
                    </div>

                    <Link href="/creator/marketplace">
                        <Button className="bg-[#EA580C] hover:bg-[#C2410C] rounded-xl h-11 px-6 shadow-sm font-semibold text-sm">
                            <Plus className="w-4 h-4 mr-2" /> Cari Lowongan Baru
                        </Button>
                    </Link>
                </header>

                <div className="space-y-6">
                    {/* Campaign 1: Active DP Released */}
                    <Card className="border-[#E2E8F0] shadow-sm rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                            <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 mb-6">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-3">
                                        <h2 className="text-lg font-bold text-[#0F172A]">Kopi Kenangan - Es Kopi Susu Gula Aren</h2>
                                        <Badge className="bg-[#ECFDF5] text-[#059669] border-[#059669]/20 text-xs font-bold px-2.5 py-1">
                                            DP_RELEASED • Kupon Aktif
                                        </Badge>
                                    </div>
                                    <p className="text-xs text-[#475569]">
                                        Skema: <span className="font-semibold text-[#0F172A]">Base DP Rp100.000 + Komisi Rp3.000/scan kasir</span> • Target: 50 Kupon
                                    </p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <a
                                        href="https://tiktok.com/@andi.kuliner"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-xs font-semibold text-[#059669] flex items-center gap-1 hover:underline"
                                    >
                                        <ExternalLink className="w-3.5 h-3.5" /> Video Tayang Terverifikasi
                                    </a>
                                </div>
                            </div>

                            {/* Coupon Unique Link Share Card */}
                            <div className="p-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] mb-6">
                                <Label className="text-xs font-semibold text-[#475569] uppercase tracking-wider block mb-2">
                                    Tautan Klaim Kupon Unik Anda (Taruh di Bio / Caption Video)
                                </Label>
                                <div className="flex gap-2">
                                    <Input
                                        value={`${typeof window !== 'undefined' ? window.location.origin : 'https://foodfluence.id'}/c/andi-kopi`}
                                        readOnly
                                        className="bg-white font-mono text-sm h-11"
                                    />
                                    <Button
                                        onClick={() => handleCopy('andi-kopi')}
                                        className="bg-[#059669] hover:bg-[#047857] h-11 px-5 rounded-xl font-semibold text-sm"
                                    >
                                        {copied === 'andi-kopi' ? (
                                            <>
                                                <Check className="w-4 h-4 mr-1.5" /> Tersalin!
                                            </>
                                        ) : (
                                            <>
                                                <Copy className="w-4 h-4 mr-1.5" /> Salin Tautan
                                            </>
                                        )}
                                    </Button>
                                </div>
                                <p className="text-[11px] text-[#64748B] mt-2">
                                    Setiap kali penonton mengeklaim kupon dari tautan ini dan menggunakannya di kasir toko, saldo Anda otomatis bertambah <span className="font-bold text-[#059669]">Rp3.000</span> secara instan.
                                </p>
                            </div>

                            {/* Progress & Income */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-[#E2E8F0]">
                                <div>
                                    <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider block mb-1">
                                        Status Base DP
                                    </span>
                                    <p className="text-sm font-bold text-[#059669] flex items-center gap-1">
                                        <Check className="w-4 h-4" /> Rp100.000 (Sudah Cair ke Saldo)
                                    </p>
                                </div>

                                <div>
                                    <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider block mb-1">
                                        Total Kupon Terpakai di Kasir
                                    </span>
                                    <p className="text-base font-bold text-[#0F172A] tabular-nums">
                                        18 / 50 kupon <span className="text-xs text-[#EA580C] font-semibold">(36%)</span>
                                    </p>
                                </div>

                                <div>
                                    <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider block mb-1">
                                        Komisi Kasir Didapat
                                    </span>
                                    <p className="text-base font-bold text-[#059669] tabular-nums">
                                        Rp54.000 (18 x Rp3.000)
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Campaign 2: Pending Video Upload */}
                    <Card className="border-[#E2E8F0] shadow-sm rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                            <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 mb-6">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-3">
                                        <h2 className="text-lg font-bold text-[#0F172A]">Warung Pak Budi - Sate Ayam Madura</h2>
                                        <Badge className="bg-[#FFFBEB] text-[#D97706] border-[#D97706]/20 text-xs font-bold px-2.5 py-1">
                                            ESCROW_FUNDED • Menunggu Link Video
                                        </Badge>
                                    </div>
                                    <p className="text-xs text-[#475569]">
                                        Skema: <span className="font-semibold text-[#0F172A]">Base DP Rp80.000 + Komisi Rp2.500/scan kasir</span> • Target: 40 Kupon
                                    </p>
                                </div>

                                <Badge className="bg-[#EFF6FF] text-[#2563EB] text-xs font-bold px-3 py-1">
                                    Deposit UMKM Terkunci Aman di Escrow
                                </Badge>
                            </div>

                            {/* Submit Video Form */}
                            <form onSubmit={handleVideoSubmit} className="p-4 bg-[#FFF7ED]/50 rounded-xl border border-[#EA580C]/20 mb-6 space-y-3">
                                <Label className="text-xs font-semibold text-[#0F172A] uppercase tracking-wider block">
                                    Submit Link Video Tayang (TikTok / Instagram Reels)
                                </Label>
                                <div className="flex flex-col sm:flex-row gap-2">
                                    <Input
                                        placeholder="https://www.tiktok.com/@andi.kuliner/video/..."
                                        value={videoInput}
                                        onChange={(e) => setVideoInput(e.target.value)}
                                        className="bg-white h-11 flex-1"
                                    />
                                    <Button
                                        type="submit"
                                        className="bg-[#EA580C] hover:bg-[#C2410C] h-11 px-6 rounded-xl font-semibold text-sm shrink-0"
                                    >
                                        <UploadCloud className="w-4 h-4 mr-2" /> Cairkan DP Rp80.000
                                    </Button>
                                </div>
                                <p className="text-[11px] text-[#475569]">
                                    Setelah link video Anda dikirim, sistem otomatis memverifikasi konten dan mencairkan Base DP sebesar <span className="font-bold text-[#0F172A]">Rp80.000</span> ke saldo dompet Anda serta mengaktifkan tautan kupon pelanggan.
                                </p>

                                {submittedVideo && (
                                    <div className="p-3 bg-[#ECFDF5] border border-[#059669]/30 rounded-xl text-xs font-bold text-[#059669] flex items-center gap-2">
                                        <ShieldCheck className="w-4 h-4" /> Link berhasil dikirim! Sistem sedang memverifikasi tautan konten Anda.
                                    </div>
                                )}
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </CreatorLayout>
    );
}
