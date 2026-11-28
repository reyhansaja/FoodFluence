import { Form, Head } from '@inertiajs/react';
import { Link, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { Separator } from '@/components/ui/separator';
import { store } from '@/routes/login';
import { request } from '@/routes/password';
import { register } from '@/routes';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { useState } from 'react';

type Props = {
    status?: string;
    canResetPassword: boolean;
};

export default function Login({ status, canResetPassword }: Props) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <Head title="Masuk - FoodFluence" />
            
            <div className="min-h-screen flex">
                {/* Left Panel - Branding */}
                <div className="hidden lg:flex lg:w-1/2 bg-[#059669] text-white p-12 flex-col justify-between">
                    <div>
                        <div className="text-2xl font-bold mb-8">FoodFluence</div>
                        <p className="text-white/80 text-lg mb-12">Platform kolaborasi kuliner & kreator lokal terpercaya</p>
                        
                        <div className="bg-white/10 p-6 rounded-xl mb-8">
                            <p className="font-semibold mb-2">Pratinjau Metrik</p>
                            <p className="text-white/90">42 Kupon Tervalidasi di Kasir</p>
                            <p className="text-white/90">ROI +215%</p>
                        </div>
                        
                        <div className="space-y-4 text-white/80">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                                <span>Dana aman di rekening Escrow berizin BI</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                                <span>Auto-refund sisa kupon tidak terpakai</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                                <span>Kontrak digital MOU otomatis</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-center text-white/50 text-sm">
                        © 2024 FoodFluence. Promosi Kuliner Terukur, Untung Dibagi Adil.
                    </div>
                </div>

                {/* Right Panel - Form */}
                <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-[#F8FAFC]">
                    <div className="w-full max-w-md">
                        <div className="text-center mb-8">
                            <h1 className="text-2xl font-bold text-[#0F172A]">Selamat Datang Kembali</h1>
                            <p className="text-[#475569] mt-2">Masuk untuk melanjutkan ke dasbor</p>
                        </div>

                        {/* Google Login */}
                        <Button variant="outline" className="w-full mb-6" disabled>
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                />
                            </svg>
                            Masuk dengan Google
                        </Button>

                        {/* Divider */}
                        <div className="relative mb-6">
                            <Separator />
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#F8FAFC] px-2 text-xs text-[#94A3B8]">
                                atau masuk dengan email / WhatsApp
                            </div>
                        </div>

                        {/* Form */}
                        <Form {...store.form()} resetOnSuccess={['password']} className="space-y-4">
                            {({ processing, errors }) => (
                                <>
                                    <div>
                                        <Label htmlFor="email_phone" className="text-sm font-medium text-[#475569]">
                                            Email / Nomor WhatsApp
                                        </Label>
                                        <Input
                                            id="email_phone"
                                            name="email"
                                            type="text"
                                            required
                                            autoFocus
                                            autoComplete="email"
                                            placeholder="email@example.com atau 08xxxxxxxxxx"
                                            className="mt-1"
                                        />
                                        {errors.email && <p className="mt-1 text-sm text-[#EF4444]">{errors.email}</p>}
                                    </div>

                                    <div>
                                        <Label htmlFor="password" className="text-sm font-medium text-[#475569]">
                                            Kata Sandi
                                        </Label>
                                        <div className="relative mt-1">
                                            <Input
                                                id="password"
                                                name="password"
                                                type={showPassword ? 'text' : 'password'}
                                                required
                                                autoComplete="current-password"
                                                placeholder="Kata sandi"
                                                className="pr-10"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#059669]"
                                            >
                                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                            </button>
                                        </div>
                                        {errors.password && <p className="mt-1 text-sm text-[#EF4444]">{errors.password}</p>}
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <label className="flex items-center gap-2">
                                            <Checkbox id="remember" name="remember" />
                                            <span className="text-sm text-[#475569]">Ingat saya</span>
                                        </label>
                                        {canResetPassword && (
                                            <Link href={request()} className="text-sm text-[#059669] hover:underline">
                                                Lupa Kata Sandi?
                                            </Link>
                                        )}
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full mt-4 bg-[#059669] hover:bg-[#047857]"
                                        disabled={processing}
                                    >
                                        {processing && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                                        Masuk Sekarang
                                    </Button>
                                </>
                            )}
                        </Form>

                        <p className="mt-6 text-center text-sm text-[#475569]">
                            Belum punya akun?{' '}
                            <Link href={register()} className="text-[#059669] hover:underline font-medium">
                                Daftar Gratis
                            </Link>
                        </p>

                        {/* Cashier Quick Access */}
                        <div className="mt-8 p-4 bg-white border border-[#E2E8F0] rounded-xl">
                            <p className="text-sm text-[#475569] mb-3">Anda staf kasir kedai?</p>
                            <Link
                                href="/cashier/login"
                                className="block text-center text-[#EA580C] hover:underline font-medium"
                            >
                                Buka Scanner Kasir (Login PIN Gerai)
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}