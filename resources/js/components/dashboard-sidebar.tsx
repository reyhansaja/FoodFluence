import { ReactNode, useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { Menu, X, type LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface DashboardNavItem {
    href: string;
    label: string;
    icon: LucideIcon;
}

export interface DashboardSidebarProps {
    role: 'merchant' | 'creator';
    roleBadge?: string;
    accountName?: string;
    accountSubtitle?: string;
    activeItem: string;
    navItems: DashboardNavItem[];
    children: ReactNode;
}

export function DashboardSidebar({
    role,
    roleBadge,
    accountName,
    accountSubtitle,
    activeItem,
    navItems,
    children,
}: DashboardSidebarProps) {
    const [mobileOpen, setMobileOpen] = useState(false);

    // Lock body scrolling when mobile drawer is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileOpen]);

    const isMerchant = role === 'merchant';
    const brandColor = isMerchant ? 'text-[#059669]' : 'text-[#EA580C]';
    const badgeStyle = isMerchant
        ? 'bg-[#ECFDF5] text-[#059669] border-[#059669]/20'
        : 'bg-[#FFF7ED] text-[#EA580C] border-[#EA580C]/20';
    const activeItemStyle = isMerchant
        ? 'bg-[#ECFDF5] text-[#059669] font-bold shadow-xs'
        : 'bg-[#FFF7ED] text-[#EA580C] font-bold shadow-xs';
    const homeUrl = isMerchant ? '/merchant/dashboard' : '/creator/dashboard';

    const renderBrandLogo = (showBadge = true) => (
        <Link href={homeUrl} className={`text-xl font-bold ${brandColor} flex items-center gap-2`}>
            <svg className="w-7 h-7 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            <span className="tracking-tight">FoodFluence</span>
            {showBadge && roleBadge && (
                <span className={`text-[10px] ${badgeStyle} px-2 py-0.5 rounded-full font-bold border ml-1 uppercase tracking-wider`}>
                    {roleBadge}
                </span>
            )}
        </Link>
    );

    const renderNavItems = () => (
        <nav className="space-y-1.5 flex-1 overflow-y-auto">
            {navItems.map((item) => {
                const isActive = activeItem === item.href;
                const IconComponent = item.icon;
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                            isActive
                                ? activeItemStyle
                                : 'text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A]'
                        }`}
                    >
                        <IconComponent className="w-5 h-5 flex-shrink-0" />
                        <span>{item.label}</span>
                    </Link>
                );
            })}
        </nav>
    );

    const renderAccountFooter = () => (
        (accountName || accountSubtitle) && (
            <div className="pt-4 border-t border-[#E2E8F0] mt-auto text-xs text-[#64748B]">
                {accountName && <p className="font-semibold text-[#0F172A] truncate">{accountName}</p>}
                {accountSubtitle && <p className={`text-[11px] font-medium mt-0.5 ${brandColor}`}>{accountSubtitle}</p>}
            </div>
        )
    );

    return (
        <div className="flex min-h-screen bg-[#F8FAFC] flex-col md:flex-row text-[#0F172A]">
            {/* Sticky Mobile Top Header with Hamburger Button */}
            <header className="sticky top-0 z-40 bg-white border-b border-[#E2E8F0] px-4 py-3 flex items-center justify-between md:hidden shadow-xs">
                {renderBrandLogo(true)}

                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setMobileOpen(true)}
                    className="p-2 h-10 w-10 text-[#0F172A] hover:bg-[#F1F5F9] rounded-xl focus:outline-none"
                    aria-label="Buka Menu Navigasi"
                >
                    <Menu className="w-6 h-6" />
                </Button>
            </header>

            {/* Mobile Slide-Over Drawer with Backdrop Overlay */}
            {mobileOpen && (
                <div className="fixed inset-0 z-50 md:hidden">
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity animate-fadeIn"
                        onClick={() => setMobileOpen(false)}
                        aria-hidden="true"
                    />

                    {/* Drawer Content */}
                    <aside className="fixed inset-y-0 left-0 w-72 bg-white p-6 shadow-2xl flex flex-col z-10 animate-in slide-in-from-left duration-200">
                        <div className="flex items-center justify-between pb-5 mb-4 border-b border-[#E2E8F0]">
                            {renderBrandLogo(false)}
                            <button
                                onClick={() => setMobileOpen(false)}
                                className="p-1.5 rounded-lg text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0F172A] transition-colors"
                                aria-label="Tutup Menu"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {renderNavItems()}
                        {renderAccountFooter()}
                    </aside>
                </div>
            )}

            {/* Desktop Fixed/Docked Left Sidebar */}
            <aside className="hidden md:flex w-64 bg-white border-r border-[#E2E8F0] p-6 flex-col shrink-0 min-h-screen sticky top-0 h-screen">
                <div className="mb-8">
                    {renderBrandLogo(true)}
                </div>
                {renderNavItems()}
                {renderAccountFooter()}
            </aside>

            {/* Main Page Content */}
            <main className="flex-1 min-w-0 overflow-auto">{children}</main>
        </div>
    );
}

export default DashboardSidebar;
