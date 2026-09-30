'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useRef, startTransition } from "react";
import {
    Menu,
    User,
    X,
    ChevronDown,
    Globe,
    Calendar,
    Users,
    Star,
    LogOut,
    Settings,
    HelpCircle,
    ChevronRight,
    Sparkles,
    Award,
    MapPin,
    SlidersHorizontal
} from "lucide-react";

import { useAuthStore } from "@/stores/auth.store";

// ============================================
// Navigation Data
// ============================================
const navItems = [
    { name: "Home", href: "/" },
    {
        name: "Tours",
        href: "/tours",
        dropdown: [
            { name: "All Tour Packages", href: "/tours", icon: Globe },
            { name: "One Day Tours", href: "/tours?category=one%20day%20tour", icon: Calendar },
            { name: "Round Tours", href: "/tours?category=round%20tour", icon: Users },
            { name: "Wildlife & Safari", href: "/tours?category=wildlife%20%26%20safari%20tour", icon: Sparkles },
            { name: "Cultural & Heritage", href: "/tours?category=cultural%20%26%20heritage%20tour", icon: Award },
            { name: "Beach Retreats", href: "/tours?category=beach%20tour", icon: MapPin },
            { name: "Misty Highlands", href: "/tours?category=hill%20country%20tour", icon: SlidersHorizontal },
        ]
    },
    { name: "Destinations", href: "/destinations" },
    { name: "Gallery", href: "/gallery" },
    { name: "Reviews", href: "/reviews" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

// ============================================
// Main Component
// ============================================
interface NavbarProps {
    alwaysSolid?: boolean;
}

export default function Navbar({ alwaysSolid = false }: NavbarProps = {}) {
    const pathname = usePathname();
    const router = useRouter();
    const { user, clearAuth } = useAuthStore();

    const [scrolled, setScrolled] = useState(alwaysSolid);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);
    const userMenuRef = useRef<HTMLDivElement>(null);
    const navbarRef = useRef<HTMLElement>(null);

    // ============================================
    // Active Route Logic
    // ============================================
    const isActiveRoute = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(href);
    };

    // ============================================
    // Scroll Effect
    // ============================================
    useEffect(() => {
        if (alwaysSolid) {
            setScrolled(true);
            return;
        }
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [alwaysSolid]);

    // ============================================
    // Click Outside Handlers
    // ============================================
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpenDropdown(null);
            }
            if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
                setUserMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // ============================================
    // Escape Key Handler
    // ============================================
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setMobileMenuOpen(false);
                setOpenDropdown(null);
                setUserMenuOpen(false);
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    // ============================================
    // Body Scroll Lock
    // ============================================
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    // ============================================
    // Close Mobile Menu on Route Change
    // ============================================
    useEffect(() => {
        startTransition(() => {
            setMobileMenuOpen(false);
        });
    }, [pathname]);

    // ============================================
    // Handlers
    // ============================================
    const toggleDropdown = (name: string) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };

    const handleLogout = async () => {
        try {
            setIsLoggingOut(true);
            await fetch('/api/auth/logout', { method: 'POST' });
            clearAuth();
            router.push('/');
            setUserMenuOpen(false);
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            setIsLoggingOut(false);
        }
    };

    // ============================================
    // Render
    // ============================================
    return (
        <>
            {/* ===== Navbar ===== */}
            <header
                ref={navbarRef}
                className={`
                    z-50 w-full transition-all duration-500
                    ${scrolled
                        ? 'fixed top-0 left-0 bg-white/95 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] h-28'
                        : 'absolute top-0 left-0 bg-transparent h-32'
                    }
                `}
            >
                <div className="mx-auto flex h-full w-full max-w-[2100px] items-center justify-between px-8 sm:px-10 lg:px-14 xl:px-16 2xl:px-20">

                    {/* ===== LEFT: Logo + Brand Name ===== */}
                    <Link
                        href="/"
                        className="flex items-center gap-6 group shrink-0"
                    >
                        <div className="relative transition-all duration-300 group-hover:scale-[1.06]">
                            <Image
                                src="/logo1.png"
                                alt="Ceylon Vidu Tours"
                                width={220}
                                height={220}
                                className={`w-auto object-contain transition-all duration-500 ${scrolled ? 'h-24' : 'h-28'}`}
                            />
                        </div>
                        <div className={`flex flex-col leading-tight transition-all duration-500 ${scrolled ? 'opacity-100' : 'opacity-100'}`}>
                            <span
                                className={`text-[32px] font-black tracking-[-0.03em] leading-none transition-all duration-500 ${scrolled ? 'text-slate-800' : 'text-white'}`}
                                style={{ fontFamily: 'var(--font-geist-sans, Inter, system-ui, sans-serif)' }}
                            >
                                Ceylon Vidu
                            </span>
                            <span
                                className={`text-[18px] font-semibold tracking-[0.22em] uppercase leading-none mt-1.5 transition-all duration-500 ${scrolled ? 'text-emerald-600' : 'text-emerald-300'}`}
                                style={{ fontFamily: 'var(--font-geist-sans, Inter, system-ui, sans-serif)' }}
                            >
                                Tours
                            </span>
                        </div>
                    </Link>

                    {/* ===== CENTER: Desktop Navigation ===== */}
                    <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 2xl:gap-2 flex-1 justify-center">
                        {navItems.map((item) => {
                            const isActive = isActiveRoute(item.href);
                            const hasDropdown = item.dropdown && item.dropdown.length > 0;
                            const isDropdownOpen = openDropdown === item.name;

                            if (hasDropdown) {
                                return (
                                    <div
                                        key={item.name}
                                        ref={dropdownRef}
                                        className="relative group"
                                        onMouseEnter={() => { if (window.innerWidth >= 1024) setOpenDropdown(item.name); }}
                                        onMouseLeave={() => { if (window.innerWidth >= 1024) setOpenDropdown(null); }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setOpenDropdown(null)}
                                            className={`
                                                group relative flex items-center gap-1.5 px-6 xl:px-7 py-4 text-[20px] font-semibold rounded-xl
                                                transition-all duration-200 cursor-pointer tracking-[0.01em]
                                                ${isActive || isDropdownOpen
                                                    ? scrolled ? 'text-emerald-700' : 'text-white'
                                                    : scrolled ? 'text-slate-600 hover:text-slate-900' : 'text-slate-200/80 hover:text-white'
                                                }
                                            `}
                                            aria-haspopup="menu"
                                            aria-expanded={isDropdownOpen}
                                            style={{ fontFamily: 'var(--font-geist-sans, Inter, system-ui, sans-serif)' }}
                                        >
                                            {item.name}
                                            <ChevronDown className={`
                                                h-4 w-4 transition-transform duration-200
                                                ${isDropdownOpen ? 'rotate-180 text-emerald-600' : scrolled ? 'text-slate-400' : 'text-slate-400/60'}
                                            `} />
                                            <span className={`
                                                absolute bottom-2 left-5 h-[3px] rounded-full bg-emerald-500
                                                transition-all duration-300 ease-out
                                                ${isActive || isDropdownOpen ? 'w-[calc(100%-40px)] opacity-100' : 'w-0 opacity-0 group-hover:w-[calc(100%-40px)] group-hover:opacity-100'}
                                            `} />
                                        </Link>

                                        {/* Dropdown */}
                                        {isDropdownOpen && (
                                            <div className="absolute left-0 top-full pt-2 w-80 z-50">
                                                <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_12px_48px_rgba(0,0,0,0.12)] p-3 animate-in fade-in slide-in-from-top-2 duration-200">
                                                    {item.dropdown.map((subItem) => {
                                                        const Icon = subItem.icon;
                                                        const isSubActive = isActiveRoute(subItem.href);
                                                        return (
                                                            <Link
                                                                key={subItem.name}
                                                                href={subItem.href}
                                                                onClick={() => setOpenDropdown(null)}
                                                                className={`
                                                                    flex items-center gap-4 px-5 py-3.5 rounded-xl text-[15px] font-medium
                                                                    transition-all duration-150
                                                                    ${isSubActive
                                                                        ? 'bg-emerald-50 text-emerald-700'
                                                                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                                                    }
                                                                `}
                                                            >
                                                                <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${isSubActive ? 'bg-emerald-100' : 'bg-slate-100'}`}>
                                                                    <Icon className={`h-4.5 w-4.5 ${isSubActive ? 'text-emerald-600' : 'text-slate-500'}`} />
                                                                </span>
                                                                <span>{subItem.name}</span>
                                                                {isSubActive && <ChevronRight className="h-4 w-4 ml-auto text-emerald-500" />}
                                                            </Link>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            }

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`
                                        group relative px-6 xl:px-7 py-4 text-[20px] font-semibold rounded-xl tracking-[0.01em]
                                        transition-all duration-200
                                        ${isActive
                                            ? scrolled ? 'text-emerald-700' : 'text-white'
                                            : scrolled ? 'text-slate-600 hover:text-slate-900' : 'text-slate-200/80 hover:text-white'
                                        }
                                    `}
                                    style={{ fontFamily: 'var(--font-geist-sans, Inter, system-ui, sans-serif)' }}
                                >
                                    {item.name}
                                    <span className={`
                                        absolute bottom-2 left-5 h-[3px] rounded-full bg-emerald-500
                                        transition-all duration-300 ease-out
                                        ${isActive ? 'w-[calc(100%-40px)] opacity-100' : 'w-0 opacity-0 group-hover:w-[calc(100%-40px)] group-hover:opacity-100'}
                                    `} />
                                </Link>
                            );
                        })}
                    </nav>

                    {/* ===== RIGHT: Auth Buttons ===== */}
                    <div className="flex items-center justify-end gap-5 xl:gap-6 shrink-0">

                        {/* User Profile */}
                        {user && user.role === 'CUSTOMER' ? (
                            <div ref={userMenuRef} className="relative">
                                <button
                                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                                    className={`
                                        flex items-center gap-3 rounded-2xl pl-2 pr-4 py-2
                                        transition-all duration-200 cursor-pointer
                                        ${userMenuOpen
                                            ? 'bg-emerald-50 ring-4 ring-emerald-500/10'
                                            : scrolled
                                                ? 'hover:bg-slate-50'
                                                : 'hover:bg-white/10'
                                        }
                                    `}
                                    aria-haspopup="menu"
                                    aria-expanded={userMenuOpen}
                                >
                                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white flex items-center justify-center font-bold text-sm shadow-md">
                                        {user.firstName?.[0] || user.email?.[0] || 'U'}
                                    </div>
                                    <span className={`hidden sm:block text-[15px] font-semibold ${scrolled ? 'text-slate-700' : 'text-white'}`}>
                                        {user.firstName || 'User'}
                                    </span>
                                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${userMenuOpen ? 'rotate-180 text-emerald-600' : scrolled ? 'text-slate-400' : 'text-slate-300'}`} />
                                </button>

                                {/* User Dropdown */}
                                {userMenuOpen && (
                                    <div className="absolute right-0 mt-3 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_12px_48px_rgba(0,0,0,0.12)] p-3 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                                        <div className="px-5 py-4 border-b border-slate-100 mb-1.5">
                                            <p className="text-[16px] font-bold text-slate-900">{user.firstName} {user.lastName}</p>
                                            <p className="text-[14px] text-slate-400 truncate mt-0.5 font-medium">{user.email}</p>
                                        </div>
                                        {[
                                            { href: '/profile', icon: User, label: 'Profile' },
                                            { href: '/bookings', icon: Calendar, label: 'My Bookings' },
                                            { href: '/settings', icon: Settings, label: 'Settings' },
                                            { href: '/help', icon: HelpCircle, label: 'Help Center' },
                                        ].map(({ href, icon: Icon, label }) => (
                                            <Link
                                                key={href}
                                                href={href}
                                                onClick={() => setUserMenuOpen(false)}
                                                className="flex items-center gap-4 px-5 py-3.5 rounded-xl text-[15px] font-semibold text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all"
                                            >
                                                <Icon className="h-5 w-5 text-slate-400 shrink-0" />
                                                <span>{label}</span>
                                            </Link>
                                        ))}
                                        <button
                                            onClick={handleLogout}
                                            disabled={isLoggingOut}
                                            className="flex w-full items-center gap-4 px-5 py-3.5 rounded-xl text-[15px] font-semibold text-rose-600 hover:bg-rose-50 transition-all mt-1.5 border-t border-slate-100 pt-4 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <LogOut className="h-5 w-5 text-rose-400 shrink-0" />
                                            <span>{isLoggingOut ? 'Logging out...' : 'Log out'}</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="flex items-center gap-3">
                                <Link
                                    href="/login"
                                    className={`
                                        hidden sm:flex h-14 items-center rounded-2xl px-8 text-[16px] font-semibold
                                        transition-all duration-200
                                        ${scrolled
                                            ? 'text-slate-600 hover:text-slate-900'
                                            : 'text-white hover:text-white/80'
                                        }
                                    `}
                                >
                                    Sign In
                                </Link>
                                <Link
                                    href="/register"
                                    className={`
                                        flex h-14 items-center rounded-2xl px-9 text-[16px] font-bold text-white
                                        transition-all duration-200 hover:shadow-lg hover:shadow-emerald-600/25 hover:scale-[1.03] active:scale-[0.98]
                                        ${scrolled
                                            ? 'bg-gradient-to-r from-emerald-500 to-emerald-700'
                                            : 'bg-emerald-500/90 backdrop-blur-sm hover:bg-emerald-600'
                                        }
                                    `}
                                >
                                    Get Started
                                </Link>
                            </div>
                        )}

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={`lg:hidden flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-200 cursor-pointer ${scrolled ? 'text-slate-600 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
                            aria-label="Toggle Menu"
                        >
                            {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                        </button>

                    </div>
                </div>
            </header>

            {/* ===== Mobile Menu Overlay ===== */}
            {mobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-60 bg-black/30 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setMobileMenuOpen(false)} />
            )}

            {/* ===== Mobile Menu Drawer ===== */}
            <div
                className={`
                    lg:hidden fixed top-0 right-0 z-70 h-full w-[88vw] max-w-100 bg-white shadow-[-8px_0_48px_rgba(0,0,0,0.12)]
                    transition-transform duration-300 ease-out
                    ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                `}
            >
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
                        <Link href="/" className="flex items-center gap-3.5" onClick={() => setMobileMenuOpen(false)}>
                            <Image src="/logo1.png" alt="Logo" width={60} height={60} className="h-15 w-15 rounded-xl" />
                            <div>
                                <h2 className="text-[19px] font-black text-slate-900">Ceylon Vidu</h2>
                                <p className="text-[11px] text-emerald-600 font-semibold tracking-[0.2em] uppercase">Tours &amp; Experiences</p>
                            </div>
                        </Link>
                        <button onClick={() => setMobileMenuOpen(false)} className="flex h-11 w-11 items-center justify-center rounded-2xl text-slate-400 hover:bg-slate-100 hover:text-slate-600">
                            <X className="h-6 w-6" />
                        </button>
                    </div>

                    <nav className="flex-1 overflow-y-auto px-5 py-5 space-y-1">
                        {navItems.map((item) => {
                            const isActive = isActiveRoute(item.href);
                            const hasDropdown = item.dropdown && item.dropdown.length > 0;

                            if (hasDropdown) {
                                const isOpen = openDropdown === item.name;
                                return (
                                    <div key={item.name} className="space-y-0.5">
                                        <div className={`flex w-full items-center justify-between rounded-xl transition-all duration-200 text-[16px] font-semibold min-h-14 ${isActive || isOpen ? 'bg-emerald-50 text-emerald-700' : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'}`}>
                                            <Link href={item.href} onClick={() => setMobileMenuOpen(false)} className="flex-1 px-5 py-4">
                                                <span>{item.name}</span>
                                            </Link>
                                            <button onClick={() => toggleDropdown(item.name)} className="px-5 py-4 cursor-pointer">
                                                <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-emerald-600' : 'text-slate-400'}`} />
                                            </button>
                                        </div>
                                        {isOpen && (
                                            <div className="ml-5 space-y-0.5 border-l-2 border-slate-100 pl-5">
                                                {item.dropdown.map((subItem) => {
                                                    const Icon = subItem.icon;
                                                    const isSubActive = isActiveRoute(subItem.href);
                                                    return (
                                                        <Link key={subItem.name} href={subItem.href} onClick={() => setMobileMenuOpen(false)} className={`flex items-center gap-4 px-5 py-3.5 rounded-xl text-[15px] font-medium min-h-13 transition-all duration-200 ${isSubActive ? 'bg-emerald-50 text-emerald-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}>
                                                            <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${isSubActive ? 'bg-emerald-100' : 'bg-slate-100'}`}>
                                                                <Icon className={`h-4.5 w-4.5 ${isSubActive ? 'text-emerald-600' : 'text-slate-400'}`} />
                                                            </span>
                                                            <span>{subItem.name}</span>
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>
                                );
                            }

                            return (
                                <Link key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)} className={`flex items-center px-5 py-4 rounded-xl text-[16px] font-semibold min-h-14 transition-all duration-200 ${isActive ? 'bg-emerald-50 text-emerald-700' : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'}`}>
                                    <span>{item.name}</span>
                                    {isActive && <span className="ml-auto h-2.5 w-2.5 rounded-full bg-emerald-500" />}
                                </Link>
                            );
                        })}

                        <div className="pt-5 mt-5 border-t border-slate-100 space-y-3">
                            {(!user || user.role !== 'CUSTOMER') && (
                                <>
                                    <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center px-5 py-4.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-[16px] min-h-14 hover:border-slate-300 hover:bg-slate-50 transition-all">
                                        Sign In
                                    </Link>
                                    <Link href="/register" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center px-5 py-4.5 rounded-xl text-white font-bold text-[16px] min-h-14 transition-all duration-200 hover:shadow-lg hover:shadow-emerald-600/25" style={{ background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 60%, #15803d 100%)', boxShadow: '0 2px 12px rgba(22, 163, 74, 0.3)' }}>
                                        Get Started — It&apos;s Free
                                    </Link>
                                </>
                            )}
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}