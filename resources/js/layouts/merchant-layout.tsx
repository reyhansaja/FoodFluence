import { ReactNode } from 'react';
import {
    LayoutDashboard,
    Calculator,
    Users,
    MessageSquare,
    History,
    Settings,
} from 'lucide-react';
import { DashboardSidebar, type DashboardNavItem } from '@/components/dashboard-sidebar';

interface MerchantSidebarProps {
    activeItem: string;
    children: ReactNode;
}

const navItems: DashboardNavItem[] = [
    { href: '/merchant/dashboard', label: 'Ringkasan Dasbor', icon: LayoutDashboard },
    { href: '/merchant/ai-calculator', label: 'Kalkulator AI & Buat Kampanye', icon: Calculator },
    { href: '/merchant/campaigns/bids', label: 'Lowongan & Seleksi Bid', icon: Users },
    { href: '/merchant/campaigns', label: 'Kampanye Aktif', icon: MessageSquare },
    { href: '/merchant/escrow-history', label: 'Riwayat Escrow & Refund', icon: History },
    { href: '/merchant/settings', label: 'Pengaturan Gerai & PIN Kasir', icon: Settings },
];

export default function MerchantLayout({ activeItem, children }: MerchantSidebarProps) {
    return (
        <DashboardSidebar
            role="merchant"
            roleBadge="Gerai"
            accountName="Kopi Kenangan - Sudirman"
            accountSubtitle="Akun Gerai Terverifikasi"
            activeItem={activeItem}
            navItems={navItems}
        >
            {children}
        </DashboardSidebar>
    );
}