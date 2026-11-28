import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Wallet, DollarSign, ArrowUpRight, CheckCircle2, Clock, ShieldCheck, Download, AlertCircle } from 'lucide-react';
import CreatorLayout from '@/layouts/creator-layout';
import { useState } from 'react';

export default function CreatorWithdrawals() {
    const [amount, setAmount] = useState('245000');
    const [payoutMethod, setPayoutMethod] = useState('bca');
    const [accountNumber, setAccountNumber] = useState('5220918231');
    const [isProcessing, setIsProcessing] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const withdrawals = [
        {
            id: 'WD-20241126-003',
            date: '26 Nov 2026, 11:20 WIB',
            method: 'Bank BCA (5220918231)',
            amount: 200000,
            status: 'COMPLETED',
            statusLabel: 'Berhasil Masuk Rekening',
            fee: 0,
        },
        {
            id: 'WD-20241118-012',
            date: '18 Nov 2026, 16:45 WIB',
            method: 'GoPay (081299887766)',
            amount: 350000,
            status: 'COMPLETED',
            statusLabel: 'Berhasil Masuk Saldo',
            fee: 0,
        },
        {
            id: 'WD-20241110-008',
            date: '10 Nov 2026, 09:10 WIB',
            method: 'Bank BCA (5220918231)',
            amount: 900000,
            status: 'COMPLETED',
            statusLabel: 'Berhasil Masuk Rekening',
            fee: 0,
        },
    ];

    const handleWithdraw = (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);
        setTimeout(() => {
            setIsProcessing(false);
            setSuccessMessage(`Penarikan dana Rp ${Number(amount).toLocaleString('id-ID')} berhasil diproses instan ke ${payoutMethod.toUpperCase()}!`);
            setTimeout(() => setSuccessMessage(null), 5000);
        }, 1200);
    };

    return (
        <CreatorLayout activeItem="/creator/withdrawals">
            <Head title="Dompet & Penarikan Saldo - FoodFluence" />

            <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto">
                <header className="mb-8">
                    <h1 className="text-2xl font-bold text-[#0F172A]">Dompet Kreator & Penarikan Saldo</h1>
                    <p className="text-[#475569] text-sm mt-1">
                        Tarik komisi scan kasir dan Base DP secara instan ke rekening bank atau e-wallet tanpa biaya admin tersembunyi.
                    </p>
                </header>

                {/* Top Metrics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card className="border-[#059669]/30 shadow-sm rounded-2xl bg-gradient-to-b from-white to-[#ECFDF5]/30">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-3">
                                <div className="p-2.5 bg-[#ECFDF5] rounded-xl text-[#059669]">
                                    <Wallet className="w-5 h-5" />
                                </div>
                                <Badge className="bg-[#ECFDF5] text-[#059669] text-[10px] font-bold">Siap Ditarik</Badge>
                            </div>
                            <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider block mb-1">
                                Saldo Dompet Tersedia
                            </span>
                            <h2 className="text-2xl font-bold text-[#0F172A] tabular-nums">Rp 245.000</h2>
                            <p className="text-xs text-[#059669] font-semibold mt-2">Dapat dicairkan kapan saja</p>
                        </CardContent>
                    </Card>

                    <Card className="border-[#E2E8F0] shadow-sm rounded-2xl bg-white">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-3">
                                <div className="p-2.5 bg-[#FFFBEB] rounded-xl text-[#D97706]">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <Badge className="bg-[#FFFBEB] text-[#D97706] text-[10px] font-bold">Pending Escrow</Badge>
                            </div>
                            <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider block mb-1">
                                Dana Tertahan di Escrow
                            </span>
                            <h2 className="text-2xl font-bold text-[#0F172A] tabular-nums">Rp 100.000</h2>
                            <p className="text-xs text-[#64748B] mt-2">Cair setelah upload link video tayang</p>
                        </CardContent>
                    </Card>

                    <Card className="border-[#E2E8F0] shadow-sm rounded-2xl bg-white">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-3">
                                <div className="p-2.5 bg-[#EFF6FF] rounded-xl text-[#2563EB]">
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                                <Badge className="bg-[#EFF6FF] text-[#2563EB] text-[10px] font-bold">Total Akumulasi</Badge>
                            </div>
                            <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider block mb-1">
                                Total Pendapatan Diterima
                            </span>
                            <h2 className="text-2xl font-bold text-[#0F172A] tabular-nums">Rp 1.450.000</h2>
                            <p className="text-xs text-[#64748B] mt-2">Dari 4 kolaborasi F&B selesai</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Form Penarikan */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    <Card className="lg:col-span-2 border-[#E2E8F0] shadow-sm rounded-2xl">
                        <CardContent className="p-6">
                            <h2 className="text-lg font-bold text-[#0F172A] mb-4 flex items-center gap-2">
                                <DollarSign className="w-5 h-5 text-[#059669]" /> Formulir Pencairan Dana Instan
                            </h2>

                            <form onSubmit={handleWithdraw} className="space-y-4">
                                <div>
                                    <Label className="text-xs font-semibold text-[#475569] uppercase tracking-wider">
                                        Nominal Penarikan (Rp)
                                    </Label>
                                    <Input
                                        type="number"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        max={245000}
                                        min={10000}
                                        className="h-11 mt-1 text-lg font-bold font-mono"
                                    />
                                    <div className="flex gap-2 mt-2">
                                        {['50000', '100000', '200000', '245000'].map((val) => (
                                            <button
                                                key={val}
                                                type="button"
                                                onClick={() => setAmount(val)}
                                                className="px-2.5 py-1 text-xs font-semibold bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#475569] rounded-lg transition-colors"
                                            >
                                                {val === '245000' ? 'Tarik Semua' : `Rp ${Number(val) / 1000}K`}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <Label className="text-xs font-semibold text-[#475569] uppercase tracking-wider">
                                            Metode Pencairan
                                        </Label>
                                        <Select value={payoutMethod} onValueChange={setPayoutMethod}>
                                            <SelectTrigger className="h-11 mt-1">
                                                <SelectValue placeholder="Pilih Metode" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="bca">Bank BCA</SelectItem>
                                                <SelectItem value="mandiri">Bank Mandiri</SelectItem>
                                                <SelectItem value="bri">Bank BRI</SelectItem>
                                                <SelectItem value="gopay">GoPay</SelectItem>
                                                <SelectItem value="ovo">OVO</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div>
                                        <Label className="text-xs font-semibold text-[#475569] uppercase tracking-wider">
                                            Nomor Rekening / E-Wallet
                                        </Label>
                                        <Input
                                            value={accountNumber}
                                            onChange={(e) => setAccountNumber(e.target.value)}
                                            className="h-11 mt-1 font-mono"
                                        />
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <Button
                                        type="submit"
                                        disabled={isProcessing || Number(amount) <= 0 || Number(amount) > 245000}
                                        className="w-full bg-[#059669] hover:bg-[#047857] h-12 rounded-xl font-bold text-sm shadow-sm"
                                    >
                                        {isProcessing ? 'Memproses Pencairan...' : 'Tarik Saldo Sekarang (Bebas Biaya Admin)'}
                                    </Button>
                                </div>

                                {successMessage && (
                                    <div className="p-4 bg-[#ECFDF5] border border-[#059669]/30 rounded-xl text-xs font-bold text-[#059669] flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 shrink-0" />
                                        <span>{successMessage}</span>
                                    </div>
                                )}
                            </form>
                        </CardContent>
                    </Card>

                    {/* Right: Info Box */}
                    <div className="space-y-4">
                        <Card className="border-[#E2E8F0] shadow-sm rounded-2xl bg-[#F8FAFC]">
                            <CardContent className="p-6 space-y-3">
                                <div className="flex items-center gap-2 text-sm font-bold text-[#0F172A]">
                                    <ShieldCheck className="w-5 h-5 text-[#059669]" /> Instant Disbursement
                                </div>
                                <p className="text-xs text-[#475569]">
                                    Pencairan dana langsung diproses melalui gerbang pembayaran resmi mitra perbankan BI. Rata-rata dana masuk ke rekening/e-wallet dalam kurun waktu 1-5 menit.
                                </p>
                                <div className="pt-2 border-t border-[#E2E8F0] text-xs text-[#64748B] space-y-1">
                                    <p>• Minimal penarikan: Rp 10.000</p>
                                    <p>• Biaya admin transfer: Rp 0 (Ditanggung FoodFluence)</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* History Table */}
                <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-[#E2E8F0] flex justify-between items-center">
                        <h3 className="font-bold text-[#0F172A]">Riwayat Pencairan Saldo</h3>
                        <Button variant="outline" size="sm" className="rounded-xl h-9 text-xs font-semibold border-[#E2E8F0]">
                            <Download className="w-3.5 h-3.5 mr-1" /> Unduh Mutasi
                        </Button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-[#F8FAFC] text-[10px] font-bold text-[#64748B] uppercase tracking-wider border-b border-[#E2E8F0]">
                                    <th className="px-6 py-4">ID Transaksi & Waktu</th>
                                    <th className="px-6 py-4">Metode Tujuan</th>
                                    <th className="px-6 py-4">Nominal</th>
                                    <th className="px-6 py-4">Biaya Admin</th>
                                    <th className="px-6 py-4">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#E2E8F0] text-sm">
                                {withdrawals.map((w) => (
                                    <tr key={w.id} className="hover:bg-[#F8FAFC]/60 transition-colors">
                                        <td className="px-6 py-4">
                                            <p className="font-mono font-bold text-xs text-[#0F172A]">{w.id}</p>
                                            <p className="text-[11px] text-[#64748B]">{w.date}</p>
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-[#0F172A]">
                                            {w.method}
                                        </td>
                                        <td className="px-6 py-4 font-bold text-[#059669] tabular-nums">
                                            Rp {w.amount.toLocaleString('id-ID')}
                                        </td>
                                        <td className="px-6 py-4 text-xs text-[#64748B]">
                                            Rp 0 (Gratis)
                                        </td>
                                        <td className="px-6 py-4">
                                            <Badge className="bg-[#ECFDF5] text-[#059669] text-[10px] font-bold px-2 py-0.5">
                                                {w.statusLabel}
                                            </Badge>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </CreatorLayout>
    );
}
