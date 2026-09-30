"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/auth.store";
import { authService } from "@/services/auth.service";
import {
    LayoutDashboard,
    Map,
    Calendar,
    TrendingUp,
    MapPin,
    Images,
    FileText,
    Plane,
    LogOut,
    Menu,
    X,
    ChevronDown,
    ChevronUp,
} from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const { user, clearAuth } = useAuthStore();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [tourMenuOpen, setTourMenuOpen] = useState(true);
    const [destinationMenuOpen, setDestinationMenuOpen] = useState(true);

    // Skip layout sidebar on login page
    if (pathname === "/admin/login") {
        return <>{children}</>;
    }

    const handleLogout = async () => {
        try {
            await authService.logout();
        } catch {
            // Ignore logout API errors
        } finally {
            clearAuth();
            router.replace("/admin/login");
        }
    };

    const isTourRoute = pathname.startsWith("/admin/tours");
    const isDestinationRoute = pathname.startsWith("/admin/destinations");

    return (
        <div
            style={{
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif"
            }}
            className="min-h-screen bg-[#F1F5F9] text-[#1C2434] flex flex-col lg:flex-row selection:bg-[#3C50E0] selection:text-white"
        >
            {/* Mobile Header */}
            <header className="flex h-16 items-center justify-between border-b border-[#E2E8F0] bg-white px-5 lg:hidden w-full shrink-0 z-30">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-[#3C50E0] text-white rounded-xl flex items-center justify-center font-bold shadow-sm">
                        <Plane className="h-5 w-5" />
                    </div>
                    <span className="font-bold text-lg text-[#1C2434] tracking-tight">Ceylon Vidu Tours</span>
                </div>
                <button
                    onClick={() => setSidebarOpen((prev) => !prev)}
                    className="p-2.5 border border-[#E2E8F0] rounded-xl hover:bg-[#F7F9FC] text-[#64748B] transition"
                >
                    {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </header>

            {/* Mobile Backdrop */}
            {sidebarOpen && (
                <div
                    onClick={() => setSidebarOpen(false)}
                    className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
                />
            )}

            {/* TailAdmin Sidebar (Fixed 290px Sidebar, Independent Scroll) */}
            <aside
                className={`fixed inset-y-0 left-0 z-40 flex w-[290px] h-screen flex-col border-r border-[#E2E8F0] bg-white transition-transform duration-300 lg:translate-x-0 shrink-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Logo Area */}
                <div className="flex h-20 items-center px-6 gap-3 border-b border-[#F1F5F9] shrink-0">
                    <div className="h-10 w-10 bg-[#3C50E0] text-white rounded-xl flex items-center justify-center shadow-md shrink-0">
                        <Plane className="h-5 w-5" />
                    </div>
                    <div>
                        <span className="text-lg font-bold text-[#1C2434] tracking-tight block leading-tight">
                            Ceylon Vidu
                        </span>
                        <span className="text-[10px] font-semibold text-[#8A99AD] uppercase tracking-wider block mt-0.5">
                            Tours Management
                        </span>
                    </div>
                </div>

                {/* Navigation Menu (Scrollable inside sidebar if needed) */}
                <nav className="flex-1 px-4 py-5 space-y-1.5 overflow-y-auto">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#8A99AD] mb-3 px-3">
                        MENU
                    </div>

                    {/* Dashboard */}
                    <Link
                        href="/admin/dashboard"
                        onClick={() => setSidebarOpen(false)}
                        className={`flex items-center justify-between h-11 px-3.5 rounded-xl text-sm font-medium transition-colors ${pathname === "/admin/dashboard"
                            ? "bg-[#EBF1FF] text-[#3C50E0] font-semibold"
                            : "text-[#5A6A85] hover:bg-[#F7F9FC] hover:text-[#3C50E0]"
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <LayoutDashboard className={`h-5 w-5 ${pathname === "/admin/dashboard" ? "text-[#3C50E0]" : "text-[#64748B]"}`} />
                            <span>Dashboard</span>
                        </div>
                    </Link>

                    {/* Tour Management */}
                    <div>
                        <button
                            type="button"
                            onClick={() => setTourMenuOpen((prev) => !prev)}
                            className={`w-full flex items-center justify-between h-11 px-3.5 rounded-xl text-sm font-medium transition-colors ${isTourRoute
                                ? "bg-[#EBF1FF] text-[#3C50E0] font-semibold"
                                : "text-[#5A6A85] hover:bg-[#F7F9FC] hover:text-[#3C50E0]"
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <Map className={`h-5 w-5 ${isTourRoute ? "text-[#3C50E0]" : "text-[#64748B]"}`} />
                                <span>Tour Management</span>
                            </div>
                            {tourMenuOpen ? (
                                <ChevronUp className={`h-4 w-4 ${isTourRoute ? "text-[#3C50E0]" : "text-[#8A99AD]"}`} />
                            ) : (
                                <ChevronDown className={`h-4 w-4 ${isTourRoute ? "text-[#3C50E0]" : "text-[#8A99AD]"}`} />
                            )}
                        </button>

                        {/* Submenu Items */}
                        {tourMenuOpen && (
                            <div className="mt-1 ml-4 pl-3 space-y-1 border-l-2 border-[#E2E8F0]">
                                <Link
                                    href="/admin/tours"
                                    onClick={() => setSidebarOpen(false)}
                                    className={`block py-2 px-3 rounded-lg text-xs font-medium transition-colors ${pathname === "/admin/tours"
                                        ? "bg-[#EBF1FF] text-[#3C50E0] font-semibold"
                                        : "text-[#5A6A85] hover:text-[#3C50E0] hover:bg-[#F7F9FC]"
                                        }`}
                                >
                                    All Tours
                                </Link>

                                <Link
                                    href="/admin/tours/add"
                                    onClick={() => setSidebarOpen(false)}
                                    className={`block py-2 px-3 rounded-lg text-xs font-medium transition-colors ${pathname === "/admin/tours/add"
                                        ? "bg-[#EBF1FF] text-[#3C50E0] font-semibold"
                                        : "text-[#5A6A85] hover:text-[#3C50E0] hover:bg-[#F7F9FC]"
                                        }`}
                                >
                                    Add New Tour
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Booking Requests */}
                    <Link
                        href="/admin/bookings"
                        onClick={() => setSidebarOpen(false)}
                        className={`flex items-center justify-between h-11 px-3.5 rounded-xl text-sm font-medium transition-colors ${pathname.startsWith("/admin/bookings")
                            ? "bg-[#EBF1FF] text-[#3C50E0] font-semibold"
                            : "text-[#5A6A85] hover:bg-[#F7F9FC] hover:text-[#3C50E0]"
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <Calendar className={`h-5 w-5 ${pathname.startsWith("/admin/bookings") ? "text-[#3C50E0]" : "text-[#64748B]"}`} />
                            <span>Booking Requests</span>
                        </div>
                    </Link>

                    {/* Payment & Invoices */}
                    <Link
                        href="/admin/payments"
                        onClick={() => setSidebarOpen(false)}
                        className={`flex items-center justify-between h-11 px-3.5 rounded-xl text-sm font-medium transition-colors ${pathname.startsWith("/admin/payments")
                            ? "bg-[#EBF1FF] text-[#3C50E0] font-semibold"
                            : "text-[#5A6A85] hover:bg-[#F7F9FC] hover:text-[#3C50E0]"
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <TrendingUp className={`h-5 w-5 ${pathname.startsWith("/admin/payments") ? "text-[#3C50E0]" : "text-[#64748B]"}`} />
                            <span>Payment & Invoices</span>
                        </div>
                    </Link>

                    {/* Destination Management */}
                    <div>
                        <button
                            type="button"
                            onClick={() => setDestinationMenuOpen((prev) => !prev)}
                            className={`w-full flex items-center justify-between h-11 px-3.5 rounded-xl text-sm font-medium transition-colors ${isDestinationRoute
                                ? "bg-[#EBF1FF] text-[#3C50E0] font-semibold"
                                : "text-[#5A6A85] hover:bg-[#F7F9FC] hover:text-[#3C50E0]"
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <MapPin className={`h-5 w-5 ${isDestinationRoute ? "text-[#3C50E0]" : "text-[#64748B]"}`} />
                                <span>Destination Management</span>
                            </div>
                            {destinationMenuOpen ? (
                                <ChevronUp className={`h-4 w-4 ${isDestinationRoute ? "text-[#3C50E0]" : "text-[#8A99AD]"}`} />
                            ) : (
                                <ChevronDown className={`h-4 w-4 ${isDestinationRoute ? "text-[#3C50E0]" : "text-[#8A99AD]"}`} />
                            )}
                        </button>

                        {/* Submenu Items */}
                        {destinationMenuOpen && (
                            <div className="mt-1 ml-4 pl-3 space-y-1 border-l-2 border-[#E2E8F0]">
                                <Link
                                    href="/admin/destinations"
                                    onClick={() => setSidebarOpen(false)}
                                    className={`block py-2 px-3 rounded-lg text-xs font-medium transition-colors ${pathname === "/admin/destinations"
                                        ? "bg-[#EBF1FF] text-[#3C50E0] font-semibold"
                                        : "text-[#5A6A85] hover:text-[#3C50E0] hover:bg-[#F7F9FC]"
                                        }`}
                                >
                                    All Destinations
                                </Link>

                                <Link
                                    href="/admin/destinations/add"
                                    onClick={() => setSidebarOpen(false)}
                                    className={`block py-2 px-3 rounded-lg text-xs font-medium transition-colors ${pathname === "/admin/destinations/add"
                                        ? "bg-[#EBF1FF] text-[#3C50E0] font-semibold"
                                        : "text-[#5A6A85] hover:text-[#3C50E0] hover:bg-[#F7F9FC]"
                                        }`}
                                >
                                    Add New Destination
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Gallery Management */}
                    <Link
                        href="/admin/gallery"
                        onClick={() => setSidebarOpen(false)}
                        className={`flex items-center justify-between h-11 px-3.5 rounded-xl text-sm font-medium transition-colors ${pathname.startsWith("/admin/gallery")
                            ? "bg-[#EBF1FF] text-[#3C50E0] font-semibold"
                            : "text-[#5A6A85] hover:bg-[#F7F9FC] hover:text-[#3C50E0]"
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <Images className={`h-5 w-5 ${pathname.startsWith("/admin/gallery") ? "text-[#3C50E0]" : "text-[#64748B]"}`} />
                            <span>Gallery Management</span>
                        </div>
                    </Link>

                    {/* Blog Management */}
                    <Link
                        href="/admin/blog"
                        onClick={() => setSidebarOpen(false)}
                        className={`flex items-center justify-between h-11 px-3.5 rounded-xl text-sm font-medium transition-colors ${pathname.startsWith("/admin/blog")
                            ? "bg-[#EBF1FF] text-[#3C50E0] font-semibold"
                            : "text-[#5A6A85] hover:bg-[#F7F9FC] hover:text-[#3C50E0]"
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <FileText className={`h-5 w-5 ${pathname.startsWith("/admin/blog") ? "text-[#3C50E0]" : "text-[#64748B]"}`} />
                            <span>Blog Management</span>
                        </div>
                    </Link>
                </nav>

                {/* User Profile & Logout (Fixed at Bottom) */}
                <div className="p-4 border-t border-[#E2E8F0] space-y-2.5 shrink-0">
                    <div className="flex items-center gap-3 p-2.5 bg-[#F7F9FC] rounded-xl border border-[#E2E8F0]">
                        <div className="h-9 w-9 bg-[#3C50E0] text-white rounded-xl flex items-center justify-center font-bold text-sm uppercase shrink-0">
                            {user?.firstName?.[0] || "A"}
                        </div>
                        <div className="truncate text-xs">
                            <p className="font-semibold text-sm text-[#1C2434] leading-none">{user?.firstName || "Admin"}</p>
                            <span className="text-[11px] text-[#64748B] block mt-1 font-medium">Administrator</span>
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center gap-2 h-9 text-xs font-semibold rounded-xl text-[#D34053] bg-[#FCF1F2] hover:bg-[#FADBDC] transition border border-[#F8C4C6]"
                    >
                        <LogOut className="h-4 w-4" /> Logout
                    </button>
                </div>
            </aside>

            {/* Main Workspace Viewport (Independently Scrollable with Left Margin for Fixed Sidebar) */}
            <main className="flex-1 lg:ml-[290px] bg-[#F1F5F9] min-h-screen p-6 lg:p-10 pt-20 lg:pt-10">
                {children}
            </main>
        </div>
    );
}
