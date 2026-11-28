import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, Wallet, TicketCheck, TrendingUp, Zap, ArrowRight, UserCircle } from 'lucide-react';
import MerchantLayout from '@/layouts/merchant-layout';

export default function MerchantDashboard() {
    return (
        <MerchantLayout activeItem="/merchant/dashboard">
            <Head title="Ringkasan Dasbor - FoodFluence" />
            
            <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
                <header className="flex justify-between items-start mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <h1 className="text-2xl font-bold text-[#0F172A]">Kopi Kenangan - Sudirman</h1>
                            <span className="bg-[#ECFDF5] text-[#059669] text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#059669]/20 uppercase tracking-wider">Terverifikasi</span>
                        </div>
                        <p className="text-[#475569] text-sm">Selamat pagi! Lihat perkembangan promosi Anda hari ini.</p>
                    </div>
                    <Link href="/merchant/ai-calculator">
                        <Button className="bg-[#EA580C] hover:bg-[#C2410C] rounded-xl h-11 px-6 shadow-sm">
                            <Plus className="w-4 h-4 mr-2" /> Buat Kampanye Baru
                        </Button>
                    </Link>
                </header>

                {/* KPI Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    <Card className="bg-white border-[#E2E8F0] shadow-sm rounded-2xl">
                        <CardContent className="p-5">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2 bg-[#ECFDF5] rounded-lg">
                                    <Wallet className="w-5 h-5 text-[#059669]" />
                                </div>
                            </div>
                            <p className="text-[#475569] text-xs font-semibold uppercase tracking-wider mb-1">Saldo Deposit Escrow</p>
                            <h3 className="text-2xl font-bold text-[#0F172A] tabular-nums">Rp 450.000</h3>
                        </CardContent>
                    </Card>

                    <Card className="bg-white border-[#E2E8F0] shadow-sm rounded-2xl">
                        <CardContent className="p-5">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2 bg-[#F1F5F9] rounded-lg">
                                    <TicketCheck className="w-5 h-5 text-[#475569]" />
                                </div>
                            </div>
                            <p className="text-[#475569] text-xs font-semibold uppercase tracking-wider mb-1">Kupon Tervalidasi</p>
                            <h3 className="text-2xl font-bold text-[#0F172A] tabular-nums">34 / 50</h3>
                        </CardContent>
                    </Card>

                    <Card className="bg-white border-[#E2E8F0] shadow-sm rounded-2xl">
                        <CardContent className="p-5">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2 bg-[#FFFBEB] rounded-lg">
                                    <TrendingUp className="w-5 h-5 text-[#F59E0B]" />
                                </div>
                            </div>
                            <p className="text-[#475569] text-xs font-semibold uppercase tracking-wider mb-1">Estimasi Omzet</p>
                            <h3 className="text-2xl font-bold text-[#0F172A] tabular-nums">Rp 1.870.000</h3>
                        </CardContent>
                    </Card>

                    <Card className="bg-white border-[#E2E8F0] shadow-sm rounded-2xl">
                        <CardContent className="p-5">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg">
                                    <Zap className="w-5 h-5 text-[#0F172A]" />
                                </div>
                                <span className="text-[#EA580C] text-xs font-semibold">Status: Aktif</span>
                            </div>
                            <p className="text-[#475569] text-xs font-semibold uppercase tracking-wider mb-1">Kampanye Berjalan</p>
                            <h3 className="text-2xl font-bold text-[#0F172A] tabular-nums">2 Kampanye</h3>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Table */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden">
                            <div className="p-6 border-b border-[#E2E8F0] flex justify-between items-center">
                                <h2 className="font-bold text-[#0F172A]">Kampanye Berjalan</h2>
                                <Link href="/merchant/campaigns">
                                    <Button variant="ghost" size="sm" className="text-[#059669] hover:bg-[#ECFDF5] font-semibold">Lihat Semua</Button>
                                </Link>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-[#F8FAFC] text-[10px] font-bold text-[#64748B] uppercase tracking-widest border-b border-[#E2E8F0]">
                                            <th className="px-6 py-4">Influencer</th>
                                            <th className="px-6 py-4">Menu Promo</th>
                                            <th className="px-6 py-4">Progres Kupon</th>
                                            <th className="px-6 py-4">Status</th>
                                            <th className="px-6 py-4">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#E2E8F0]">
                                        <tr className="hover:bg-[#F8FAFC]/50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-[#E2E8F0] flex items-center justify-center"><UserCircle className="w-5 h-5 text-[#94A3B8]"/></div>
                                                    <span className="font-semibold text-sm text-[#0F172A]">Andi Kuliner</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="text-sm text-[#475569]">Es Kopi Susu Aren</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="w-32">
                                                    <div className="flex justify-between text-[10px] font-bold text-[#475569] mb-1">
                                                        <span>16/25</span>
                                                        <span>64%</span>
                                                    </div>
                                                    <div className="h-1.5 bg-[#E2E8F0] rounded-full overflow-hidden">
                                                        <div className="h-full bg-[#059669] rounded-full" style={{ width: '64%' }}></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="bg-[#ECFDF5] text-[#10B981] text-[10px] font-bold px-2 py-1 rounded-full uppercase">DP_RELEASED</span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <Link href="/merchant/campaigns">
                                                    <Button variant="outline" size="sm" className="rounded-lg h-8 px-3 text-xs">Detail</Button>
                                                </Link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions / Tips */}
                    <div className="space-y-6">
                        <div className="bg-[#059669] rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="font-bold text-lg mb-2 leading-tight">Optimalkan Margin dengan AI</h3>
                                <p className="text-white/80 text-sm mb-4">Gunakan simulator kami untuk menghitung BEP sebelum kolaborasi.</p>
                                <Link href="/merchant/ai-calculator" className="block">
                                    <Button className="bg-white text-[#059669] hover:bg-[#F8FAFC] rounded-xl font-bold w-full h-10 shadow-sm border-0">
                                        Coba Kalkulator ROI
                                    </Button>
                                </Link>
                            </div>
                            {/* Decorative background shape */}
                            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full"></div>
                        </div>

                        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm">
                            <h3 className="font-bold text-[#0F172A] mb-4">Pintasan Cepat</h3>
                            <div className="grid grid-cols-2 gap-3">
                                <Link href="/merchant/campaigns/bids" className="block">
                                    <Button variant="outline" className="w-full h-auto py-3 px-3 flex flex-col items-center gap-2 rounded-xl border-[#E2E8F0] hover:border-[#059669] hover:bg-[#ECFDF5] group transition-all">
                                        <div className="p-2 bg-[#F1F5F9] group-hover:bg-white rounded-lg transition-colors">
                                            <Plus className="w-5 h-5 text-[#475569] group-hover:text-[#059669]" />
                                        </div>
                                        <span className="text-[11px] font-bold text-[#475569] group-hover:text-[#059669]">Buka Lowongan</span>
                                    </Button>
                                </Link>
                                <Link href="/merchant/settings" className="block">
                                    <Button variant="outline" className="w-full h-auto py-3 px-3 flex flex-col items-center gap-2 rounded-xl border-[#E2E8F0] hover:border-[#EA580C] hover:bg-[#FFF7ED] group transition-all">
                                        <div className="p-2 bg-[#F1F5F9] group-hover:bg-white rounded-lg transition-colors">
                                            <TicketCheck className="w-5 h-5 text-[#475569] group-hover:text-[#EA580C]" />
                                        </div>
                                        <span className="text-[11px] font-bold text-[#475569] group-hover:text-[#EA580C]">Input PIN Kasir</span>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MerchantLayout>
    );
}