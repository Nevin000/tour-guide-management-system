'use client';

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
    Eye,
    EyeOff,
    Lock,
    Mail,
    Loader2,
    ArrowRight,
    MapPinned
} from 'lucide-react';

import { useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import { authService } from '@/services/auth.service';
import { useAuthStore } from '@/stores/auth.store';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// ============================================
// Hero Images Data with Matching Content
// ============================================
const heroImages = [
    {
        url: '/Sigiriya.png',
        badge: '🏛️ UNESCO HERITAGE',
        title: 'Sigiriya Rock Fortress',
        description: 'Ancient kingdom rising from the mist, a wonder of the ancient world.',
        location: 'Central Province',
        tag: '8th Century AD'
    },
    {
        url: '/Ella.jpg',
        badge: '🌿 SCENIC WONDERS',
        title: 'Ella Nine Arch Bridge',
        description: 'Colonial-era architectural marvel in the lush green hills.',
        location: 'Badulla District',
        tag: '1921 Built'
    },
    {
        url: '/Mirissa.jpg',
        badge: '🏖️ COASTAL PARADISE',
        title: 'Mirissa Beach',
        description: 'Golden sands and crystal waters of Sri Lanka\'s southern coast.',
        location: 'Southern Province',
        tag: 'Blue Whale Watching'
    },
    {
        url: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=1920&q=80',
        badge: '🐆 WILDLIFE ADVENTURE',
        title: 'Yala National Park',
        description: 'Home to the highest density of leopards in the world.',
        location: 'Southern Province',
        tag: '44 Species'
    }
];

// ============================================
// Validation Schema
// ============================================
const loginSchema = z.object({
    email: z
        .string()
        .min(1, 'Email is required')
        .email('Please enter a valid email address'),
    password: z
        .string()
        .min(1, 'Password is required')
        .min(6, 'Password must be at least 6 characters'),
    rememberMe: z.boolean().optional(),
});

type LoginFormData = z.infer<typeof loginSchema>;

// ============================================
// Main Component
// ============================================
export default function LoginPage() {
    // States
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const [isPageLoaded, setIsPageLoaded] = useState(false);

    // Hooks
    const router = useRouter();
    const { setAuth } = useAuthStore();

    // Form
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
    });

    const rememberMe = useWatch({ control, name: 'rememberMe' });

    // ============================================
    // Auto Slide Function
    // ============================================
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    // ============================================
    // Page Load Animation
    // ============================================
    useEffect(() => {
        const timer = setTimeout(() => setIsPageLoaded(true), 0);
        return () => clearTimeout(timer);
    }, []);

    // ============================================
    // Submit Handler
    // ============================================
    const onSubmit = async (data: LoginFormData) => {
        try {
            setIsLoading(true);

            const response = await authService.login({
                email: data.email,
                password: data.password,
            });

            if (!response.success) {
                toast.error(response.message);
                return;
            }

            setAuth(
                response.data.user,
                response.data.accessToken
            );

            toast.success('Welcome back! 🎉');

            if (response.data.user.role === 'ADMIN') {
                router.replace('/admin/dashboard');
            } else {
                router.replace('/');
            }
        } catch (error) {
            console.error('Login error:', error);

            if (axios.isAxiosError(error)) {
                const message =
                    error.response?.data?.message || 'Login failed. Please try again.';
                toast.error(message);
                return;
            }

            toast.error('Something went wrong. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    // ============================================
    // Render
    // ============================================
    const currentSlide = heroImages[currentImage];

    return (
        <div className={`
            relative min-h-screen w-full flex items-center justify-center bg-slate-100 p-6 sm:p-8 md:p-10 lg:p-12
            transition-all duration-1000 ease-out
            ${isPageLoaded ? 'opacity-100' : 'opacity-0'}
        `}>

            {/* ===== Main Container ===== */}
            <div className="relative w-full max-w-8xl min-h-[88vh] max-h-[93vh] flex items-stretch gap-6 lg:gap-10">

                {/* ======================================== */}
                {/* LEFT BOX - Hero Section with Auto Slider (No Logo) */}
                {/* ======================================== */}
                <div className="hidden lg:flex lg:w-[48%] min-h-full rounded-[32px] overflow-hidden shadow-2xl shadow-slate-200/50 ml-5 lg:ml-15">
                    <div className="relative w-full bg-linear-to-br from-slate-900 via-teal-900 to-slate-800">

                        {/* ===== Image Slider ===== */}
                        {heroImages.map((image, index) => (
                            <div
                                key={index}
                                className={`
                                    absolute inset-0 w-full h-full
                                    transition-all duration-1000 ease-in-out
                                    ${index === currentImage
                                        ? 'opacity-100 scale-100'
                                        : 'opacity-0 scale-110'
                                    }
                                `}
                                style={{
                                    backgroundImage: `url(${image.url})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            />
                        ))}

                        {/* ===== Gradient Overlay ===== */}
                        <div className="absolute inset-0 bg-linear-to-br from-black/80 via-teal-900/70 to-black/40 z-10" />

                        {/* ===== Decorative Pattern ===== */}
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30 z-10" />

                        {/* ===== Content - No Logo ===== */}
                        <div className="relative z-20 h-full flex flex-col justify-center items-center p-10 xl:p-14">

                            {/* Middle - Dynamic Content (Centered) */}
                            <div className="max-w-xl space-y-8 text-center">
                                <div className="space-y-5">
                                    {/* Badge */}
                                    <span className="
                                        inline-block px-6 py-2.5 text-base font-bold tracking-wider uppercase 
                                        text-amber-300 bg-amber-400/10 backdrop-blur-sm rounded-full 
                                        border border-amber-400/20
                                        transition-all duration-700
                                    ">
                                        {currentSlide.badge}
                                    </span>

                                    {/* Title */}
                                    <h1 className="
                                        text-5xl xl:text-7xl font-bold text-white leading-[1.1]
                                        transition-all duration-700
                                    ">
                                        {currentSlide.title}
                                    </h1>

                                    {/* Description */}
                                    <p className="
                                        text-white/90 text-xl xl:text-2xl leading-relaxed max-w-lg mx-auto
                                        transition-all duration-700
                                    ">
                                        {currentSlide.description}
                                    </p>

                                    {/* Location & Tag */}
                                    <div className="flex items-center justify-center gap-5 text-base">
                                        <span className="text-amber-300/90 flex items-center gap-2">
                                            <MapPinned className="h-5 w-5" />
                                            {currentSlide.location}
                                        </span>
                                        <span className="w-px h-5 bg-white/20" />
                                        <span className="text-white/70 text-base">
                                            {currentSlide.tag}
                                        </span>
                                    </div>
                                </div>

                                {/* Explore Button */}
                                <Button
                                    className="
                                        bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold 
                                        rounded-full px-10 py-7 text-xl shadow-2xl shadow-amber-400/20 
                                        hover:shadow-amber-400/40 transition-all duration-300 hover:scale-105
                                    "
                                    onClick={() => router.push('/destinations')}
                                >
                                    Explore Tours
                                    <ArrowRight className="ml-2 h-6 w-6" />
                                </Button>
                            </div>

                            {/* Bottom - Dots Indicator */}
                            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2.5">
                                {heroImages.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`
                                            transition-all duration-700 rounded-full
                                            focus:outline-none focus:ring-2 focus:ring-amber-400/50
                                            ${index === currentImage
                                                ? 'w-12 h-2.5 bg-amber-400'
                                                : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/50'
                                            }
                                        `}
                                        aria-label={`Slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ======================================== */}
                {/* RIGHT BOX - Login Form (With Logo) - Matching Padding */}
                {/* ======================================== */}
                <div className="flex-1 lg:w-[52%] flex items-center justify-center mr-5 lg:mr-15">

                    {/* ===== Login Card Box - Padding Matched with Left Side ===== */}
                    <div className={`
                        w-full max-w-230 mx-auto h-full bg-white rounded-[32px] shadow-2xl shadow-slate-200/50 
                        px-14 py-12 xl:px-16 xl:py-14 flex flex-col justify-center
                        transition-all duration-1000 delay-300
                        ${isPageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                    `}>

                        {/* ===== Logo - Centered Large ===== */}
                        <div className="flex items-center justify-center mb-6">
                            <div className="relative w-56 h-56 rounded-2xl p-2">
                                <Image
                                    src="/logo1.png"
                                    alt="Ceylon Vidu Tours Logo"
                                    width={224}
                                    height={224}
                                    className="object-contain rounded-xl"
                                />
                            </div>
                        </div>

                        {/* ===== Header ===== */}
                        <div className="text-center mb-10">
                            <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 tracking-tight">
                                Welcome Back
                                <span className="inline-block ml-3">👋</span>
                            </h1>
                            <p className="text-xl sm:text-2xl text-slate-500 mt-2">
                                Sign in to continue your journey
                            </p>
                        </div>

                        {/* ===== Form ===== */}
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                            {/* ===== Email ===== */}
                            <div className="space-y-2.5">
                                <Label htmlFor="email" className="text-xl font-bold text-slate-700">
                                    Email Address
                                </Label>
                                <div className="relative group">
                                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-400 transition-all duration-300 group-focus-within:text-teal-600 group-focus-within:scale-110" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        autoFocus
                                        className={`
                                            w-full h-17 pl-14 pr-5
                                            text-2xl text-slate-900
                                            bg-white
                                            border-2 border-slate-200
                                            rounded-2xl
                                            transition-all duration-300
                                            focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 focus:shadow-lg
                                            hover:border-slate-300 hover:shadow-md
                                            placeholder:text-xl placeholder:text-slate-400
                                            ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10' : ''}
                                        `}
                                        {...register('email')}
                                    />
                                </div>
                                {errors.email && (
                                    <p className="text-sm text-red-500 animate-in slide-in-from-top-1 duration-200">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                            {/* ===== Password ===== */}
                            <div className="space-y-2.5">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="password" className="text-xl font-bold text-slate-700">
                                        Password
                                    </Label>
                                </div>
                                <div className="relative group">
                                    <Lock className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-400 transition-all duration-300 group-focus-within:text-teal-600 group-focus-within:scale-110" />
                                    <Input
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Enter your password"
                                        className={`
                                            w-full h-17 pl-14 pr-14
                                            text-2xl text-slate-900
                                            bg-white
                                            border-2 border-slate-200
                                            rounded-2xl
                                            transition-all duration-300
                                            focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 focus:shadow-lg
                                            hover:border-slate-300 hover:shadow-md
                                            placeholder:text-xl placeholder:text-slate-400
                                            ${errors.password ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10' : ''}
                                        `}
                                        {...register('password')}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-all duration-300 hover:scale-110"
                                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-6 w-6" />
                                        ) : (
                                            <Eye className="h-6 w-6" />
                                        )}
                                    </button>
                                </div>
                                {errors.password && (
                                    <p className="text-sm text-red-500 animate-in slide-in-from-top-1 duration-200">
                                        {errors.password.message}
                                    </p>
                                )}
                            </div>

                            {/* ===== Remember & Forgot ===== */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
                                <div className="flex items-center gap-3">
                                    <Checkbox
                                        id="rememberMe"
                                        className="h-6 w-6 border-2 border-slate-300 data-[state=checked]:bg-teal-600 data-[state=checked]:border-teal-600 transition-all duration-200 rounded-xl"
                                        checked={rememberMe}
                                        onCheckedChange={(checked) => setValue('rememberMe', checked === true)}
                                    />
                                    <Label
                                        htmlFor="rememberMe"
                                        className="text-lg text-slate-600 cursor-pointer select-none hover:text-slate-800 transition-colors"
                                    >
                                        Remember me
                                    </Label>
                                </div>
                                <Link
                                    href="/forgot-password"
                                    className="text-lg font-bold text-teal-600 hover:text-teal-700 hover:underline transition-colors"
                                >
                                    Forgot password?
                                </Link>
                            </div>

                            {/* ===== Submit Button ===== */}
                            <Button
                                type="submit"
                                className={`
                                    w-full h-17 text-xl font-bold rounded-2xl
                                    bg-linear-to-r from-teal-600 to-teal-700
                                    hover:from-teal-700 hover:to-teal-800
                                    text-white
                                    shadow-2xl shadow-teal-600/30
                                    hover:shadow-3xl hover:shadow-teal-600/40
                                    transition-all duration-300
                                    hover:scale-[1.02] active:scale-[0.98]
                                    group
                                    disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100
                                `}
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                                        Signing in...
                                    </>
                                ) : (
                                    <>
                                        Sign in to your account
                                        <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1.5 transition-transform" />
                                    </>
                                )}
                            </Button>

                            {/* ===== Register ===== */}
                            <div className="text-center">
                                <p className="text-lg text-slate-500">
                                    Don&apos;t have an account?{' '}
                                    <Link
                                        href="/register"
                                        className="font-bold text-teal-600 hover:text-teal-700 hover:underline transition-colors"
                                    >
                                        Create new account now
                                    </Link>
                                </p>
                            </div>

                            {/* ===== Trust Badges ===== */}
                            <div className="flex justify-center items-center gap-6 pt-5 border-t border-slate-100">
                                <div className="flex items-center gap-2.5 text-base text-slate-400">
                                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-teal-500" />
                                    Secure
                                </div>
                                <div className="w-px h-6 bg-slate-200" />
                                <div className="flex items-center gap-2.5 text-base text-slate-400">
                                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-teal-500" />
                                    Encrypted
                                </div>
                                <div className="w-px h-6 bg-slate-200" />
                                <div className="flex items-center gap-2.5 text-base text-slate-400">
                                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-teal-500" />
                                    24/7 Support
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

            {/* ===== Footer ===== */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400 text-xs whitespace-nowrap">
                © 2026 Ceylon Vidu Tours. All rights reserved.
            </div>
        </div>
    );
}