import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Store, KeyRound, QrCode, Copy, Check, ShieldAlert, ExternalLink, Save, CheckCircle2 } from 'lucide-react';
import MerchantLayout from '@/layouts/merchant-layout';
import { useState } from 'react';

export default function MerchantSettings() {
    const [copied, setCopied] = useState(false);
    const [saved, setSaved] = useState(false);
    const [outletCode, setOutletCode] = useState('KK-SDR-01');
    const [cashierPin, setCashierPin] = useState('123456');
    const [storeName, setStoreName] = useState('Kopi Kenangan - Sudirman');
    const [storeAddress, setStoreAddress] = useState('Jl. Jend. Sudirman Kav. 21, Jakarta Selatan');
    const [category, setCategory] = useState('Kopi & Minuman Kekinian');
    const [minPurchase, setMinPurchase] = useState('30000');
    const [bankAccount, setBankAccount] = useState('BCA 8291028471 a.n PT Kopi Kenangan');

    const handleCopyCode = () => {
        navigator.clipboard.writeText(outletCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    return (
        <MerchantLayout activeItem="/merchant/settings">
            <Head title="Pengaturan Gerai & PIN Kasir - FoodFluence" />

            <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto">
                <header className="mb-8">
                    <h1 className="text-2xl font-bold text-[#0F172A]">Pengaturan Gerai & Akses Kasir</h1>
                    <p className="text-[#475569] text-sm mt-1">
                        Kelola data kedai F&B Anda, nomor rekening penampung refund, dan akses terminal validasi kasir toko.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left 2 Cols: Form Info Kedai */}
                    <div className="lg:col-span-2 space-y-6">
                        <Card className="border-[#E2E8F0] shadow-sm rounded-2xl">
                            <CardContent className="p-6">
                                <h2 className="text-lg font-bold text-[#0F172A] mb-4 flex items-center gap-2">
                                    <Store className="w-5 h-5 text-[#059669]" /> Profil Usaha F&B
                                </h2>

                                <form onSubmit={handleSave} className="space-y-4">
                                    <div>
                                        <Label htmlFor="storeName" className="text-xs font-semibold text-[#475569] uppercase tracking-wider">
                                            Nama Kedai / Brand Gerai
                                        </Label>
                                        <Input
                                            id="storeName"
                                            value={storeName}
                                            onChange={(e) => setStoreName(e.target.value)}
                                            className="mt-1 h-11"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="category" className="text-xs font-semibold text-[#475569] uppercase tracking-wider">
                                                Kategori Kuliner
                                            </Label>
                                            <Input
                                                id="category"
                                                value={category}
                                                onChange={(e) => setCategory(e.target.value)}
                                                className="mt-1 h-11"
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="minPurchase" className="text-xs font-semibold text-[#475569] uppercase tracking-wider">
                                                Default Syarat Min. Belanja (Rp)
                                            </Label>
                                            <Input
                                                id="minPurchase"
                                                value={minPurchase}
                                                onChange={(e) => setMinPurchase(e.target.value)}
                                                className="mt-1 h-11"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <Label htmlFor="storeAddress" className="text-xs font-semibold text-[#475569] uppercase tracking-wider">
                                            Alamat Fisik Kedai
                                        </Label>
                                        <Input
                                            id="storeAddress"
                                            value={storeAddress}
                                            onChange={(e) => setStoreAddress(e.target.value)}
                                            className="mt-1 h-11"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="bankAccount" className="text-xs font-semibold text-[#475569] uppercase tracking-wider">
                                            Rekening Penampung Auto-Refund Escrow
                                        </Label>
                                        <Input
                                            id="bankAccount"
                                            value={bankAccount}
                                            onChange={(e) => setBankAccount(e.target.value)}
                                            className="mt-1 h-11"
                                        />
                                        <p className="text-[11px] text-[#64748B] mt-1">
                                            Sisa saldo deposit kupon yang tidak terpakai saat kampanye berakhir akan langsung ditransfer ke rekening ini.
                                        </p>
                                    </div>

                                    <div className="pt-2 flex items-center justify-between">
                                        <Button type="submit" className="bg-[#059669] hover:bg-[#047857] rounded-xl h-11 px-6 font-semibold text-sm">
                                            <Save className="w-4 h-4 mr-2" /> Simpan Perubahan Profil
                                        </Button>

                                        {saved && (
                                            <span className="text-xs font-bold text-[#059669] flex items-center gap-1.5 animate-fadeIn">
                                                <CheckCircle2 className="w-4 h-4" /> Berhasil disimpan!
                                            </span>
                                        )}
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Col: Terminal Kasir Access */}
                    <div className="space-y-6">
                        <Card className="border-[#059669]/30 shadow-md rounded-2xl bg-gradient-to-b from-white to-[#ECFDF5]/30">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-base font-bold text-[#0F172A] flex items-center gap-2">
                                        <KeyRound className="w-5 h-5 text-[#059669]" /> Akses Kasir Toko
                                    </h2>
                                    <Badge className="bg-[#ECFDF5] text-[#059669] text-[10px] font-bold">Aktif</Badge>
                                </div>

                                <p className="text-xs text-[#475569] mb-5">
                                    Berikan Kode Gerai dan PIN 6-digit berikut ke staf kasir untuk memvalidasi kupon di browser HP/tablet toko.
                                </p>

                                <div className="space-y-4 mb-6">
                                    <div className="p-3.5 bg-white rounded-xl border border-[#E2E8F0]">
                                        <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block mb-1">
                                            Kode Gerai Kedai
                                        </span>
                                        <div className="flex justify-between items-center">
                                            <span className="font-mono text-xl font-bold text-[#0F172A] tracking-wider">
                                                {outletCode}
                                            </span>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={handleCopyCode}
                                                className="h-8 px-2 text-xs text-[#059669]"
                                            >
                                                {copied ? <Check className="w-4 h-4 text-[#059669]" /> : <Copy className="w-4 h-4" />}
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="p-3.5 bg-white rounded-xl border border-[#E2E8F0]">
                                        <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block mb-1">
                                            PIN Kasir (6-Digit)
                                        </span>
                                        <div className="flex justify-between items-center">
                                            <span className="font-mono text-xl font-bold text-[#0F172A] tracking-widest">
                                                {cashierPin}
                                            </span>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => {
                                                    const nextPin = Math.floor(100000 + Math.random() * 900000).toString();
                                                    setCashierPin(nextPin);
                                                }}
                                                className="h-8 px-2 text-xs text-[#475569] hover:text-[#059669]"
                                            >
                                                Acak PIN
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                <Link href="/cashier/scanner">
                                    <Button className="w-full bg-[#059669] hover:bg-[#047857] rounded-xl h-12 font-bold shadow-sm flex items-center justify-center gap-2">
                                        <QrCode className="w-5 h-5" /> Buka Scanner Kasir Sekarang
                                    </Button>
                                </Link>

                                <div className="mt-4 p-3 bg-white/70 rounded-xl border border-[#E2E8F0] flex items-start gap-2.5 text-xs text-[#475569]">
                                    <ShieldAlert className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                                    <span>Kasir tidak perlu install app apapun. Cukup buka tautan di browser perangkat kasir.</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </MerchantLayout>
    );
}
