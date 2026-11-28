import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, User, Star, TrendingUp, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import MerchantLayout from '@/layouts/merchant-layout';

export default function MerchantBids() {
    const bids = [
        {
            name: 'Andi Kuliner',
            avatar: null,
            views: '125K',
            er: '4.5%',
            bidDp: 'Rp 90.000',
            commission: 'Rp 2.800/scan',
            pitch: 'Saya punya audiens lokal yang cocok untuk kedai Anda!',
            fitScore: 96,
            bep: 18,
            portfolio: 'https://tiktok.com/@andi.kuliner',
        },
        {
            name: 'Rina Makanan',
            avatar: null,
            views: '89K',
            er: '3.8%',
            bidDp: 'Rp 110.000',
            commission: 'Rp 3.500/scan',
            pitch: 'Specialis review makanan, engagement tinggi!',
            fitScore: 82,
            bep: 24,
            portfolio: 'https://instagram.com/rina.makanan',
        },
    ];

    return (
        <MerchantLayout activeItem="/merchant/campaigns/bids">
            <Head title="Lowongan & Seleksi Bid - FoodFluence" />
            
            <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto w-full">
                <header className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-[#0F172A]">Lowongan Kampanye & Penawaran Kreator</h1>
                    <Link href="/merchant/ai-calculator">
                        <Button className="bg-[#059669] hover:bg-[#047857] rounded-xl h-11 px-6 shadow-sm font-semibold text-sm">
                            <Plus className="w-4 h-4 mr-2" /> Buka Lowongan Baru
                        </Button>
                    </Link>
                </header>

                <div className="space-y-5">
                    {bids.map((bid, i) => (
                        <Card key={i} className="bg-white border-[#E2E8F0] shadow-sm rounded-2xl">
                            <CardContent className="p-6">
                                <div className="flex gap-4 mb-5">
                                    <div className="w-14 h-14 bg-[#E2E8F0] rounded-full flex items-center justify-center flex-shrink-0">
                                        <User className="w-7 h-7 text-[#94A3B8]" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-lg text-[#0F172A]">{bid.name}</h3>
                                        <div className="flex flex-wrap gap-4 text-xs text-[#475569] mt-1">
                                            <span className="flex items-center gap-1"><TrendingUp className="w-3 h-3" /> {bid.views} views rata-rata</span>
                                            <span className="flex items-center gap-1"><Star className="w-3 h-3" /> ER {bid.er}</span>
                                        </div>
                                        <p className="text-[#475569] mt-2 text-sm line-clamp-2">{bid.pitch}</p>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-[#F8FAFC] rounded-xl mb-4">
                                    <div className="flex items-center gap-6">
                                        <div>
                                            <p className="text-xs font-semibold text-[#475569] uppercase tracking-wider">Bid Base DP</p>
                                            <p className="font-bold text-xl text-[#0F172A]">{bid.bidDp}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold text-[#475569] uppercase tracking-wider">Komisi/Scan</p>
                                            <p className="font-bold text-xl text-[#EA580C]">{bid.commission}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 text-center">
                                        <div className="px-4 py-2 bg-[#ECFDF5] rounded-xl border border-[#059669]">
                                            <p className="font-bold text-[#059669] text-sm">{bid.fitScore}% Cocok</p>
                                            <p className="text-[10px] text-[#059669]">BEP {bid.bep} Kupon</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <a
                                        href={bid.portfolio}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex-1"
                                    >
                                        <Button variant="outline" className="w-full h-10 rounded-xl border-[#E2E8F0] hover:border-[#059669] hover:bg-[#ECFDF5] text-sm font-semibold">
                                            <ExternalLink className="w-4 h-4 mr-2" /> Tonton Portofolio
                                        </Button>
                                    </a>
                                    <Link href="/merchant/escrow-checkout" className="flex-1">
                                        <Button className="w-full bg-[#EA580C] hover:bg-[#C2410C] h-10 rounded-xl font-semibold text-sm shadow-sm">
                                            <CheckCircle2 className="w-4 h-4 mr-2" /> Terima Bid & Lanjut MOU
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </MerchantLayout>
    );
}