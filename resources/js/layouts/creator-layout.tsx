import { ReactNode } from 'react';
import {
    Wallet,
    Compass,
    Video,
    DollarSign,
    BarChart3,
} from 'lucide-react';
import { DashboardSidebar, type DashboardNavItem } from '@/components/dashboard-sidebar';

interface CreatorSidebarProps {
    activeItem: string;
    children: ReactNode;
}

const navItems: DashboardNavItem[] = [
    { href: '/creator/dashboard', label: 'Ringkasan Dasbor', icon: Wallet },
    { href: '/creator/marketplace', label: 'Bursa Kampanye F&B', icon: Compass },
    { href: '/creator/campaigns', label: 'Kampanye Aktif', icon: Video },
    { href: '/creator/withdrawals', label: 'Riwayat Penarikan', icon: DollarSign },
    { href: '/creator/analytics', label: 'Analitik Konversi', icon: BarChart3 },
];

export default function CreatorLayout({ activeItem, children }: CreatorSidebarProps) {
    return (
        <DashboardSidebar
            role="creator"
            roleBadge="Kreator"
            accountName="Andi Kuliner"
            accountSubtitle="Verified Creator Kuliner"
            activeItem={activeItem}
            navItems={navItems}
        >
            {children}
        </DashboardSidebar>
    );
}
