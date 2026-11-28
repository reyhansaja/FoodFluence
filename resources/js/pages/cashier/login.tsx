import { Head, Link, router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { QrCode, Camera, CheckCircle, AlertTriangle } from 'lucide-react';
import { useState } from 'react';

export default function CashierLogin() {
    const [pin, setPin] = useState(['1', '2', '3', '4', '5', '6']);
    const [outletCode, setOutletCode] = useState('KK-SDR-01');

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-4">
            <Head title="Login Kasir - FoodFluence" />
            
            <Card className="w-full max-w-md p-8 rounded-3xl border border-[#E2E8F0] shadow-xl bg-white">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 mx-auto mb-4 bg-[#ECFDF5] rounded-2xl flex items-center justify-center">
                        <QrCode className="w-8 h-8 text-[#059669]" />
                    </div>
                    <h1 className="text-2xl font-bold text-[#0F172A]">Login Kasir</h1>
                    <p className="text-[#475569] text-xs mt-1">Masukkan Kode Gerai dan PIN 6-Digit</p>
                </div>
                
                <div className="space-y-6">
                    <div>
                        <Label className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">Kode Gerai</Label>
                        <Input 
                            value={outletCode}
                            onChange={(e) => setOutletCode(e.target.value)}
                            placeholder="Kode Gerai"
                            className="mt-1 h-12 text-center text-xl tracking-widest font-mono font-bold"
                        />
                    </div>
                    
                    <div>
                        <Label className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">PIN Kasir (6-Digit)</Label>
                        <div className="grid grid-cols-6 gap-2 mt-1">
                            {pin.map((_, i) => (
                                <input
                                    key={i}
                                    type="password"
                                    maxLength={1}
                                    value={pin[i]}
                                    onChange={(e) => {
                                        const newPin = [...pin];
                                        newPin[i] = e.target.value;
                                        setPin(newPin);
                                        if (e.target.value && i < 5) {
                                            (document.getElementById(`pin-${i + 1}`) as HTMLInputElement)?.focus();
                                        }
                                    }}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Backspace' && !pin[i] && i > 0) {
                                            (document.getElementById(`pin-${i - 1}`) as HTMLInputElement)?.focus();
                                        }
                                    }}
                                    id={`pin-${i}`}
                                    className="w-full h-14 text-center text-2xl font-mono border-2 border-[#E2E8F0] rounded-xl focus:border-[#059669] focus:outline-none"
                                    inputMode="numeric"
                                />
                            ))}
                        </div>
                    </div>
                    
                    <Button 
                        className="w-full h-13 text-base font-bold bg-[#059669] hover:bg-[#047857] rounded-xl shadow-sm"
                        onClick={() => router.visit('/cashier/scanner')}
                    >
                        Masuk ke Scanner
                    </Button>

                    <div className="text-center pt-2">
                        <Link href="/login" className="text-xs text-[#64748B] hover:text-[#059669]">
                            ← Kembali ke Halaman Login Utama
                        </Link>
                    </div>
                </div>
            </Card>
        </div>
    );
}