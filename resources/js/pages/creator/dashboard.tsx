import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Wallet, Banknote, Link2, Copy, Check, TrendingUp, ArrowUpRight, BarChart2, DollarSign } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import CreatorLayout from '@/layouts/creator-layout';
import { useState } from 'react';

export default function CreatorDashboard() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        const fullUrl = `${window.location.origin}/c/andi-kopi`;
        navigator.clipboard.writeText(fullUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (
        <CreatorLayout activeItem="/creator/dashboard">
            <Head title="Dasbor Kreator - FoodFluence" />
            
            <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
                <header className="mb-8">
                    <div className="flex items-center justify-between mb-2">
                        <h1 className="text-2xl font-bold text-[#0F172A]">Andi Kuliner</h1>
                        <Badge className="bg-[#ECFDF5] text-[#059669] border border-[#059669]/20 text-xs font-bold px-2 py-1">Verified Creator</Badge>
                    </div>
                    <p className="text-[#475569] text-sm">@andi.kuliner • 12.5K Followers • ER 4.5%</p>
                </header>

                {/* Wallet Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <Card className="bg-white border-[#E2E8F0] shadow-sm rounded-2xl relative overflow-hidden">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2 bg-[#ECFDF5] rounded-lg">
                                    <Wallet className="w-5 h-5 text-[#059669]" />
                                </div>
                                <div className="flex items-center gap-2 text-xs text-[#10B981] font-semibold">
                                    <ArrowUpRight className="w-3 h-3" />
                                    <span>+Rp 45.000 minggu ini</span>
                                </div>
                            </div>
                            <p className="text-[#475569] text-xs font-semibold uppercase tracking-wider mb-1">Saldo Dapat Ditarik</p>
                            <h3 className="text-2xl font-bold text-[#0F172A] tabular-nums mb-4">Rp 245.000</h3>
                            <Link href="/creator/withdrawals" className="block w-full">
                                <Button className="w-full bg-[#059669] hover:bg-[#047857] rounded-xl h-10 shadow-sm font-semibold text-sm">
                                    <DollarSign className="w-4 h-4 mr-2" /> Tarik Dana (Disbursement)
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>

                    <Card className="bg-white border-[#E2E8F0] shadow-sm rounded-2xl relative overflow-hidden">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2 bg-[#FFFBEB] rounded-lg">
                                    <Banknote className="w-5 h-5 text-[#F59E0B]" />
                                </div>
                                <Badge className="bg-[#FFFBEB] text-[#F59E0B] text-[10px] font-bold px-2 py-1">Pending</Badge>
                            </div>
                            <p className="text-[#475569] text-xs font-semibold uppercase tracking-wider mb-1">Dana Tertahan di Escrow</p>
                            <h3 className="text-2xl font-bold text-[#0F172A] tabular-nums mb-4">Rp 100.000</h3>
                            <p className="text-xs text-[#94A3B8]">Pending DP dari 2 kampanye aktif</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Active Campaigns */}
                    <div className="lg:col-span-2 space-y-6">
                        <Card className="border-[#E2E8F0] shadow-sm rounded-xl">
                            <CardContent className="p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="font-bold text-[#0F172A]">Kampanye Aktif</h2>
                                    <Badge className="bg-[#FFF7ED] text-[#EA580C] text-[10px] font-bold px-2 py-1">2 Aktif</Badge>
                                </div>

                                {/* Campaign 1 */}
                                <div className="border-b border-[#E2E8F0] pb-6 mb-6 last:border-0 last:pb-0 last:mb-0">
                                    <div className="flex items-start justify-between gap-4 mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-[#E2E8F0] flex items-center justify-center">
                                                <BarChart2 className="w-5 h-5 text-[#94A3B8]" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-[#0F172A]">Kopi Kenangan - Es Kopi Susu</h3>
                                                <p className="text-xs text-[#475569]">DP Rp100.000 + Komisi Rp3.000/scan</p>
                                            </div>
                                        </div>
                                        <Badge className="bg-[#ECFDF5] text-[#10B981] border border-[#10B981]/20 text-xs font-bold px-2 py-1">DP_RELEASED</Badge>
                                    </div>

                                    {/* Unique Coupon Link */}
                                    <div className="mb-4">
                                        <Label className="block text-xs font-semibold text-[#475569] uppercase tracking-wider mb-2">Tautan Klaim Kupon Unik</Label>
                                        <div className="flex gap-2">
                                            <Input 
                                                value="foodfluence.id/c/andi-kopi" 
                                                readOnly 
                                                className="flex-1 bg-[#F8FAFC] font-mono text-sm"
                                            />
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={handleCopy}
                                                className="h-10 px-3 rounded-lg"
                                            >
                                                {copied ? <Check className="w-4 h-4 text-[#059669]" /> : <Copy className="w-4 h-4" />}
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Video Link Submission */}
                                    <div className="mb-4">
                                        <Label className="block text-xs font-semibold text-[#475569] uppercase tracking-wider mb-2">Submit Link Video Tayang (Cairkan DP)</Label>
                                        <div className="flex gap-2">
                                            <Input 
                                                placeholder="https://tiktok.com/@andi.kuliner/video/..." 
                                                className="flex-1 text-sm"
                                            />
                                            <Button className="bg-[#059669] hover:bg-[#047857] rounded-xl h-10 px-4 font-semibold text-sm">
                                                Kirim & Verifikasi
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="pt-4 border-t border-[#E2E8F0]">
                                        <div className="flex justify-between text-xs font-semibold text-[#475569] mb-2">
                                            <span>Progres Kupon</span>
                                            <span>18 / 50 (36%)</span>
                                        </div>
                                        <div className="h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
                                            <div className="h-full bg-[#EA580C] rounded-full" style={{ width: '36%' }}></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Campaign 2 */}
                                <div className="pt-4 border-t border-[#E2E8F0]">
                                    <div className="flex items-start justify-between gap-4 mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-[#E2E8F0] flex items-center justify-center">
                                                <BarChart2 className="w-5 h-5 text-[#94A3B8]" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-[#0F172A]">Warung Pak Budi - Sate Ayam</h3>
                                                <p className="text-xs text-[#475569]">DP Rp80.000 + Komisi Rp2.500/scan</p>
                                            </div>
                                        </div>
                                        <Badge className="bg-[#FFF7ED] text-[#EA580C] border border-[#EA580C]/20 text-xs font-bold px-2 py-1">ESCROW_FUNDED</Badge>
                                    </div>
                                    <div className="pt-4">
                                        <div className="flex justify-between text-xs font-semibold text-[#475569] mb-2">
                                            <span>Progres Kupon</span>
                                            <span>12 / 40 (30%)</span>
                                        </div>
                                        <div className="h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
                                            <div className="h-full bg-[#EA580C] rounded-full" style={{ width: '30%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Conversion Chart */}
                        <Card className="border-[#E2E8F0] shadow-sm rounded-xl">
                            <CardContent className="p-6">
                                <h3 className="font-bold text-[#0F172A] mb-6">Konversi Kasir (7 Hari Terakhir)</h3>
                                <div className="h-48 bg-white rounded border border-[#E2E8F0] relative overflow-hidden">
                                    {/* Simple bar chart using divs */}
                                    <div className="flex items-end justify-center h-full p-4 gap-3">
                                        {['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'].map((day, i) => (
                                            <div key={day} className="flex-1 flex flex-col items-center justify-end min-w-0">
                                                <div className="w-full bg-[#059669] rounded-t transition-all hover:bg-[#047857]" style={{ height: `${[35, 62, 48, 71, 89, 95, 67][i]}%` }}></div>
                                                <span className="text-[10px] text-[#94A3B8] mt-2">{day}</span>
                                            </div>
                                        ))}
                                    </div>
                                    {/* Grid lines */}
                                    <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none">
                                        <div className="border-t border-[#E2E8F0]/50"></div>
                                        <div className="border-t border-[#E2E8F0]/50"></div>
                                        <div className="border-t border-[#E2E8F0]/50"></div>
                                    </div>
                                </div>
                                <p className="text-center text-xs text-[#94A3B8] mt-4">Biru = Klik Tautan, Hijau = Kupon Tervalidasi</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Quick Stats & Actions */}
                    <div className="space-y-6">
                        <Card className="border-[#E2E8F0] shadow-sm rounded-xl">
                            <CardContent className="p-6">
                                <h3 className="font-bold text-[#0F172A] mb-4">Ringkasan Pendapatan</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#475569]">Total DP Dicairkan</span>
                                        <span className="font-bold text-[#0F172A] tabular-nums">Rp 1.200.000</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#475569]">Total Komisi Kupon</span>
                                        <span className="font-bold text-[#059669] tabular-nums">Rp 870.000</span>
                                    </div>
                                    <div className="pt-3 border-t border-[#E2E8F0] flex justify-between text-base font-bold">
                                        <span className="text-[#0F172A]">Total Pendapatan</span>
                                        <span className="text-[#059669] tabular-nums">Rp 2.070.000</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-[#E2E8F0] shadow-sm rounded-xl">
                            <CardContent className="p-6">
                                <h3 className="font-bold text-[#0F172A] mb-4">Pintasan Cepat</h3>
                                <div className="space-y-2">
                                    <Link href="/creator/marketplace" className="block">
                                        <Button variant="outline" className="w-full justify-start h-11 rounded-xl border-[#E2E8F0] hover:border-[#EA580C] hover:bg-[#FFF7ED] group transition-all text-xs font-semibold">
                                            <Link2 className="w-4 h-4 text-[#475569] group-hover:text-[#EA580C] mr-2" /> Buka Bursa Kampanye
                                        </Button>
                                    </Link>
                                    <Link href="/creator/withdrawals" className="block">
                                        <Button variant="outline" className="w-full justify-start h-11 rounded-xl border-[#E2E8F0] hover:border-[#059669] hover:bg-[#ECFDF5] group transition-all text-xs font-semibold">
                                            <Wallet className="w-4 h-4 text-[#475569] group-hover:text-[#059669] mr-2" /> Lihat Riwayat Penarikan
                                        </Button>
                                    </Link>
                                    <Link href="/creator/analytics" className="block">
                                        <Button variant="outline" className="w-full justify-start h-11 rounded-xl border-[#E2E8F0] hover:border-[#059669] hover:bg-[#ECFDF5] group transition-all text-xs font-semibold">
                                            <BarChart2 className="w-4 h-4 text-[#475569] group-hover:text-[#059669] mr-2" /> Analitik Lengkap
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </CreatorLayout>
    );
}