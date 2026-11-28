import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, Tag, ArrowRight, Filter, Wallet, Sparkles, X, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import CreatorLayout from '@/layouts/creator-layout';
import { useState } from 'react';

interface CampaignItem {
    id: number;
    brand: string;
    menu: string;
    distance: string;
    category: string;
    deliverables: string;
    offer: string;
    baseDpOffer: number;
    commissionOffer: number;
    applicants: number;
    status: string;
}

export default function Marketplace() {
    const [selectedCampaign, setSelectedCampaign] = useState<CampaignItem | null>(null);
    const [bidDp, setBidDp] = useState<number>(100000);
    const [bidCommission, setBidCommission] = useState<number>(3000);
    const [pitchNotes, setPitchNotes] = useState<string>('');
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const campaigns: CampaignItem[] = [
        {
            id: 1,
            brand: 'Kopi Kenangan',
            menu: 'Es Kopi Susu Aren',
            distance: '1.8 km',
            category: 'kopi',
            deliverables: '1 Video Reel / TikTok',
            offer: 'DP Rp100.000 + Rp3.000/scan',
            baseDpOffer: 100000,
            commissionOffer: 3000,
            applicants: 12,
            status: 'open',
        },
        {
            id: 2,
            brand: 'Warung Pak Budi',
            menu: 'Sate Ayam Madura Bumbu Kacang',
            distance: '2.5 km',
            category: 'makanan_berat',
            deliverables: '1 TikTok Video',
            offer: 'DP Rp80.000 + Rp2.500/scan',
            baseDpOffer: 80000,
            commissionOffer: 2500,
            applicants: 8,
            status: 'open',
        },
        {
            id: 3,
            brand: 'Dessert Lab',
            menu: 'Tiramisu Cup & Matcha Latte',
            distance: '0.9 km',
            category: 'dessert',
            deliverables: '1 Video Reel + 2 Story IG',
            offer: 'DP Rp150.000 + Rp4.000/scan',
            baseDpOffer: 150000,
            commissionOffer: 4000,
            applicants: 24,
            status: 'open',
        },
        {
            id: 4,
            brand: 'Snack Corner',
            menu: 'Keripik Tempe Crispy Gurih',
            distance: '3.2 km',
            category: 'makanan_ringan',
            deliverables: '1 TikTok Video Review',
            offer: 'DP Rp50.000 + Rp1.500/scan',
            baseDpOffer: 50000,
            commissionOffer: 1500,
            applicants: 5,
            status: 'open',
        },
    ];

    const handleOpenBid = (camp: CampaignItem) => {
        setSelectedCampaign(camp);
        setBidDp(camp.baseDpOffer);
        setBidCommission(camp.commissionOffer);
        setPitchNotes(`Halo tim ${camp.brand}! Saya punya audiens lokal aktif di area sekitar gerai yang suka kuliner serupa.`);
        setSubmitted(false);
    };

    const handleSendBid = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setSelectedCampaign(null);
        }, 2500);
    };

    // AI Pitch Advisor status
    const isCompetitive = selectedCampaign ? (bidDp <= selectedCampaign.baseDpOffer * 1.15 && bidCommission <= selectedCampaign.commissionOffer * 1.2) : true;

    return (
        <CreatorLayout activeItem="/creator/marketplace">
            <Head title="Bursa Kampanye F&B - FoodFluence" />

            <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
                <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-[#0F172A]">Bursa Kampanye F&B & Ajukan Bid</h1>
                        <p className="text-[#475569] text-sm mt-1">Cari kolaborasi kuliner terdekat dari kota Anda dan ajukan penawaran harga adil.</p>
                    </div>
                    <Link href="/creator/dashboard">
                        <Button variant="outline" className="h-11 px-5 rounded-xl border-[#E2E8F0] hover:border-[#EA580C] hover:bg-[#FFF7ED] font-semibold text-sm">
                            <Wallet className="w-4 h-4 mr-2 text-[#EA580C]" /> Dasbor Dompet Saya
                        </Button>
                    </Link>
                </header>

                {/* Search & Filter Bar */}
                <Card className="border-[#E2E8F0] shadow-sm rounded-2xl mb-8">
                    <CardContent className="p-5">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="relative flex-1">
                                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8] w-5 h-5" />
                                <Input
                                    placeholder="Cari nama kedai atau menu..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-11 h-11"
                                />
                            </div>
                            <div className="flex gap-3 flex-wrap">
                                <Select defaultValue="5km">
                                    <SelectTrigger className="w-[150px] h-11">
                                        <SelectValue placeholder="Radius Lokasi" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="5km">&lt; 5 km (Terdekat)</SelectItem>
                                        <SelectItem value="10km">&lt; 10 km</SelectItem>
                                        <SelectItem value="city">Satu Kota</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Select defaultValue="all">
                                    <SelectTrigger className="w-[160px] h-11">
                                        <SelectValue placeholder="Kategori Kuliner" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">Semua Kategori</SelectItem>
                                        <SelectItem value="kopi">Kopi & Minuman</SelectItem>
                                        <SelectItem value="makanan_ringan">Camilan</SelectItem>
                                        <SelectItem value="dessert">Dessert</SelectItem>
                                        <SelectItem value="makanan_berat">Makanan Berat</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Campaign Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {campaigns.map((camp) => (
                        <Card key={camp.id} className="border-[#E2E8F0] shadow-sm rounded-2xl hover:shadow-md transition-shadow overflow-hidden group flex flex-col justify-between">
                            <div>
                                <div className="relative aspect-video bg-[#E2E8F0] overflow-hidden flex items-center justify-center">
                                    <div className="text-center p-4">
                                        <p className="font-bold text-lg text-[#0F172A]">{camp.menu}</p>
                                        <p className="text-xs text-[#059669] font-bold">{camp.brand}</p>
                                    </div>
                                    <div className="absolute top-3 left-3">
                                        <Badge className="bg-white/95 text-[#475569] text-[10px] font-bold px-2 py-0.5 shadow-xs">
                                            {camp.category.replace('_', ' ').toUpperCase()}
                                        </Badge>
                                    </div>
                                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/95 px-2 py-0.5 rounded-full text-[10px] font-bold text-[#475569] shadow-xs">
                                        <MapPin className="w-3 h-3 text-[#EA580C]" />
                                        {camp.distance}
                                    </div>
                                </div>
                                <CardContent className="p-5">
                                    <div className="flex gap-2 text-[11px] text-[#475569] mb-3">
                                        <span className="flex items-center gap-1"><Tag className="w-3.5 h-3.5 text-[#059669]" /> {camp.applicants} pelamar aktif</span>
                                    </div>

                                    <div className="bg-[#F8FAFC] p-3.5 rounded-xl mb-4 text-xs space-y-1.5 border border-[#E2E8F0]">
                                        <p><span className="font-semibold text-[#0F172A]">Deliverables:</span> {camp.deliverables}</p>
                                        <p><span className="font-semibold text-[#0F172A]">Tawaran UMKM:</span> <strong className="text-[#059669]">{camp.offer}</strong></p>
                                    </div>
                                </CardContent>
                            </div>

                            <div className="p-5 pt-0">
                                <Button
                                    onClick={() => handleOpenBid(camp)}
                                    className="w-full bg-[#EA580C] hover:bg-[#C2410C] rounded-xl h-11 font-bold text-sm shadow-sm group"
                                >
                                    Ajukan Bid <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Slide-Over Submit Bid Drawer (Modal) */}
            {selectedCampaign && (
                <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs animate-fadeIn">
                    <div className="w-full max-w-lg bg-white h-full shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
                        <div>
                            <div className="flex justify-between items-start pb-4 border-b border-[#E2E8F0] mb-6">
                                <div>
                                    <Badge className="bg-[#FFF7ED] text-[#EA580C] text-[10px] font-bold mb-1">
                                        Formulir Pengajuan Bid
                                    </Badge>
                                    <h2 className="text-xl font-bold text-[#0F172A]">{selectedCampaign.menu}</h2>
                                    <p className="text-xs text-[#059669] font-bold">{selectedCampaign.brand} • {selectedCampaign.deliverables}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedCampaign(null)}
                                    className="p-1 rounded-lg text-[#64748B] hover:bg-[#F1F5F9]"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <form onSubmit={handleSendBid} className="space-y-5">
                                {/* AI Pitch Advisor Banner */}
                                <div className={`p-4 rounded-xl border flex items-start gap-3 ${
                                    isCompetitive
                                        ? 'bg-[#ECFDF5] border-[#059669]/30 text-[#065F46]'
                                        : 'bg-[#FFFBEB] border-[#F59E0B]/30 text-[#92400E]'
                                }`}>
                                    <Sparkles className="w-5 h-5 shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider">
                                            AI Pitch Advisor: {isCompetitive ? 'Tawaran Kompetitif' : 'Di Atas Anggaran UMKM'}
                                        </p>
                                        <p className="text-xs mt-0.5">
                                            {isCompetitive
                                                ? 'Penawaran Anda selaras dengan HPP menu dan probabilitas disetujui UMKM mencapai 94%.'
                                                : 'Nominal DP/komisi Anda melebihi estimasi margin aman F&B. Pertimbangkan menurunkan sedikit agar cepat deal.'}
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <Label className="text-xs font-semibold text-[#475569] uppercase tracking-wider">
                                        Penawaran Base DP (Rp)
                                    </Label>
                                    <Input
                                        type="number"
                                        value={bidDp}
                                        onChange={(e) => setBidDp(Number(e.target.value))}
                                        className="h-11 mt-1 font-mono font-bold"
                                    />
                                    <p className="text-[11px] text-[#64748B] mt-1">
                                        Tawaran awal UMKM: Rp {selectedCampaign.baseDpOffer.toLocaleString('id-ID')}
                                    </p>
                                </div>

                                <div>
                                    <Label className="text-xs font-semibold text-[#475569] uppercase tracking-wider">
                                        Usulan Komisi per Kupon Scan Kasir (Rp)
                                    </Label>
                                    <Input
                                        type="number"
                                        value={bidCommission}
                                        onChange={(e) => setBidCommission(Number(e.target.value))}
                                        className="h-11 mt-1 font-mono font-bold"
                                    />
                                    <p className="text-[11px] text-[#64748B] mt-1">
                                        Tawaran awal UMKM: Rp {selectedCampaign.commissionOffer.toLocaleString('id-ID')}/scan
                                    </p>
                                </div>

                                <div>
                                    <Label className="text-xs font-semibold text-[#475569] uppercase tracking-wider">
                                        Pesan Singkat / Pitching ke Pemilik Gerai
                                    </Label>
                                    <textarea
                                        value={pitchNotes}
                                        onChange={(e) => setPitchNotes(e.target.value)}
                                        rows={4}
                                        className="w-full mt-1 p-3 text-sm border border-[#E2E8F0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#059669]"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={submitted}
                                    className="w-full bg-[#EA580C] hover:bg-[#C2410C] h-12 rounded-xl font-bold text-sm shadow-sm"
                                >
                                    {submitted ? 'Mengirimkan Penawaran...' : 'Kirim Penawaran Bid ke UMKM'}
                                </Button>

                                {submitted && (
                                    <div className="p-3.5 bg-[#ECFDF5] border border-[#059669]/30 rounded-xl text-xs font-bold text-[#059669] flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 shrink-0" />
                                        <span>Penawaran bid Anda berhasil dikirim! Pantau statusnya di Dasbor Kreator.</span>
                                    </div>
                                )}
                            </form>
                        </div>

                        <div className="pt-4 border-t border-[#E2E8F0] text-[11px] text-[#64748B] flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-[#059669]" />
                            <span>Kontrak MOU digital dan deposit escrow otomatis terbit jika bid diterima.</span>
                        </div>
                    </div>
                </div>
            )}
        </CreatorLayout>
    );
}
