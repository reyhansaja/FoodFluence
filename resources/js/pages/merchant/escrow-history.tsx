import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, ArrowDownLeft, ArrowUpRight, RefreshCw, Lock, CheckCircle2, Wallet, Download } from 'lucide-react';
import MerchantLayout from '@/layouts/merchant-layout';

export default function MerchantEscrowHistory() {
    const transactions = [
        {
            id: 'ESC-20241126-001',
            date: '26 Nov 2026, 14:30 WIB',
            campaign: 'Promo Es Kopi Susu Aren (@andi.kuliner)',
            type: 'DP_RELEASE',
            typeLabel: 'Pencairan Base DP Kreator',
            amount: -100000,
            status: 'COMPLETED',
            channel: 'Sub-Account Escrow BCA',
            note: 'Video promosi TikTok terverifikasi tayang',
        },
        {
            id: 'ESC-20241126-002',
            date: '26 Nov 2026, 10:15 WIB',
            campaign: 'Deposit Awal: Avocado Coffee (@rina.foodie)',
            type: 'DEPOSIT_IN',
            typeLabel: 'Deposit Dana Kampanye Baru',
            amount: 210000,
            status: 'ESCROW_HELD',
            channel: 'QRIS Dinamis Midtrans',
            note: 'MOU disetujui, dana dikunci di escrow',
        },
        {
            id: 'ESC-20241125-018',
            date: '25 Nov 2026, 21:00 WIB',
            campaign: 'Promo Es Kopi Susu Aren (@andi.kuliner)',
            type: 'COMMISSION_PAY',
            typeLabel: 'Bagi Hasil 14 Kupon Kasir',
            amount: -42000,
            status: 'COMPLETED',
            channel: 'Escrow Ledger Otomatis',
            note: '14 x Rp3.000 dari scan kasir fisik',
        },
        {
            id: 'ESC-20241120-004',
            date: '20 Nov 2026, 23:59 WIB',
            campaign: 'Promo Croissant Coklat (Kedaluwarsa)',
            type: 'AUTO_REFUND',
            typeLabel: 'Auto-Refund Kuota Tidak Terpakai',
            amount: 180000,
            status: 'REFUNDED',
            channel: 'Rekening Bank BCA Kedai',
            note: '60 kupon sisa dikembalikan otomatis ke rekening toko',
        },
    ];

    return (
        <MerchantLayout activeItem="/merchant/escrow-history">
            <Head title="Riwayat Escrow & Refund - FoodFluence" />

            <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
                <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <h1 className="text-2xl font-bold text-[#0F172A]">Riwayat Escrow & Pengembalian Dana</h1>
                            <Badge className="bg-[#ECFDF5] text-[#059669] border-[#059669]/20 text-[10px] font-bold">
                                Terlindungi Bank Indonesia
                            </Badge>
                        </div>
                        <p className="text-[#475569] text-sm">
                            Pencatatan transparan mutasi dana deposit kampanye, pencairan DP kreator, dan auto-refund saldo.
                        </p>
                    </div>

                    <Link href="/merchant/ai-calculator">
                        <Button className="bg-[#059669] hover:bg-[#047857] rounded-xl h-11 px-6 shadow-sm font-semibold text-sm">
                            <Wallet className="w-4 h-4 mr-2" /> Buat Deposit Kampanye Baru
                        </Button>
                    </Link>
                </header>

                {/* Top Metrics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card className="border-[#E2E8F0] shadow-sm rounded-2xl bg-white">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-3">
                                <div className="p-2.5 bg-[#ECFDF5] rounded-xl text-[#059669]">
                                    <Lock className="w-5 h-5" />
                                </div>
                                <Badge className="bg-[#ECFDF5] text-[#059669] text-[10px] font-bold">Aktif Aman</Badge>
                            </div>
                            <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider block mb-1">
                                Saldo Deposit Escrow Aktif
                            </span>
                            <h2 className="text-2xl font-bold text-[#0F172A] tabular-nums">Rp 450.000</h2>
                            <p className="text-xs text-[#64748B] mt-2">Terkunci untuk 2 kampanye aktif F&B</p>
                        </CardContent>
                    </Card>

                    <Card className="border-[#E2E8F0] shadow-sm rounded-2xl bg-white">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-3">
                                <div className="p-2.5 bg-[#FFFBEB] rounded-xl text-[#D97706]">
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                                <Badge className="bg-[#FFFBEB] text-[#D97706] text-[10px] font-bold">Performa</Badge>
                            </div>
                            <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider block mb-1">
                                Total Komisi Terbayar ke Kreator
                            </span>
                            <h2 className="text-2xl font-bold text-[#0F172A] tabular-nums">Rp 102.000</h2>
                            <p className="text-xs text-[#64748B] mt-2">Dari 34 kupon valid yang terpakai di kasir</p>
                        </CardContent>
                    </Card>

                    <Card className="border-[#E2E8F0] shadow-sm rounded-2xl bg-white">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-3">
                                <div className="p-2.5 bg-[#EFF6FF] rounded-xl text-[#2563EB]">
                                    <RefreshCw className="w-5 h-5" />
                                </div>
                                <Badge className="bg-[#EFF6FF] text-[#2563EB] text-[10px] font-bold">Anti-Boncos</Badge>
                            </div>
                            <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider block mb-1">
                                Total Auto-Refund Diterima
                            </span>
                            <h2 className="text-2xl font-bold text-[#0F172A] tabular-nums">Rp 180.000</h2>
                            <p className="text-xs text-[#64748B] mt-2">Otomatis kembali ke rekening kedai F&B</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Info Alert Box */}
                <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] flex items-center justify-between gap-4 mb-8">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-[#ECFDF5] rounded-xl text-[#059669]">
                            <ShieldCheck className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-[#0F172A]">Jaminan Keamanan Finansial FoodFluence</p>
                            <p className="text-xs text-[#475569]">
                                Seluruh dana kolaborasi dikelola via rekening escrow mitra payment gateway resmi. DP hanya cair setelah video tayang, dan sisa saldo kupon tak terpakai 100% kembali tanpa biaya pembatalan.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Ledger Table */}
                <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-[#E2E8F0] flex justify-between items-center">
                        <h3 className="font-bold text-[#0F172A]">Buku Besar Mutasi Escrow (Ledger)</h3>
                        <Button variant="outline" size="sm" className="rounded-xl h-9 text-xs font-semibold border-[#E2E8F0]">
                            <Download className="w-3.5 h-3.5 mr-1" /> Unduh Laporan CSV
                        </Button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-[#F8FAFC] text-[10px] font-bold text-[#64748B] uppercase tracking-wider border-b border-[#E2E8F0]">
                                    <th className="px-6 py-4">ID & Waktu</th>
                                    <th className="px-6 py-4">Kampanye & Keterangan</th>
                                    <th className="px-6 py-4">Tipe Mutasi</th>
                                    <th className="px-6 py-4">Kanal Pembayaran</th>
                                    <th className="px-6 py-4">Nominal</th>
                                    <th className="px-6 py-4">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#E2E8F0] text-sm">
                                {transactions.map((t) => (
                                    <tr key={t.id} className="hover:bg-[#F8FAFC]/60 transition-colors">
                                        <td className="px-6 py-4">
                                            <p className="font-mono font-bold text-xs text-[#0F172A]">{t.id}</p>
                                            <p className="text-[11px] text-[#64748B]">{t.date}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="font-semibold text-[#0F172A]">{t.campaign}</p>
                                            <p className="text-xs text-[#64748B]">{t.note}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-xs font-semibold text-[#0F172A]">{t.typeLabel}</span>
                                        </td>
                                        <td className="px-6 py-4 text-xs text-[#64748B]">
                                            {t.channel}
                                        </td>
                                        <td className="px-6 py-4 font-bold tabular-nums">
                                            <span className={t.amount < 0 ? 'text-[#EF4444]' : 'text-[#059669]'}>
                                                {t.amount < 0 ? '-' : '+'}Rp {Math.abs(t.amount).toLocaleString('id-ID')}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Badge className={`text-[10px] font-bold px-2 py-0.5 ${
                                                t.status === 'COMPLETED'
                                                    ? 'bg-[#ECFDF5] text-[#059669]'
                                                    : t.status === 'ESCROW_HELD'
                                                    ? 'bg-[#FFFBEB] text-[#D97706]'
                                                    : 'bg-[#EFF6FF] text-[#2563EB]'
                                            }`}>
                                                {t.status}
                                            </Badge>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </MerchantLayout>
    );
}
