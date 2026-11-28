import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, AlertTriangle, Sparkles, TrendingUp, Calculator, ArrowLeft, UserCircle, DollarSign } from 'lucide-react';
import { useState } from 'react';
import MerchantLayout from '@/layouts/merchant-layout';

export default function AiCalculator() {
    const [formData, setFormData] = useState({
        menuName: '',
        menuPrice: 20000,
        hppCost: 8000,
        discountPercent: 15,
        minOrder: 30000,
        couponQuota: 50,
        creatorId: '1',
    });
    const [isFeasible, setIsFeasible] = useState(true);
    const [results, setResults] = useState({
        bepCoupons: 22,
        profitPerPortion: 6250,
        totalProjectedProfit: 312500,
        aiSuggestions: [
            'Naikkan Syarat Minimal Belanja ke Rp 35.000 untuk mengamankan margin.',
            'Tingkatkan kuota kupon ke 75 untuk ROI lebih maksimal.',
        ],
    });

    const calculateResults = () => {
        const { menuPrice, hppCost, discountPercent, minOrder, couponQuota, creatorId } = formData;
        // Simplified calculation
        const discountAmount = menuPrice * (discountPercent / 100);
        const netRevenue = menuPrice - discountAmount;
        const profitPerPortion = netRevenue - hppCost;

        // Mock creator data
        const creatorData = { baseDp: 100000, commissionPerScan: 3000 };

        const bepCoupons = Math.ceil(creatorData.baseDp / profitPerPortion);
        const isFeasibleCalc = profitPerPortion > 0 && bepCoupons < couponQuota * 0.8;
        const totalProjectedProfit = profitPerPortion * couponQuota - creatorData.baseDp - (creatorData.commissionPerScan * couponQuota);

        setIsFeasible(isFeasibleCalc);
        setResults({
            bepCoupons,
            profitPerPortion,
            totalProjectedProfit: Math.max(0, totalProjectedProfit),
            aiSuggestions: isFeasibleCalc
                ? ['Margin aman. Pertimbangkan menaikkan kuota untuk ROI lebih baik.', 'Minimal belanja saat ini cukup optimal.']
                : ['Margin terlalu tipis. Naikkan harga atau kurangi diskon.', 'Kurangi Base DP kreator atau cari kreator dengan rate lebih rendah.'],
        });
    };

    return (
        <MerchantLayout activeItem="/merchant/ai-calculator">
            <Head title="Kalkulator AI ROI & Matchmaking - FoodFluence" />

            <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
                <nav className="flex items-center gap-4 mb-6">
                    <button className="text-[#475569] hover:text-[#0F172A] p-2 rounded-lg hover:bg-[#F8FAFC] transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold text-[#0F172A]">Kalkulator AI ROI & Matchmaking</h1>
                        <p className="text-[#475569] text-sm">Simulasi kelayakan finansial kampanye sebelum mengeluarkan dana</p>
                    </div>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-8">
                    {/* Left Panel - Inputs */}
                    <div className="space-y-6">
                        <Card className="bg-white border-[#E2E8F0] shadow-sm rounded-2xl">
                            <CardHeader className="border-b border-[#E2E8F0] pb-4">
                                <CardTitle className="flex items-center gap-2 text-base">
                                    <Calculator className="w-5 h-5 text-[#059669]" />
                                    Data Ekonomi Menu & Promosi
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="md:col-span-2">
                                        <Label>Nama Menu Promo</Label>
                                        <Input
                                            value={formData.menuName}
                                            onChange={(e) => setFormData({ ...formData, menuName: e.target.value })}
                                            placeholder="Contoh: Es Kopi Susu Gula Aren"
                                            className="mt-1"
                                        />
                                    </div>
                                    <div>
                                        <Label>Harga Jual (Rp)</Label>
                                        <Input
                                            type="number"
                                            value={formData.menuPrice}
                                            onChange={(e) => setFormData({ ...formData, menuPrice: parseInt(e.target.value) || 0 })}
                                            placeholder="20000"
                                            className="mt-1"
                                        />
                                    </div>
                                    <div>
                                        <Label>HPP / Modal Bahan Baku (Rp)</Label>
                                        <Input
                                            type="number"
                                            value={formData.hppCost}
                                            onChange={(e) => setFormData({ ...formData, hppCost: parseInt(e.target.value) || 0 })}
                                            placeholder="8000"
                                            className="mt-1"
                                        />
                                    </div>
                                    <div>
                                        <Label>Diskon Kupon Pelanggan (%)</Label>
                                        <Input
                                            type="number"
                                            value={formData.discountPercent}
                                            onChange={(e) => setFormData({ ...formData, discountPercent: parseInt(e.target.value) || 0 })}
                                            placeholder="15"
                                            className="mt-1"
                                            max={100}
                                            min={1}
                                        />
                                    </div>
                                    <div>
                                        <Label>Syarat Minimal Belanja (Rp)</Label>
                                        <Input
                                            type="number"
                                            value={formData.minOrder}
                                            onChange={(e) => setFormData({ ...formData, minOrder: parseInt(e.target.value) || 0 })}
                                            className="mt-1"
                                        />
                                    </div>
                                    <div>
                                        <Label>Target Kuota Kupon</Label>
                                        <Input
                                            type="number"
                                            value={formData.couponQuota}
                                            onChange={(e) => setFormData({ ...formData, couponQuota: parseInt(e.target.value) || 0 })}
                                            className="mt-1"
                                        />
                                    </div>
                                </div>
                                <Button onClick={calculateResults} className="w-full bg-[#059669] hover:bg-[#047857]">
                                    Hitung ROI
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Panel - Results */}
                    <div className="space-y-6">
                        <Card className="bg-white border-[#E2E8F0] shadow-sm rounded-2xl">
                            <CardHeader className="border-b border-[#E2E8F0] pb-4">
                                <CardTitle className="text-base">Hasil Simulasi ROI</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-[#F8FAFC] p-4 rounded-xl">
                                        <p className="text-sm text-[#475569]">Profit / Porsi</p>
                                        <p className="text-lg font-bold text-[#0F172A]">Rp {results.profitPerPortion.toLocaleString()}</p>
                                    </div>
                                    <div className="bg-[#F8FAFC] p-4 rounded-xl">
                                        <p className="text-sm text-[#475569]">BEP (Kupon)</p>
                                        <p className="text-lg font-bold text-[#0F172A]">{results.bepCoupons}</p>
                                    </div>
                                </div>
                                
                                <div className={`p-4 rounded-xl flex gap-3 ${isFeasible ? 'bg-[#ECFDF5] text-[#059669]' : 'bg-[#FFF1F2] text-[#E11D48]'}`}>
                                    {isFeasible ? <CheckCircle className="w-6 h-6 shrink-0" /> : <AlertTriangle className="w-6 h-6 shrink-0" />}
                                    <div>
                                        <p className="font-bold">{isFeasible ? 'Kampanye Layak' : 'Kampanye Berisiko'}</p>
                                        <p className="text-sm mt-1">
                                            {isFeasible ? 'Potensi profit bersih: ' : 'Profit terancam rugi: '}
                                            Rp {results.totalProjectedProfit.toLocaleString()}
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <h3 className="font-medium text-[#0F172A] flex items-center gap-2">
                                        <Sparkles className="w-4 h-4 text-[#EA580C]" />
                                        Saran
                                    </h3>
                                    <ul className="space-y-2">
                                        {results.aiSuggestions.map((suggestion, index) => (
                                            <li key={index} className="text-sm text-[#475569] flex gap-2">
                                                <span>•</span> {suggestion}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </MerchantLayout>
    );
}