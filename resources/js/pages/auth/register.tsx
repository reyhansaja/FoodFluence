import { Form, Head } from '@inertiajs/react';
import { Link, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Spinner } from '@/components/ui/spinner';
import { Separator } from '@/components/ui/separator';
import { store } from '@/routes/register';
import { login } from '@/routes';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { useState } from 'react';

type Props = {
    passwordRules: string;
};

type RoleType = 'merchant' | 'creator';

export default function Register({ passwordRules }: Props) {
    const [role, setRole] = useState<RoleType>('merchant');
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <Head title="Daftar - FoodFluence" />
            
            <div className="min-h-screen flex">
                {/* Left Panel - Dynamic Benefits */}
                <div className="hidden lg:flex lg:w-1/2 bg-[#059669] text-white p-12 flex-col justify-between">
                    <div>
                        <div className="text-2xl font-bold mb-8">FoodFluence</div>
                        <p className="text-white/80 text-lg mb-12">Platform kolaborasi kuliner & kreator lokal terpercaya</p>
                        
                        <div className="space-y-6">
                            {role === 'merchant' ? (
                                <>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 mt-2 bg-white/50 rounded-full flex-shrink-0"></div>
                                        <div>
                                            <p className="font-semibold">Kalkulator AI Margin Aman</p>
                                            <p className="text-white/80 text-sm">Hitung BEP & proyeksi laba sebelum keluar dana</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 mt-2 bg-white/50 rounded-full flex-shrink-0"></div>
                                        <div>
                                            <p className="font-semibold">Escrow Otomatis & Transparan</p>
                                            <p className="text-white/80 text-sm">Dana ditahan aman, auto-refund sisa kupon</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 mt-2 bg-white/50 rounded-full flex-shrink-0"></div>
                                        <div>
                                            <p className="font-semibold">Pelacakan Kasir Fisik (QR)</p>
                                            <p className="text-white/80 text-sm">Ukur konversi offline tanpa ganti POS</p>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 mt-2 bg-white/50 rounded-full flex-shrink-0"></div>
                                        <div>
                                            <p className="font-semibold">Akses Lowongan Lokal Radius Kota</p>
                                            <p className="text-white/80 text-sm">Cari kolaborasi F&B terdekat dari kota Anda</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 mt-2 bg-white/50 rounded-full flex-shrink-0"></div>
                                        <div>
                                            <p className="font-semibold">Rate Card Transparan & Adil</p>
                                            <p className="text-white/80 text_sm">Bid DP + Komisi/Scan, AI bantu pricing</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 mt-2 bg-white/50 rounded-full flex-shrink-0"></div>
                                        <div>
                                            <p className="font-semibold">Penarikan Dana Cepat & Aman</p>
                                            <p className="text-white/80 text-sm">Disbursement otomatis ke rekening/ewallet</p>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="text-center text-white/50 text-sm">
                        © 2024 FoodFluence. Promosi Kuliner Terukur, Untung Dibagi Adil.
                    </div>
                </div>

                {/* Right Panel - Adaptive Form */}
                <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-[#F8FAFC]">
                    <div className="w-full max-w-md">
                        <div className="text-center mb-8">
                            <h1 className="text-2xl font-bold text-[#0F172A]">Buat Akun Baru</h1>
                            <p className="text-[#475569] mt-2">Pilih peran dan isi data untuk memulai</p>
                        </div>

                        {/* Role Selector */}
                        <div className="grid grid-cols-2 gap-3 mb-6">
                            <button
                                type="button"
                                onClick={() => setRole('merchant')}
                                className={`p-4 rounded-xl border-2 text-left transition-all ${
                                    role === 'merchant'
                                        ? 'border-[#059669] bg-[#ECFDF5]'
                                        : 'border-[#E2E8F0] hover:border-[#059669]'
                                }`}
                            >
                                <div className="font-semibold text-[#0F172A]">Saya Pemilik UMKM F&B</div>
                                <div className="text-sm text-[#475569] mt-1">Kedai, kafe, minuman, dessert</div>
                            </button>
                            <button
                                type="button"
                                onClick={() => setRole('creator')}
                                className={`p-4 rounded-xl border-2 text-left transition-all ${
                                    role === 'creator'
                                        ? 'border-[#059669] bg-[#ECFDF5]'
                                        : 'border-[#E2E8F0] hover:border-[#059669]'
                                }`}
                            >
                                <div className="font-semibold text-[#0F172A]">Saya Influencer Lokal</div>
                                <div className="text-sm text-[#475569] mt-1">TikTok/IG kuliner, nano-micro</div>
                            </button>
                        </div>

                        {/* Form */}
                        <Form {...store.form()} resetOnSuccess={['password', 'password_confirmation']} className="space-y-4">
                            {({ processing, errors }) => (
                                <>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="name" className="text-sm font-medium text-[#475569]">
                                                Nama Lengkap
                                            </Label>
                                            <Input
                                                id="name"
                                                name="name"
                                                type="text"
                                                required
                                                autoFocus
                                                autoComplete="name"
                                                placeholder="Nama lengkap"
                                                className="mt-1"
                                            />
                                            {errors.name && <p className="mt-1 text-sm text-[#EF4444]">{errors.name}</p>}
                                        </div>
                                        <div>
                                            <Label htmlFor="phone" className="text-sm font-medium text-[#475569]">
                                                Nomor WhatsApp Aktif
                                            </Label>
                                            <Input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                required
                                                autoComplete="tel"
                                                placeholder="08xxxxxxxxxx"
                                                className="mt-1"
                                            />
                                            {errors.phone && <p className="mt-1 text-sm text-[#EF4444]">{errors.phone}</p>}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="email" className="text-sm font-medium text-[#475569]">
                                                Email
                                            </Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                autoComplete="email"
                                                placeholder="email@example.com"
                                                className="mt-1"
                                            />
                                            {errors.email && <p className="mt-1 text-sm text-[#EF4444]">{errors.email}</p>}
                                        </div>
                                        <div>
                                            <Label htmlFor="city" className="text-sm font-medium text-[#475569]">
                                                Kota Domisili
                                            </Label>
                                            <Input
                                                id="city"
                                                name="city"
                                                type="text"
                                                required
                                                placeholder="Contoh: Jakarta, Bandung, Yogyakarta"
                                                className="mt-1"
                                            />
                                            {errors.city && <p className="mt-1 text-sm text-[#EF4444]">{errors.city}</p>}
                                        </div>
                                    </div>

                                    {/* Role-specific fields */}
                                    {role === 'merchant' && (
                                        <div className="space-y-4 pt-4 border-t border-[#E2E8F0]">
                                            <Label className="text-sm font-medium text-[#475569]">Data Kedai / Brand F&B</Label>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <Label htmlFor="brand_name" className="text-sm font-medium text-[#475569]">
                                                        Nama Kedai / Brand
                                                    </Label>
                                                    <Input
                                                        id="brand_name"
                                                        name="brand_name"
                                                        type="text"
                                                        required
                                                        placeholder="Contoh: Kopi Kenangan, Warung Sate Pak Budi"
                                                        className="mt-1"
                                                    />
                                                    {errors.brand_name && <p className="mt-1 text-sm text-[#EF4444]">{errors.brand_name}</p>}
                                                </div>
                                                <div>
                                                    <Label htmlFor="category" className="text-sm font-medium text-[#475569]">
                                                        Kategori Kuliner
                                                    </Label>
                                                    <Select>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Pilih kategori" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="kopi">Kopi & Minuman</SelectItem>
                                                            <SelectItem value="makanan_ringan">Makanan Ringan / Camilan</SelectItem>
                                                            <SelectItem value="dessert">Dessert & Bakery</SelectItem>
                                                            <SelectItem value="makanan_berat">Makanan Berat</SelectItem>
                                                            <SelectItem value="lainnya">Lainnya</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    {errors.category && <p className="mt-1 text-sm text-[#EF4444]">{errors.category}</p>}
                                                </div>
                                            </div>
                                            <div>
                                                <Label htmlFor="area" className="text-sm font-medium text-[#475569]">
                                                    Kecamatan / Area Gerai
                                                </Label>
                                                <Input
                                                    id="area"
                                                    name="area"
                                                    type="text"
                                                    required
                                                    placeholder="Contoh: Sudirman, Cihampelas, Malioboro"
                                                    className="mt-1"
                                                />
                                                {errors.area && <p className="mt-1 text-sm text-[#EF4444]">{errors.area}</p>}
                                            </div>
                                        </div>
                                    )}

                                    {role === 'creator' && (
                                        <div className="space-y-4 pt-4 border-t border-[#E2E8F0]">
                                            <Label className="text-sm font-medium text-[#475569]">Profil Kreator</Label>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <Label htmlFor="username_social" className="text-sm font-medium text-[#475569]">
                                                        Username TikTok/Instagram
                                                    </Label>
                                                    <div className="relative mt-1">
                                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]">@</span>
                                                        <Input
                                                            id="username_social"
                                                            name="username_social"
                                                            type="text"
                                                            required
                                                            placeholder="username_anda"
                                                            className="pl-7"
                                                        />
                                                    </div>
                                                    <div className="flex gap-2 mt-2">
                                                        <Button variant="outline" type="button" size="sm">Cek Metrik</Button>
                                                    </div>
                                                    {errors.username_social && <p className="mt-1 text-sm text-[#EF4444]">{errors.username_social}</p>}
                                                </div>
                                                <div>
                                                    <Label htmlFor="base_dp_rate" className="text-sm font-medium text-[#475569]">
                                                        Estimasi Base DP per Video (Rp)
                                                    </Label>
                                                    <Input
                                                        id="base_dp_rate"
                                                        name="base_dp_rate"
                                                        type="number"
                                                        required
                                                        placeholder="Contoh: 100000"
                                                        className="mt-1"
                                                    />
                                                    <p className="mt-1 text-xs text-[#94A3B8]">Standar tarif kota Anda</p>
                                                    {errors.base_dp_rate && <p className="mt-1 text-sm text-[#EF4444]">{errors.base_dp_rate}</p>}
                                                </div>
                                            </div>
                                            <div>
                                                <Label htmlFor="portfolio_url" className="text-sm font-medium text-[#475569]">
                                                    Tautan Portofolio (Video Tayang)
                                                </Label>
                                                <Input
                                                    id="portfolio_url"
                                                    name="portfolio_url"
                                                    type="url"
                                                    placeholder="https://tiktok.com/@username/video/..."
                                                    className="mt-1"
                                                />
                                                {errors.portfolio_url && <p className="mt-1 text-sm text-[#EF4444]">{errors.portfolio_url}</p>}
                                            </div>
                                        </div>
                                    )}

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
                                                autoComplete="new-password"
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

                                    <div>
                                        <Label htmlFor="password_confirmation" className="text-sm font-medium text-[#475569]">
                                            Konfirmasi Kata Sandi
                                        </Label>
                                        <Input
                                            id="password_confirmation"
                                            name="password_confirmation"
                                            type={showPassword ? 'text' : 'password'}
                                            required
                                            autoComplete="new-password"
                                            placeholder="Ulangi kata sandi"
                                            className="mt-1"
                                        />
                                        {errors.password_confirmation && <p className="mt-1 text-sm text-[#EF4444]">{errors.password_confirmation}</p>}
                                    </div>

                                    <div className="flex items-start gap-2">
                                        <Checkbox id="terms" name="terms" required />
                                        <div className="text-sm text-[#475569] mt-1">
                                            Saya menyetujui <Link href="#" className="text-[#059669] underline">MOU & Ketentuan Escrow</Link>
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full mt-4 bg-[#EA580C] hover:bg-[#C2410C]"
                                        disabled={processing}
                                    >
                                        {processing && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                                        Daftar & Masuk ke Dasbor
                                    </Button>
                                </>
                            )}
                        </Form>

                        <p className="mt-6 text-center text-sm text-[#475569]">
                            Sudah punya akun?{' '}
                            <Link href={login()} className="text-[#059669] hover:underline font-medium">
                                Masuk
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}