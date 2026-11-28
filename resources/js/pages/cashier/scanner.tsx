import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import {
    QrCode,
    Camera,
    CheckCircle,
    AlertTriangle,
    CheckCircle2,
    Video,
    VideoOff,
    RefreshCw,
    ShieldAlert,
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function CashierScanner() {
    const [step, setStep] = useState<'login' | 'scanner' | 'result' | 'success'>('login');
    const [pin, setPin] = useState(['1', '2', '3', '4', '5', '6']);
    const [outletCode, setOutletCode] = useState('KK-SDR-01');
    const [receiptNumber, setReceiptNumber] = useState('STR-20241126-089');
    const [totalBill, setTotalBill] = useState('42000');
    const [manualCode, setManualCode] = useState('');

    // Camera states
    const [cameraActive, setCameraActive] = useState<boolean>(false);
    const [cameraError, setCameraError] = useState<string | null>(null);
    const [hasBarcodeDetector, setHasBarcodeDetector] = useState<boolean>(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const streamRef = useRef<MediaStream | null>(null);

    // Check BarcodeDetector support
    useEffect(() => {
        if (typeof window !== 'undefined' && 'BarcodeDetector' in window) {
            setHasBarcodeDetector(true);
        }
    }, []);

    const startCamera = async () => {
        try {
            setCameraError(null);
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                setCameraError('Browser ini tidak mendukung akses kamera langsung. Gunakan input kode token di bawah.');
                return;
            }

            const stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: { ideal: 'environment' }, // Back camera on mobile/tablet
                    width: { ideal: 1280 },
                    height: { ideal: 720 },
                },
            });

            streamRef.current = stream;
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                await videoRef.current.play();
                setCameraActive(true);
            }
        } catch (err: any) {
            console.error('Camera access error:', err);
            setCameraActive(false);
            if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
                setCameraError('Izin akses kamera ditolak. Silakan izinkan browser mengakses kamera, atau masukkan kode token manual.');
            } else if (err.name === 'NotFoundError' || err.name === 'DevicesNotFoundError') {
                setCameraError('Perangkat kamera tidak ditemukan pada komputer/HP ini.');
            } else {
                setCameraError(`Gagal membuka kamera: ${err.message || 'Terjadi kesalahan'}. Gunakan input kode token.`);
            }
        }
    };

    const stopCamera = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach((track) => track.stop());
            streamRef.current = null;
        }
        if (videoRef.current) {
            videoRef.current.srcObject = null;
        }
        setCameraActive(false);
    };

    // Auto start camera when entering 'scanner' step
    useEffect(() => {
        if (step === 'scanner') {
            startCamera();
        } else {
            stopCamera();
        }
        return () => {
            stopCamera();
        };
    }, [step]);

    // Live continuous QR detection using native BarcodeDetector if supported
    useEffect(() => {
        if (!cameraActive || !videoRef.current || !hasBarcodeDetector) return;

        let animationFrameId: number;
        let isDetecting = false;

        // @ts-ignore
        const barcodeDetector = new window.BarcodeDetector({ formats: ['qr_code'] });

        const scanFrame = async () => {
            if (
                videoRef.current &&
                videoRef.current.readyState === videoRef.current.HAVE_ENOUGH_DATA &&
                !isDetecting
            ) {
                isDetecting = true;
                try {
                    const barcodes = await barcodeDetector.detect(videoRef.current);
                    if (barcodes && barcodes.length > 0) {
                        const detectedValue = barcodes[0].rawValue;
                        console.log('QR Code terdeteksi:', detectedValue);
                        stopCamera();
                        setStep('result');
                        return;
                    }
                } catch (e) {
                    // Ignore frame detection errors
                } finally {
                    isDetecting = false;
                }
            }
            animationFrameId = requestAnimationFrame(scanFrame);
        };

        animationFrameId = requestAnimationFrame(scanFrame);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [cameraActive, hasBarcodeDetector]);

    const handleConfirmRedemption = () => {
        setStep('success');
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-4 text-[#0F172A]">
            <Head title="Terminal Kasir QR - FoodFluence" />

            {/* Step 1: Login Kasir */}
            {step === 'login' && (
                <Card className="w-full max-w-md p-8 rounded-3xl border border-[#E2E8F0] shadow-xl bg-white">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 mx-auto mb-4 bg-[#ECFDF5] rounded-2xl flex items-center justify-center text-[#059669]">
                            <QrCode className="w-9 h-9" />
                        </div>
                        <h1 className="text-2xl font-bold text-[#0F172A]">Terminal Validasi Kasir</h1>
                        <p className="text-[#475569] text-xs mt-1">Masukkan Kode Gerai dan PIN 6-Digit Staf</p>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <Label className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">
                                Kode Gerai Kedai F&B
                            </Label>
                            <Input
                                value={outletCode}
                                onChange={(e) => setOutletCode(e.target.value)}
                                placeholder="KK-SDR-01"
                                className="mt-1 h-12 text-center text-xl tracking-widest font-mono font-bold"
                            />
                        </div>

                        <div>
                            <Label className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">
                                PIN Kasir (6-Digit)
                            </Label>
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
                            onClick={() => setStep('scanner')}
                        >
                            Masuk ke Scanner Kamera
                        </Button>

                        <div className="text-center pt-2">
                            <Link href="/merchant/dashboard" className="text-xs text-[#64748B] hover:text-[#059669]">
                                ← Kembali ke Dasbor Pemilik Gerai
                            </Link>
                        </div>
                    </div>
                </Card>
            )}

            {/* Step 2: Scanner Kamera & Input Manual */}
            {step === 'scanner' && (
                <Card className="w-full max-w-lg p-6 rounded-3xl border border-[#E2E8F0] shadow-xl bg-white">
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <h2 className="font-bold text-lg text-[#0F172A]">Scan Kupon QR Pelanggan</h2>
                            <p className="text-xs text-[#475569]">Arahkan kamera ke kode QR di layar HP pelanggan</p>
                        </div>
                        <span className="text-xs font-mono font-bold bg-[#ECFDF5] text-[#059669] px-2.5 py-1 rounded-lg border border-[#059669]/20">
                            {outletCode}
                        </span>
                    </div>

                    {/* Camera Viewport / Live Stream */}
                    <div className="aspect-video bg-black rounded-2xl mb-4 relative overflow-hidden flex items-center justify-center shadow-inner">
                        <video
                            ref={videoRef}
                            autoPlay
                            playsInline
                            muted
                            className={`w-full h-full object-cover transition-opacity duration-300 ${
                                cameraActive ? 'opacity-100' : 'opacity-0'
                            }`}
                        />

                        {/* Fallback when camera is loading or stopped */}
                        {!cameraActive && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white/70 p-4 text-center bg-zinc-900">
                                <Camera className="w-12 h-12 mb-2 text-white/50 animate-pulse" />
                                <p className="text-xs font-medium">
                                    {cameraError ? cameraError : 'Sedang menghubungkan ke kamera...'}
                                </p>
                                <Button
                                    size="sm"
                                    onClick={startCamera}
                                    className="mt-3 bg-[#059669] hover:bg-[#047857] text-xs font-bold rounded-xl h-9 px-4"
                                >
                                    <Video className="w-3.5 h-3.5 mr-1.5" /> Buka Akses Kamera
                                </Button>
                            </div>
                        )}

                        {/* High-contrast Green Viewfinder Corners */}
                        {cameraActive && (
                            <div className="absolute inset-6 pointer-events-none">
                                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#059669] rounded-tl-lg shadow-sm"></div>
                                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#059669] rounded-tr-lg shadow-sm"></div>
                                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#059669] rounded-bl-lg shadow-sm"></div>
                                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#059669] rounded-br-lg shadow-sm"></div>

                                {/* Center Target Line animation */}
                                <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 h-0.5 bg-[#059669]/80 shadow-[0_0_8px_#059669] animate-pulse"></div>
                            </div>
                        )}
                    </div>

                    {/* Camera Control Actions */}
                    <div className="flex items-center justify-between text-xs text-[#64748B] mb-4 px-1">
                        <span className="flex items-center gap-1.5">
                            <span className={`w-2 h-2 rounded-full ${cameraActive ? 'bg-[#10B981] animate-ping' : 'bg-[#EF4444]'}`} />
                            {cameraActive ? 'Kamera Aktif & Memindai...' : 'Kamera Nonaktif'}
                        </span>

                        {cameraActive ? (
                            <button
                                onClick={stopCamera}
                                className="text-xs font-semibold text-[#EF4444] hover:underline flex items-center gap-1"
                            >
                                <VideoOff className="w-3.5 h-3.5" /> Matikan Kamera
                            </button>
                        ) : (
                            <button
                                onClick={startCamera}
                                className="text-xs font-semibold text-[#059669] hover:underline flex items-center gap-1"
                            >
                                <Video className="w-3.5 h-3.5" /> Nyalakan Kamera
                            </button>
                        )}
                    </div>

                    {/* Manual Alphanumeric Token Input */}
                    <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] mb-4 space-y-2">
                        <Label className="block text-xs font-semibold text-[#475569] uppercase tracking-wider">
                            Atau Masukkan Kode Token Cadangan Kasir
                        </Label>
                        <div className="flex gap-2">
                            <Input
                                placeholder="FF-KOPISUSU-9821"
                                value={manualCode}
                                onChange={(e) => setManualCode(e.target.value)}
                                className="text-center tracking-wider font-mono h-11 bg-white font-bold text-sm"
                            />
                            <Button
                                onClick={() => setStep('result')}
                                className="bg-[#059669] hover:bg-[#047857] h-11 px-5 rounded-xl font-bold text-sm shrink-0"
                            >
                                Validasi
                            </Button>
                        </div>
                    </div>

                    <Button
                        variant="outline"
                        className="w-full h-11 rounded-xl text-xs font-bold border-[#059669] text-[#059669] hover:bg-[#ECFDF5]"
                        onClick={() => {
                            stopCamera();
                            setStep('result');
                        }}
                    >
                        ⚡ Simulasi Scan QR Valid Langsung (Testing Cepat)
                    </Button>
                </Card>
            )}

            {/* Step 3: Hasil Validasi & Form Struk */}
            {step === 'result' && (
                <Card className="w-full max-w-md p-6 rounded-3xl border border-[#E2E8F0] shadow-xl bg-white animate-fadeIn">
                    <div className="flex items-center gap-3 p-4 bg-[#ECFDF5] rounded-2xl mb-6 border-2 border-[#059669]">
                        <CheckCircle className="w-9 h-9 text-[#059669] shrink-0" />
                        <div>
                            <p className="font-black text-[#059669] text-lg">KUPON VALID — DISKON 15%</p>
                            <p className="text-xs text-[#0F172A] font-semibold">Menu: Es Kopi Susu Aren (@andi.kuliner)</p>
                            <p className="text-[11px] text-[#475569]">Syarat: Min. Belanja Rp30.000</p>
                        </div>
                    </div>

                    <div className="space-y-4 mb-6">
                        <div>
                            <Label className="text-xs font-semibold text-[#475569] uppercase tracking-wider">
                                Nomor Struk / Nota Toko <span className="text-[#EF4444]">*</span>
                            </Label>
                            <Input
                                value={receiptNumber}
                                onChange={(e) => setReceiptNumber(e.target.value)}
                                placeholder="Contoh: STR-20241126-001"
                                className="mt-1 h-11 font-mono font-semibold"
                            />
                        </div>

                        <div>
                            <Label className="text-xs font-semibold text-[#475569] uppercase tracking-wider">
                                Total Belanja Pelanggan Sebelum Diskon (Rp) <span className="text-[#EF4444]">*</span>
                            </Label>
                            <Input
                                type="number"
                                value={totalBill}
                                onChange={(e) => setTotalBill(e.target.value)}
                                placeholder="35000"
                                className="mt-1 h-11 font-mono font-bold text-lg"
                            />
                            {Number(totalBill) < 30000 && (
                                <p className="text-xs text-[#EF4444] font-semibold mt-1 flex items-center gap-1">
                                    <AlertTriangle className="w-3.5 h-3.5" /> Total belanja belum memenuhi syarat minimal Rp30.000!
                                </p>
                            )}
                        </div>

                        <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] text-xs space-y-1">
                            <div className="flex justify-between">
                                <span className="text-[#64748B]">Potongan Diskon (15%):</span>
                                <span className="font-bold text-[#EF4444]">-Rp {(Number(totalBill) * 0.15).toLocaleString('id-ID')}</span>
                            </div>
                            <div className="flex justify-between font-bold text-[#0F172A] pt-1 border-t border-[#E2E8F0]">
                                <span>Tagihan Akhir Pelanggan:</span>
                                <span>Rp {(Number(totalBill) * 0.85).toLocaleString('id-ID')}</span>
                            </div>
                        </div>
                    </div>

                    <Button
                        disabled={Number(totalBill) < 30000 || !receiptNumber}
                        className="w-full h-13 text-base font-bold bg-[#059669] hover:bg-[#047857] rounded-xl shadow-sm"
                        onClick={handleConfirmRedemption}
                    >
                        Konfirmasi Pemakaian Kupon
                    </Button>

                    <Button
                        variant="ghost"
                        className="w-full mt-3 text-xs text-[#64748B]"
                        onClick={() => setStep('scanner')}
                    >
                        Batal & Kembali ke Scanner
                    </Button>
                </Card>
            )}

            {/* Step 4: Sukses Validasi */}
            {step === 'success' && (
                <Card className="w-full max-w-md p-8 rounded-3xl border border-[#E2E8F0] shadow-xl bg-white text-center animate-fadeIn">
                    <div className="w-20 h-20 mx-auto mb-4 bg-[#ECFDF5] rounded-full flex items-center justify-center text-[#059669] animate-bounce">
                        <CheckCircle2 className="w-12 h-12" />
                    </div>

                    <h2 className="text-2xl font-black text-[#0F172A] mb-1">Kupon Berhasil Divalidasi!</h2>
                    <p className="text-xs text-[#475569] mb-6">
                        Struk <span className="font-mono font-bold text-[#0F172A]">{receiptNumber}</span> tercatat. Kuota berkurang 1 dan komisi Rp3.000 dialokasikan ke kreator.
                    </p>

                    <div className="space-y-3">
                        <Button
                            className="w-full h-12 text-sm font-bold bg-[#059669] hover:bg-[#047857] rounded-xl shadow-sm"
                            onClick={() => {
                                setStep('scanner');
                                setReceiptNumber(`STR-20241126-0${Math.floor(100 + Math.random() * 900)}`);
                            }}
                        >
                            Scan Pelanggan Berikutnya
                        </Button>

                        <Link href="/merchant/dashboard" className="block">
                            <Button variant="outline" className="w-full h-11 text-xs font-semibold rounded-xl border-[#E2E8F0]">
                                Kembali ke Dasbor Gerai
                            </Button>
                        </Link>
                    </div>
                </Card>
            )}
        </div>
    );
}
