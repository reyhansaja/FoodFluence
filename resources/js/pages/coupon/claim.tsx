import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { QrCode, Timer, MapPin, Sparkles, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useState, useEffect } from 'react';

export default function ClaimCoupon() {
    const [claimed, setClaimed] = useState<boolean>(false);
    const [secondsLeft, setSecondsLeft] = useState<number>(7185); // 01:59:45

    useEffect(() => {
        if (!claimed) return;
        const interval = setInterval(() => {
            setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, [claimed]);

    const formatTime = (secs: number) => {
        const h = Math.floor(secs / 3600).toString().padStart(2, '0');
        const m = Math.floor((secs % 3600) / 60).toString().padStart(2, '0');
        const s = (secs % 60).toString().padStart(2, '0');
        return `${h}:${m}:${s}`;
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-4">
            <Head title="Klaim Kupon Diskon - FoodFluence" />

            <div className="w-full max-w-sm">
                {!claimed ? (
                    /* State 1: Belum Diklaim */
                    <Card className="rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-xl bg-white">
                        <div className="h-44 bg-gradient-to-br from-[#059669] to-[#047857] p-6 flex flex-col justify-between text-white relative">
                            <Badge className="bg-white/20 text-white border-0 w-fit text-[11px] font-bold">
                                Rekomendasi @andi.kuliner
                            </Badge>
                            <div>
                                <p className="text-xs uppercase tracking-wider text-white/80 font-semibold">Kopi Kenangan - Sudirman</p>
                                <h1 className="text-2xl font-black leading-tight">Diskon 15% Menu Favorit</h1>
                            </div>
                        </div>

                        <CardContent className="p-6 text-center space-y-5">
                            <div className="p-3 bg-[#ECFDF5] rounded-2xl border border-[#059669]/20 text-left">
                                <p className="text-xs font-bold text-[#059669] uppercase tracking-wider">Syarat & Ketentuan Promosi</p>
                                <p className="text-xs text-[#0F172A] mt-1 font-semibold">• Min. Pembelian Rp 30.000 di kasir</p>
                                <p className="text-xs text-[#475569]">• Berlaku untuk pembelian langsung (dine-in / take-away)</p>
                            </div>

                            <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                                <span className="text-xs text-[#64748B]">Sisa Kuota Kupon Promosi:</span>
                                <p className="text-lg font-bold text-[#EA580C] tabular-nums mt-0.5">Tersisa 16 dari 50 Kupon</p>
                            </div>

                            <Button
                                onClick={() => setClaimed(true)}
                                className="w-full h-14 bg-[#EA580C] hover:bg-[#C2410C] text-white rounded-2xl font-bold text-base shadow-lg shadow-[#EA580C]/20"
                            >
                                <Sparkles className="w-5 h-5 mr-2" /> Klaim Kupon QR Sekarang
                            </Button>

                            <p className="text-[11px] text-[#94A3B8]">
                                Tiket QR dinamis sekali pakai akan langsung aktif dan berlaku selama 2 jam setelah diklaim.
                            </p>
                        </CardContent>
                    </Card>
                ) : (
                    /* State 2: Tiket QR Dinamis Aktif (Perforated Ticket Look) */
                    <div className="bg-white rounded-3xl border-2 border-[#059669] shadow-2xl overflow-hidden relative animate-fadeIn">
                        {/* Ticket Header */}
                        <div className="bg-[#ECFDF5] p-5 text-center border-b-2 border-dashed border-[#059669]/30 relative">
                            {/* Semi-circle notches for ticket cutout effect */}
                            <div className="w-6 h-6 bg-[#F8FAFC] rounded-full absolute -left-3 -bottom-3 border-r-2 border-[#059669]"></div>
                            <div className="w-6 h-6 bg-[#F8FAFC] rounded-full absolute -right-3 -bottom-3 border-l-2 border-[#059669]"></div>

                            <Badge className="bg-[#059669] text-white text-[10px] font-bold uppercase mb-2">
                                Kupon QR Sekali Pakai Aktif
                            </Badge>
                            <h2 className="text-xl font-black text-[#0F172A]">Diskon 15% Es Kopi Susu</h2>
                            <p className="text-xs text-[#059669] font-bold mt-0.5">Kopi Kenangan - Sudirman</p>
                        </div>

                        {/* Ticket QR Body */}
                        <div className="p-6 text-center space-y-4">
                            <div className="p-4 bg-white rounded-2xl border-2 border-[#E2E8F0] shadow-inner inline-block">
                                <QrCode className="w-52 h-52 text-[#0F172A]" />
                            </div>

                            <div className="p-2.5 bg-[#FFFBEB] rounded-xl border border-[#F59E0B]/30 flex items-center justify-center gap-2 text-[#D97706] font-bold text-base">
                                <Timer className="w-5 h-5 animate-pulse" />
                                <span className="tabular-nums font-mono">{formatTime(secondsLeft)}</span>
                            </div>

                            <div>
                                <span className="text-[10px] text-[#64748B] uppercase font-bold tracking-wider block">
                                    Kode Token Cadangan Kasir
                                </span>
                                <p className="font-mono text-base font-bold text-[#0F172A] tracking-wider mt-0.5">
                                    FF-KOPISUSU-9821
                                </p>
                            </div>

                            <div className="pt-2 space-y-2">
                                <a
                                    href="https://maps.google.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block"
                                >
                                    <Button variant="outline" className="w-full h-11 rounded-xl text-xs font-bold border-[#E2E8F0]">
                                        <MapPin className="w-4 h-4 mr-2 text-[#EA580C]" /> Buka Lokasi Kedai di Google Maps
                                    </Button>
                                </a>

                                <Button
                                    variant="ghost"
                                    onClick={() => setClaimed(false)}
                                    className="w-full text-xs text-[#64748B] hover:text-[#0F172A]"
                                >
                                    Reset Simulasi Kupon
                                </Button>
                            </div>

                            <p className="text-[10px] text-[#94A3B8]">
                                Tunjukkan layar ini langsung ke kasir toko saat pembayaran. Kupon otomatis hangus setelah 1x pemindaian.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
