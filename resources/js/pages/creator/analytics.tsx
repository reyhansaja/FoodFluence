import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, MousePointerClick, TicketCheck, TrendingUp, Users, ArrowUpRight, Clock, Store } from 'lucide-react';
import CreatorLayout from '@/layouts/creator-layout';

export default function CreatorAnalytics() {
    const hourlyVisits = [
        { hour: '10:00', scans: 2 },
        { hour: '11:00', scans: 5 },
        { hour: '12:00', scans: 14, peak: true },
        { hour: '13:00', scans: 11, peak: true },
        { hour: '14:00', scans: 4 },
        { hour: '15:00', scans: 3 },
        { hour: '16:00', scans: 6 },
        { hour: '17:00', scans: 8 },
        { hour: '18:00', scans: 16, peak: true },
        { hour: '19:00', scans: 19, peak: true },
        { hour: '20:00', scans: 12 },
        { hour: '21:00', scans: 4 },
    ];

    const maxScan = Math.max(...hourlyVisits.map((h) => h.scans));

    return (
        <CreatorLayout activeItem="/creator/analytics">
            <Head title="Analitik Konversi Kasir - FoodFluence" />

            <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
                <header className="mb-8">
                    <h1 className="text-2xl font-bold text-[#0F172A]">Analitik Konversi Kasir & Kinerja Konten</h1>
                    <p className="text-[#475569] text-sm mt-1">
                        Lacak efektivitas video Anda dari penayangan daring hingga kunjungan riil pelanggan di kasir fisik kedai F&B.
                    </p>
                </header>

                {/* 4 Metric KPI Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <Card className="border-[#E2E8F0] shadow-sm rounded-xl">
                        <CardContent className="p-5">
                            <div className="flex justify-between items-start mb-3">
                                <div className="p-2 bg-[#F1F5F9] rounded-lg">
                                    <Eye className="w-5 h-5 text-[#475569]" />
                                </div>
                                <span className="text-[#10B981] text-xs font-semibold">+14% minggu ini</span>
                            </div>
                            <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider block mb-1">
                                Total Video Views
                            </span>
                            <h3 className="text-2xl font-bold text-[#0F172A] tabular-nums">214.500</h3>
                        </CardContent>
                    </Card>

                    <Card className="border-[#E2E8F0] shadow-sm rounded-xl">
                        <CardContent className="p-5">
                            <div className="flex justify-between items-start mb-3">
                                <div className="p-2 bg-[#EFF6FF] rounded-lg">
                                    <MousePointerClick className="w-5 h-5 text-[#2563EB]" />
                                </div>
                                <span className="text-xs text-[#2563EB] font-semibold">CTR 0.66%</span>
                            </div>
                            <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider block mb-1">
                                Klik Tautan Kupon
                            </span>
                            <h3 className="text-2xl font-bold text-[#0F172A] tabular-nums">1.420</h3>
                        </CardContent>
                    </Card>

                    <Card className="border-[#E2E8F0] shadow-sm rounded-xl">
                        <CardContent className="p-5">
                            <div className="flex justify-between items-start mb-3">
                                <div className="p-2 bg-[#FFFBEB] rounded-lg">
                                    <Users className="w-5 h-5 text-[#D97706]" />
                                </div>
                                <span className="text-xs text-[#D97706] font-semibold">Klaim Aktif</span>
                            </div>
                            <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider block mb-1">
                                Kupon Terklaim
                            </span>
                            <h3 className="text-2xl font-bold text-[#0F172A] tabular-nums">112</h3>
                        </CardContent>
                    </Card>

                    <Card className="border-[#059669]/30 shadow-sm rounded-xl bg-gradient-to-b from-white to-[#ECFDF5]/30">
                        <CardContent className="p-5">
                            <div className="flex justify-between items-start mb-3">
                                <div className="p-2 bg-[#ECFDF5] rounded-lg">
                                    <TicketCheck className="w-5 h-5 text-[#059669]" />
                                </div>
                                <Badge className="bg-[#ECFDF5] text-[#059669] text-[10px] font-bold">57.1% Konversi</Badge>
                            </div>
                            <span className="text-xs font-semibold text-[#059669] uppercase tracking-wider block mb-1">
                                Validasi Kasir Fisik
                            </span>
                            <h3 className="text-2xl font-bold text-[#0F172A] tabular-nums">64 Kupon</h3>
                        </CardContent>
                    </Card>
                </div>

                {/* Hourly Walk-In Visits Chart */}
                <Card className="border-[#E2E8F0] shadow-sm rounded-2xl mb-8">
                    <CardContent className="p-6">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-6">
                            <div>
                                <h2 className="text-lg font-bold text-[#0F172A] flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-[#059669]" /> Jam Kunjungan Kasir Pelanggan Terpadat (Offline Walk-In)
                                </h2>
                                <p className="text-xs text-[#475569]">
                                    Data akumulasi pemindaian kupon di kasir berdasarkan jam buka operasional toko.
                                </p>
                            </div>

                            <div className="flex items-center gap-4 text-xs font-semibold">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-3 h-3 bg-[#059669] rounded-sm"></div>
                                    <span>Jam Makan Siang / Malam (Peak Hours)</span>
                                </div>
                            </div>
                        </div>

                        <div className="h-64 flex items-end gap-2 sm:gap-4 pt-8 pb-2 border-b border-[#E2E8F0]">
                            {hourlyVisits.map((item) => {
                                const heightPercent = Math.round((item.scans / maxScan) * 100);
                                return (
                                    <div key={item.hour} className="flex-1 flex flex-col items-center h-full justify-end group">
                                        <span className="text-[10px] font-bold text-[#64748B] opacity-0 group-hover:opacity-100 transition-opacity mb-1 tabular-nums">
                                            {item.scans} scan
                                        </span>
                                        <div
                                            className={`w-full rounded-t-lg transition-all duration-300 ${
                                                item.peak ? 'bg-[#059669] group-hover:bg-[#047857]' : 'bg-[#E2E8F0] group-hover:bg-[#CBD5E1]'
                                            }`}
                                            style={{ height: `${heightPercent}%` }}
                                        />
                                        <span className="text-[10px] text-[#64748B] mt-2 font-mono">
                                            {item.hour}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-4 p-3 bg-[#F8FAFC] rounded-xl flex items-center justify-between text-xs text-[#475569]">
                            <span>
                                💡 <strong className="text-[#0F172A]">Waktu Posting Terbaik:</strong> Jam 11:00 siang dan 17:30 sore memiliki tingkat konversi kasir tertinggi 1 jam setelah video tayang.
                            </span>
                        </div>
                    </CardContent>
                </Card>

                {/* Per-Campaign Performance Table */}
                <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-[#E2E8F0]">
                        <h3 className="font-bold text-[#0F172A]">Performa Tiap Menu & Gerai F&B</h3>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-[#F8FAFC] text-[10px] font-bold text-[#64748B] uppercase tracking-wider border-b border-[#E2E8F0]">
                                    <th className="px-6 py-4">Gerai & Menu Promosi</th>
                                    <th className="px-6 py-4">Platform</th>
                                    <th className="px-6 py-4">Video Views</th>
                                    <th className="px-6 py-4">Klik Kupon</th>
                                    <th className="px-6 py-4">Validasi Kasir</th>
                                    <th className="px-6 py-4">Pendapatan Anda</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#E2E8F0] text-sm">
                                <tr className="hover:bg-[#F8FAFC]/60 transition-colors">
                                    <td className="px-6 py-4 font-semibold text-[#0F172A]">
                                        Kopi Kenangan - Es Kopi Susu Aren
                                    </td>
                                    <td className="px-6 py-4">
                                        <Badge className="bg-[#000000] text-white text-[10px] font-bold">TikTok</Badge>
                                    </td>
                                    <td className="px-6 py-4 tabular-nums">125.400</td>
                                    <td className="px-6 py-4 tabular-nums">840</td>
                                    <td className="px-6 py-4 font-bold text-[#059669] tabular-nums">34 kupon (4.0% kasir)</td>
                                    <td className="px-6 py-4 font-bold text-[#0F172A] tabular-nums">Rp 202.000</td>
                                </tr>
                                <tr className="hover:bg-[#F8FAFC]/60 transition-colors">
                                    <td className="px-6 py-4 font-semibold text-[#0F172A]">
                                        Warung Pak Budi - Sate Ayam Madura
                                    </td>
                                    <td className="px-6 py-4">
                                        <Badge className="bg-[#E1306C] text-white text-[10px] font-bold">Instagram Reels</Badge>
                                    </td>
                                    <td className="px-6 py-4 tabular-nums">89.100</td>
                                    <td className="px-6 py-4 tabular-nums">580</td>
                                    <td className="px-6 py-4 font-bold text-[#059669] tabular-nums">30 kupon (5.1% kasir)</td>
                                    <td className="px-6 py-4 font-bold text-[#0F172A] tabular-nums">Rp 155.000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </CreatorLayout>
    );
}
