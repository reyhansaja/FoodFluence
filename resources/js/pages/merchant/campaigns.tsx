import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, UserCircle, ExternalLink, ShieldCheck, TicketCheck, ArrowRight, Copy, Check, Filter } from 'lucide-react';
import MerchantLayout from '@/layouts/merchant-layout';
import { useState } from 'react';

export default function MerchantCampaigns() {
    const [copiedSlug, setCopiedSlug] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<'all' | 'running' | 'bidding' | 'completed'>('all');

    const campaigns = [
        {
            id: 1,
            title: 'Promo Spesial Es Kopi Susu Gula Aren',
            menu: 'Es Kopi Susu Aren',
            influencer: {
                name: 'Andi Kuliner',
                handle: '@andi.kuliner',
                followers: '12.5K',
                er: '4.5%',
            },
            status: 'DP_RELEASED',
            statusLabel: 'DP Tayang & Kupon Aktif',
            couponsUsed: 34,
            couponQuota: 50,
            revenueTracked: 1870000,
            depositRemaining: 48000,
            commissionPerScan: 3000,
            dpAmount: 100000,
            slug: 'andi-kopi',
            videoUrl: 'https://tiktok.com/@andi.kuliner/video/123456789',
        },
        {
            id: 2,
            title: 'Sensasi Avocado Coffee Creamy',
            menu: 'Avocado Coffee Cream',
            influencer: {
                name: 'Rina Makanan',
                handle: '@rina.foodie',
                followers: '8.9K',
                er: '5.1%',
            },
            status: 'ESCROW_FUNDED',
            statusLabel: 'Dana Tertahan di Escrow',
            couponsUsed: 0,
            couponQuota: 40,
            revenueTracked: 0,
            depositRemaining: 210000,
            commissionPerScan: 3000,
            dpAmount: 90000,
            slug: 'rina-avocado',
            videoUrl: null,
        },
        {
            id: 3,
            title: 'Paket Sarapan Roti Bakar Coklat Keju',
            menu: 'Roti Bakar Special',
            influencer: null,
            status: 'OPEN_BIDDING',
            statusLabel: 'Menunggu Seleksi Bid',
            couponsUsed: 0,
            couponQuota: 35,
            revenueTracked: 0,
            depositRemaining: 0,
            commissionPerScan: 2500,
            dpAmount: 80000,
            slug: null,
            videoUrl: null,
        },
    ];

    const filtered = campaigns.filter((c) => {
        if (activeTab === 'running') return c.status === 'DP_RELEASED' || c.status === 'ESCROW_FUNDED';
        if (activeTab === 'bidding') return c.status === 'OPEN_BIDDING';
        if (activeTab === 'completed') return c.status === 'COMPLETED';
        return true;
    });

    const handleCopy = (slug: string) => {
        const fullUrl = `${window.location.origin}/c/${slug}`;
        navigator.clipboard.writeText(fullUrl);
        setCopiedSlug(slug);
        setTimeout(() => setCopiedSlug(null), 2500);
    };

    return (
        <MerchantLayout activeItem="/merchant/campaigns">
            <Head title="Kampanye Aktif & Riwayat - FoodFluence" />

            <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
                <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-[#0F172A]">Kampanye Promosi Aktif & Riwayat</h1>
                        <p className="text-[#475569] text-sm mt-1">
                            Pantau konversi kupon kasir, pelepasan dana DP kreator, dan status escrow secara real-time.
                        </p>
                    </div>
                    <Link href="/merchant/ai-calculator">
                        <Button className="bg-[#EA580C] hover:bg-[#C2410C] rounded-xl h-11 px-6 shadow-sm font-semibold text-sm">
                            <Plus className="w-4 h-4 mr-2" /> Buat Kampanye Baru
                        </Button>
                    </Link>
                </header>

                {/* Filter Tabs */}
                <div className="flex gap-2 border-b border-[#E2E8F0] mb-6 pb-2 overflow-x-auto">
                    {[
                        { id: 'all', label: 'Semua Kampanye', count: campaigns.length },
                        { id: 'running', label: 'Sedang Berjalan', count: 2 },
                        { id: 'bidding', label: 'Bursa Lowongan', count: 1 },
                        { id: 'completed', label: 'Selesai & Refund', count: 0 },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as typeof activeTab)}
                            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all flex items-center gap-2 ${
                                activeTab === tab.id
                                    ? 'bg-[#ECFDF5] text-[#059669]'
                                    : 'text-[#475569] hover:text-[#0F172A] hover:bg-[#F1F5F9]'
                            }`}
                        >
                            <span>{tab.label}</span>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${
                                activeTab === tab.id ? 'bg-[#059669] text-white' : 'bg-[#E2E8F0] text-[#64748B]'
                            }`}>
                                {tab.count}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Campaign Cards List */}
                <div className="space-y-6">
                    {filtered.map((campaign) => {
                        const progress = Math.round((campaign.couponsUsed / campaign.couponQuota) * 100);
                        return (
                            <Card key={campaign.id} className="border-[#E2E8F0] shadow-sm rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
                                <CardContent className="p-6">
                                    <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 mb-6">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-3">
                                                <h2 className="text-lg font-bold text-[#0F172A]">{campaign.title}</h2>
                                                <Badge className={`text-xs font-bold px-2.5 py-1 ${
                                                    campaign.status === 'DP_RELEASED'
                                                        ? 'bg-[#ECFDF5] text-[#059669] border-[#059669]/20'
                                                        : campaign.status === 'ESCROW_FUNDED'
                                                        ? 'bg-[#FFFBEB] text-[#D97706] border-[#D97706]/20'
                                                        : 'bg-[#F1F5F9] text-[#475569]'
                                                }`}>
                                                    {campaign.status} • {campaign.statusLabel}
                                                </Badge>
                                            </div>
                                            <p className="text-xs text-[#475569]">
                                                Menu: <span className="font-semibold text-[#0F172A]">{campaign.menu}</span> • Diskon 15% (Min. Belanja Rp30.000)
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            {campaign.slug && (
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => handleCopy(campaign.slug!)}
                                                    className="rounded-xl border-[#E2E8F0] text-xs font-semibold h-9"
                                                >
                                                    {copiedSlug === campaign.slug ? (
                                                        <>
                                                            <Check className="w-3.5 h-3.5 mr-1 text-[#059669]" /> Tersalin!
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Copy className="w-3.5 h-3.5 mr-1" /> Salin Tautan Kupon
                                                        </>
                                                    )}
                                                </Button>
                                            )}
                                            <Link href="/merchant/escrow-checkout">
                                                <Button variant="ghost" size="sm" className="rounded-xl text-xs font-semibold h-9 text-[#475569]">
                                                    <ShieldCheck className="w-3.5 h-3.5 mr-1 text-[#059669]" /> Kontrak MOU
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] mb-6">
                                        <div>
                                            <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider block mb-1">Influencer Partner</span>
                                            {campaign.influencer ? (
                                                <div className="flex items-center gap-2">
                                                    <UserCircle className="w-6 h-6 text-[#94A3B8]" />
                                                    <div>
                                                        <p className="text-sm font-bold text-[#0F172A] leading-tight">{campaign.influencer.name}</p>
                                                        <p className="text-[11px] text-[#64748B]">{campaign.influencer.handle} • ER {campaign.influencer.er}</p>
                                                    </div>
                                                </div>
                                            ) : (
                                                <Link href="/merchant/campaigns/bids" className="text-sm font-semibold text-[#EA580C] hover:underline flex items-center gap-1">
                                                    3 Bid Kreator Menunggu <ArrowRight className="w-3.5 h-3.5" />
                                                </Link>
                                            )}
                                        </div>

                                        <div>
                                            <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider block mb-1">Validasi Kupon Kasir</span>
                                            <div className="flex items-center gap-2">
                                                <TicketCheck className="w-5 h-5 text-[#059669]" />
                                                <span className="text-lg font-bold text-[#0F172A] tabular-nums">
                                                    {campaign.couponsUsed} / {campaign.couponQuota}
                                                </span>
                                                <span className="text-xs text-[#059669] font-bold">({progress}%)</span>
                                            </div>
                                        </div>

                                        <div>
                                            <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider block mb-1">Omzet Kasir Terlacak</span>
                                            <p className="text-lg font-bold text-[#0F172A] tabular-nums">
                                                Rp {campaign.revenueTracked.toLocaleString('id-ID')}
                                            </p>
                                        </div>

                                        <div>
                                            <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider block mb-1">Skema Biaya Escrow</span>
                                            <p className="text-xs font-semibold text-[#0F172A]">
                                                DP: Rp {campaign.dpAmount.toLocaleString('id-ID')}
                                            </p>
                                            <p className="text-xs text-[#475569]">
                                                Komisi: Rp {campaign.commissionPerScan.toLocaleString('id-ID')}/scan
                                            </p>
                                        </div>
                                    </div>

                                    {/* Progress bar */}
                                    <div className="space-y-1.5">
                                        <div className="flex justify-between text-xs font-semibold text-[#475569]">
                                            <span>Target Kuota Kupon Promosi</span>
                                            <span>Sisa Kuota: {campaign.couponQuota - campaign.couponsUsed} kupon</span>
                                        </div>
                                        <div className="h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-[#059669] rounded-full transition-all duration-500"
                                                style={{ width: `${progress}%` }}
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </MerchantLayout>
    );
}
