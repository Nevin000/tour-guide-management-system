'use client';

import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { Country, State } from 'country-state-city';
import {
    Eye,
    EyeOff,
    User,
    Users,
    Mail,
    Lock,
    Phone,
    MapPin,
    Globe,
    Loader2,
    ArrowRight
} from 'lucide-react';
import { useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import dynamic from 'next/dynamic';
import type SelectType from 'react-select';
import type { StylesConfig, SingleValue, GroupBase } from 'react-select';

import { authService } from '@/services/auth.service';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const Select = dynamic(() => import('react-select'), {
    ssr: false,
}) as typeof SelectType;

// ============================================
// Hero Images Data
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
// Types
// ============================================
type Option = {
    value: string;
    label: string;
    phoneCode?: string;
};

// ============================================
// Validation Schema
// ============================================
const registerSchema = z
    .object({
        firstName: z.string().trim().min(2, 'First name must be at least 2 characters').max(100),
        lastName: z.string().trim().min(2, 'Last name must be at least 2 characters').max(100),
        gender: z.enum(['MALE', 'FEMALE', 'OTHER', 'PREFER_NOT_TO_SAY']),
        email: z.string().trim().email('Please enter a valid email address').toLowerCase(),
        phone: z
            .string()
            .trim()
            .regex(/^\+?[1-9]\d{7,14}$/, 'Invalid phone format (e.g. +94771234567)'),
        country: z.string().trim().min(2, 'Country is required').max(100),
        stateProvince: z.string().trim().min(2, 'Province is required').max(100),
        password: z
            .string()
            .min(8, 'Password must contain at least 8 characters')
            .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
            .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
            .regex(/[0-9]/, 'Password must contain at least one number')
            .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),
        confirmPassword: z.string(),
        terms: z.boolean(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Passwords do not match',
        path: ['confirmPassword'],
    })
    .refine((data) => data.terms === true, {
        message: 'You must accept the terms',
        path: ['terms'],
    });

type RegisterFormData = z.infer<typeof registerSchema>;

// ============================================
// Main Component
// ============================================
export default function RegisterForm() {
    // States
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState<Option | null>(null);
    const [selectedState, setSelectedState] = useState<Option | null>(null);
    const [phoneCode, setPhoneCode] = useState('+94');
    const [currentImage, setCurrentImage] = useState(0);
    const [isPageLoaded, setIsPageLoaded] = useState(false);

    // Hooks
    const router = useRouter();

    const {
        control,
        register,
        handleSubmit,
        setValue,
        setError,
        formState: { errors },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            gender: 'MALE',
            terms: false,
        },
    });

    const terms = useWatch({ control, name: 'terms' });

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
    // Country & State Options
    // ============================================
    const countryOptions: Option[] = Country.getAllCountries().map((country) => ({
        value: country.isoCode,
        label: country.name,
        phoneCode: `+${country.phonecode}`,
    }));

    const stateOptions: Option[] = selectedCountry
        ? State.getStatesOfCountry(selectedCountry.value).map((state) => ({
            value: state.isoCode,
            label: state.name,
        }))
        : [];

    // ============================================
    // Submit Handler
    // ============================================
    const onSubmit = async (data: RegisterFormData) => {
        try {
            setIsLoading(true);

            const response = await authService.register({
                firstName: data.firstName,
                lastName: data.lastName,
                gender: data.gender,
                email: data.email,
                phone: data.phone,
                password: data.password,
                confirmPassword: data.confirmPassword,
                country: data.country,
                stateProvince: data.stateProvince,
            });

            if (!response.success) {
                toast.error(response.message);
                return;
            }

            toast.success('Account created successfully 🎉');
            router.push('/login');
        } catch (error) {
            console.error('Registration error:', error);

            if (axios.isAxiosError(error)) {
                const resData = error.response?.data;
                const fieldErrors = resData?.errors?.fieldErrors;

                if (fieldErrors && typeof fieldErrors === 'object') {
                    for (const [field, messages] of Object.entries(fieldErrors)) {
                        if (Array.isArray(messages) && messages[0]) {
                            setError(field as keyof RegisterFormData, {
                                type: 'manual',
                                message: messages[0],
                            });
                        }
                    }
                    const firstField = Object.keys(fieldErrors)[0];
                    const firstMsg = fieldErrors[firstField]?.[0];
                    toast.error(firstMsg || resData?.message || 'Registration failed.');
                    return;
                }

                toast.error(resData?.message || 'Registration failed.');
                return;
            }

            toast.error('Something went wrong.');
        } finally {
            setIsLoading(false);
        }
    };

    // ============================================
    // Custom Select Styles
    // ============================================
    const customSelectStyles: StylesConfig<Option, false, GroupBase<Option>> = {
        control: (base, state) => ({
            ...base,
            height: '68px',
            minHeight: '68px',
            borderRadius: '16px',
            borderColor: state.isFocused ? '#0D9488' : '#e2e8f0',
            borderWidth: '2px',
            boxShadow: state.isFocused ? '0 0 0 4px rgba(13, 148, 136, 0.1)' : 'none',
            '&:hover': {
                borderColor: state.isFocused ? '#0D9488' : '#cbd5e1',
            },
        }),
        placeholder: (base) => ({
            ...base,
            color: '#94a3b8',
            fontSize: '18px',
        }),
        singleValue: (base) => ({
            ...base,
            fontSize: '20px',
            color: '#0f172a',
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isSelected ? '#0D9488' : state.isFocused ? '#f0fdfa' : 'white',
            color: state.isSelected ? 'white' : '#0f172a',
            '&:hover': {
                backgroundColor: state.isSelected ? '#0D9488' : '#f0fdfa',
            },
        }),
        dropdownIndicator: (base) => ({
            ...base,
            color: '#94a3b8',
        }),
        indicatorSeparator: (base) => ({
            ...base,
            display: 'none',
        }),
    };

    // ============================================
    // Handle Country Change
    // ============================================
    const handleCountryChange = (option: SingleValue<Option>) => {
        if (option) {
            setSelectedCountry(option);
            setPhoneCode(option.phoneCode || '+94');
            setSelectedState(null);
            setValue('country', option.label, { shouldValidate: true });
            setValue('stateProvince', '');
        } else {
            setSelectedCountry(null);
            setPhoneCode('+94');
            setValue('country', '', { shouldValidate: true });
            setValue('stateProvince', '');
        }
    };

    // ============================================
    // Handle State Change
    // ============================================
    const handleStateChange = (option: SingleValue<Option>) => {
        if (option) {
            setSelectedState(option);
            setValue('stateProvince', option.label, { shouldValidate: true });
        } else {
            setSelectedState(null);
            setValue('stateProvince', '', { shouldValidate: true });
        }
    };

    return (
        <div className={`
            relative min-h-screen w-full flex items-center justify-center bg-white p-4 sm:p-6 md:p-8 lg:p-10
            transition-all duration-1000 ease-out
            ${isPageLoaded ? 'opacity-100' : 'opacity-0'}
        `}>

            {/* ===== Main Container ===== */}
            <div className="relative w-full max-w-8xl min-h-[88vh] max-h-[95vh] flex items-stretch gap-6 lg:gap-10">

                {/* ======================================== */}
                {/* LEFT BOX - Clean Light Background with High-Movement Screensaver Floating Bubbles */}
                {/* ======================================== */}
                <div className="hidden lg:flex lg:w-[45%] xl:w-[48%] min-h-full rounded-[32px] overflow-hidden shadow-2xl shadow-slate-200/50 ml-5 lg:ml-15 bg-linear-to-b from-teal-50/50 via-white to-slate-50/60 text-slate-900 relative border border-slate-100">

                    {/* ===== Soft Ambient Background Glows ===== */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                        <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-teal-400/10 blur-3xl animate-pulse" />
                        <div className="absolute bottom-20 right-10 w-56 h-56 rounded-full bg-amber-400/10 blur-3xl animate-pulse delay-1000" />
                        <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-teal-300/10 blur-3xl animate-pulse delay-700" />
                    </div>

                    <div className="relative z-10 w-full flex flex-col justify-between items-center p-6 xl:p-10 h-full">

                        {/* Inline Keyframes for Expanded High-Movement Floating Motion */}
                        <style jsx>{`
                            @keyframes floatBubbleWide1 {
                                0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
                                25% { transform: translate(55px, -45px) rotate(3deg); }
                                50% { transform: translate(-45px, -70px) rotate(-3deg); }
                                75% { transform: translate(-60px, -20px) rotate(2deg); }
                            }
                            @keyframes floatBubbleWide2 {
                                0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
                                25% { transform: translate(-65px, 50px) rotate(-3deg); }
                                50% { transform: translate(45px, 70px) rotate(3deg); }
                                75% { transform: translate(60px, -25px) rotate(-2deg); }
                            }
                            @keyframes floatBubbleWide3 {
                                0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
                                25% { transform: translate(65px, -50px) rotate(3deg); }
                                50% { transform: translate(-40px, 55px) rotate(-3deg); }
                                75% { transform: translate(-55px, -45px) rotate(2deg); }
                            }
                            @keyframes floatBubbleWide4 {
                                0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
                                25% { transform: translate(-50px, -60px) rotate(-3deg); }
                                50% { transform: translate(60px, -30px) rotate(3deg); }
                                75% { transform: translate(40px, 55px) rotate(-2deg); }
                            }
                            .screensaver-float-0 { animation: floatBubbleWide1 9s ease-in-out infinite; }
                            .screensaver-float-1 { animation: floatBubbleWide2 10s ease-in-out infinite; }
                            .screensaver-float-2 { animation: floatBubbleWide3 11s ease-in-out infinite; }
                            .screensaver-float-3 { animation: floatBubbleWide4 9.5s ease-in-out infinite; }
                        `}</style>

                        {/* Top Header Badge & Service Description */}
                        <div className="pt-2 text-center space-y-3 max-w-lg mx-auto z-10">
                            <span className="inline-block px-6 py-2.5 text-sm sm:text-base font-extrabold tracking-wider text-teal-800 uppercase bg-teal-100/90 rounded-full border border-teal-300 shadow-sm">
                                ✨ Our Premium Services
                            </span>
                            <h2 className="text-2xl sm:text-3xl xl:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                                Explore Sri Lanka with Verified Tour Guides
                            </h2>
                            <p className="text-sm sm:text-base font-medium text-slate-600 leading-relaxed">
                                Seamless tour bookings, certified local guides, custom travel packages, and 24/7 support for your dream journey across Ceylon.
                            </p>
                        </div>

                        {/* Screensaver Floating Area */}
                        <div className="relative w-full h-125 xl:h-130 max-w-xl mx-auto flex items-center justify-center my-auto">
                            {heroImages.map((image, index) => {
                                const isSelected = index === currentImage;
                                const floatClass = `screensaver-float-${index}`;

                                const positions = [
                                    "top-2 left-2",       // Top-Left
                                    "top-2 right-2",      // Top-Right
                                    "bottom-2 left-2",    // Bottom-Left
                                    "bottom-2 right-2",   // Bottom-Right
                                ];

                                return (
                                    <div
                                        key={index}
                                        className={`absolute ${positions[index]} ${floatClass} transition-all duration-700 ease-out`}
                                    >
                                        <button
                                            type="button"
                                            onClick={() => setCurrentImage(index)}
                                            className={`
                                                group relative flex flex-col items-center gap-2.5 focus:outline-none cursor-pointer
                                                ${isSelected ? 'z-30' : 'z-10'}
                                            `}
                                        >
                                            {/* Bubble Circle */}
                                            <div
                                                className={`
                                                    relative rounded-full overflow-hidden
                                                    transition-all duration-700 ease-in-out transform-gpu
                                                    ${isSelected
                                                        ? 'w-44 h-44 sm:w-52 sm:h-52 xl:w-60 xl:h-60 scale-110 ring-4 ring-teal-500 ring-offset-4 ring-offset-white shadow-2xl shadow-teal-500/35'
                                                        : 'w-28 h-28 sm:w-32 sm:h-32 xl:w-36 xl:h-36 opacity-85 hover:opacity-100 hover:scale-105 ring-2 ring-slate-200 hover:ring-teal-400/60 shadow-lg'
                                                    }
                                                `}
                                            >
                                                <Image
                                                    src={image.url}
                                                    alt={image.title}
                                                    fill
                                                    sizes="(max-width: 768px) 160px, 240px"
                                                    className={`
                                                        object-cover transition-transform duration-700 ease-out
                                                        ${isSelected ? 'scale-115' : 'group-hover:scale-110'}
                                                    `}
                                                />
                                                {/* Glossy Bubble Reflection Overlay */}
                                                <div className="absolute inset-0 bg-linear-to-tr from-black/20 via-transparent to-white/40 rounded-full border border-white/40 pointer-events-none" />
                                            </div>

                                            {/* Bubble Title Label */}
                                            <span className={`
                                                text-xs sm:text-sm font-bold tracking-wide transition-all duration-500 text-center max-w-35 truncate px-3.5 py-1.5 rounded-full border shadow-sm
                                                ${isSelected
                                                    ? 'bg-teal-600 text-white font-extrabold shadow-teal-600/20 border-teal-600 scale-105'
                                                    : 'bg-white/95 text-slate-700 border-slate-200 group-hover:text-teal-700 group-hover:border-teal-300'
                                                }
                                            `}>
                                                {image.title}
                                            </span>
                                        </button>
                                    </div>
                                );
                            })}
                        </div>



                    </div>
                </div>

                {/* ======================================== */}
                {/* RIGHT BOX - Register Form */}
                {/* ======================================== */}
                <div className="flex-1 lg:w-[55%] xl:w-[52%] overflow-y-auto max-h-[94vh] py-4 mr-5 lg:mr-15">

                    {/* ===== Register Card Box ===== */}
                    <div className={`
                        w-full max-w-230 mx-auto my-auto bg-white rounded-[32px] shadow-2xl shadow-slate-200/50 
                        px-10 py-10 sm:px-14 sm:py-12 xl:px-16 xl:py-14 flex flex-col justify-center
                        transition-all duration-1000 delay-300
                        ${isPageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                    `}>

                        {/* ===== Logo - Centered Large (Same as Login Page) ===== */}
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
                        <div className="text-center mb-8">
                            <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
                                Create Account
                                <span className="inline-block ml-3">🚀</span>
                            </h1>
                            <p className="text-lg sm:text-xl text-slate-500 mt-2">
                                Join Ceylon Vidu Tours and start your journey
                            </p>
                        </div>

                        {/* ===== Form ===== */}
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                            {/* ===== 1st Row: First & Last Name ===== */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2.5">
                                    <Label htmlFor="firstName" className="text-xl font-bold text-slate-700 flex items-center gap-2">
                                        <User className="h-5 w-5 text-teal-600" />
                                        First Name
                                    </Label>
                                    <Input
                                        id="firstName"
                                        placeholder="John"
                                        className={`
                                            w-full h-17 px-5
                                            text-2xl text-slate-900 bg-white
                                            border-2 border-slate-200 rounded-2xl
                                            transition-all duration-300
                                            focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 focus:shadow-lg
                                            hover:border-slate-300 hover:shadow-md
                                            placeholder:text-xl placeholder:text-slate-400
                                            ${errors.firstName ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10' : ''}
                                        `}
                                        {...register('firstName')}
                                    />
                                    {errors.firstName && (
                                        <p className="text-sm text-red-500 animate-in slide-in-from-top-1 duration-200">
                                            {errors.firstName.message}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2.5">
                                    <Label htmlFor="lastName" className="text-xl font-bold text-slate-700 flex items-center gap-2">
                                        <User className="h-5 w-5 text-teal-600" />
                                        Last Name
                                    </Label>
                                    <Input
                                        id="lastName"
                                        placeholder="Doe"
                                        className={`
                                            w-full h-17 px-5
                                            text-2xl text-slate-900 bg-white
                                            border-2 border-slate-200 rounded-2xl
                                            transition-all duration-300
                                            focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 focus:shadow-lg
                                            hover:border-slate-300 hover:shadow-md
                                            placeholder:text-xl placeholder:text-slate-400
                                            ${errors.lastName ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10' : ''}
                                        `}
                                        {...register('lastName')}
                                    />
                                    {errors.lastName && (
                                        <p className="text-sm text-red-500 animate-in slide-in-from-top-1 duration-200">
                                            {errors.lastName.message}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* ===== 2nd Row: Country & State / Province ===== */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2.5">
                                    <Label className="text-xl font-bold text-slate-700 flex items-center gap-2">
                                        <Globe className="h-5 w-5 text-teal-600" />
                                        Country
                                    </Label>
                                    <Select
                                        options={countryOptions}
                                        placeholder="Select Country"
                                        value={selectedCountry}
                                        onChange={handleCountryChange}
                                        styles={customSelectStyles}
                                        className="text-base"
                                        classNamePrefix="react-select"
                                    />
                                    {errors.country && (
                                        <p className="text-sm text-red-500 animate-in slide-in-from-top-1 duration-200">
                                            {errors.country.message}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2.5">
                                    <Label className="text-xl font-bold text-slate-700 flex items-center gap-2">
                                        <MapPin className="h-5 w-5 text-teal-600" />
                                        Province / State
                                    </Label>
                                    <Select
                                        options={stateOptions}
                                        placeholder="Select Province"
                                        value={selectedState}
                                        isDisabled={!selectedCountry}
                                        onChange={handleStateChange}
                                        styles={customSelectStyles}
                                        className="text-base"
                                        classNamePrefix="react-select"
                                    />
                                    {errors.stateProvince && (
                                        <p className="text-sm text-red-500 animate-in slide-in-from-top-1 duration-200">
                                            {errors.stateProvince.message}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* ===== 3rd Row: Gender & Phone Number ===== */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2.5">
                                    <Label htmlFor="gender" className="text-xl font-bold text-slate-700 flex items-center gap-2">
                                        <Users className="h-5 w-5 text-teal-600" />
                                        Gender
                                    </Label>
                                    <select
                                        id="gender"
                                        {...register('gender')}
                                        className="w-full h-17 rounded-2xl border-2 border-slate-200 px-5 bg-white focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all duration-300 text-2xl font-medium text-slate-900 hover:border-slate-300 hover:shadow-md"
                                    >
                                        <option value="MALE">Male</option>
                                        <option value="FEMALE">Female</option>
                                        <option value="OTHER">Other</option>
                                        <option value="PREFER_NOT_TO_SAY">Prefer not to say</option>
                                    </select>
                                    {errors.gender && (
                                        <p className="text-sm text-red-500 animate-in slide-in-from-top-1 duration-200">
                                            {errors.gender.message}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2.5">
                                    <Label htmlFor="phone" className="text-xl font-bold text-slate-700 flex items-center gap-2">
                                        <Phone className="h-5 w-5 text-teal-600" />
                                        Phone Number
                                    </Label>
                                    <div className="flex">
                                        <div className="flex items-center justify-center gap-2 w-28 rounded-l-2xl border-2 border-r-0 border-slate-200 bg-slate-50 px-3 h-17">
                                            <ReactCountryFlag
                                                countryCode={selectedCountry?.value || "LK"}
                                                svg
                                                style={{
                                                    width: "1.6rem",
                                                    height: "1.6rem",
                                                }}
                                            />
                                            <span className="text-base font-bold text-slate-700">
                                                {phoneCode}
                                            </span>
                                        </div>
                                        <Input
                                            id="phone"
                                            {...register('phone')}
                                            className={`
                                                rounded-l-none h-17 rounded-r-2xl border-2 border-slate-200 
                                                text-2xl text-slate-900 bg-white px-5
                                                focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 focus:shadow-lg
                                                hover:border-slate-300 hover:shadow-md
                                                transition-all duration-300 
                                                placeholder:text-xl placeholder:text-slate-400
                                                ${errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10' : ''}
                                            `}
                                            placeholder="771234567"
                                        />
                                    </div>
                                    {errors.phone && (
                                        <p className="text-sm text-red-500 animate-in slide-in-from-top-1 duration-200">
                                            {errors.phone.message}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* ===== 4th Row: Email Address ===== */}
                            <div className="space-y-2.5">
                                <Label htmlFor="email" className="text-xl font-bold text-slate-700 flex items-center gap-2">
                                    <Mail className="h-5 w-5 text-teal-600" />
                                    Email Address
                                </Label>
                                <div className="relative group">
                                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-400 transition-all duration-300 group-focus-within:text-teal-600 group-focus-within:scale-110" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        className={`
                                            w-full h-17 pl-14 pr-5
                                            text-2xl text-slate-900 bg-white
                                            border-2 border-slate-200 rounded-2xl
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

                            {/* ===== 5th Row: Password & Confirm Password ===== */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2.5">
                                    <Label htmlFor="password" className="text-xl font-bold text-slate-700 flex items-center gap-2">
                                        <Lock className="h-5 w-5 text-teal-600" />
                                        Password
                                    </Label>
                                    <div className="relative group">
                                        <Lock className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-400 transition-all duration-300 group-focus-within:text-teal-600 group-focus-within:scale-110" />
                                        <Input
                                            id="password"
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="Min 6 characters"
                                            className={`
                                                w-full h-17 pl-14 pr-14
                                                text-2xl text-slate-900 bg-white
                                                border-2 border-slate-200 rounded-2xl
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

                                <div className="space-y-2.5">
                                    <Label htmlFor="confirmPassword" className="text-xl font-bold text-slate-700 flex items-center gap-2">
                                        <Lock className="h-5 w-5 text-teal-600" />
                                        Confirm Password
                                    </Label>
                                    <div className="relative group">
                                        <Lock className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-400 transition-all duration-300 group-focus-within:text-teal-600 group-focus-within:scale-110" />
                                        <Input
                                            id="confirmPassword"
                                            type={showConfirm ? 'text' : 'password'}
                                            placeholder="Confirm password"
                                            className={`
                                                w-full h-17 pl-14 pr-14
                                                text-2xl text-slate-900 bg-white
                                                border-2 border-slate-200 rounded-2xl
                                                transition-all duration-300
                                                focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 focus:shadow-lg
                                                hover:border-slate-300 hover:shadow-md
                                                placeholder:text-xl placeholder:text-slate-400
                                                ${errors.confirmPassword ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10' : ''}
                                            `}
                                            {...register('confirmPassword')}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirm(!showConfirm)}
                                            className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-all duration-300 hover:scale-110"
                                            aria-label={showConfirm ? 'Hide password' : 'Show password'}
                                        >
                                            {showConfirm ? (
                                                <EyeOff className="h-6 w-6" />
                                            ) : (
                                                <Eye className="h-6 w-6" />
                                            )}
                                        </button>
                                    </div>
                                    {errors.confirmPassword && (
                                        <p className="text-sm text-red-500 animate-in slide-in-from-top-1 duration-200">
                                            {errors.confirmPassword.message}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* ===== Terms ===== */}
                            <div className="space-y-1 pt-1">
                                <div className="flex items-center gap-3">
                                    <Checkbox
                                        id="terms"
                                        className="h-6 w-6 border-2 border-slate-300 data-[state=checked]:bg-teal-600 data-[state=checked]:border-teal-600 transition-all duration-200 rounded-xl"
                                        checked={terms}
                                        onCheckedChange={(checked) => setValue('terms', checked === true, { shouldValidate: true })}
                                    />
                                    <Label
                                        htmlFor="terms"
                                        className="text-lg text-slate-600 cursor-pointer select-none hover:text-slate-800 transition-colors"
                                    >
                                        I agree to the{' '}
                                        <Link href="/terms" className="font-bold text-teal-600 hover:text-teal-700 hover:underline transition-colors">
                                            Terms & Conditions
                                        </Link>
                                    </Label>
                                </div>
                                {errors.terms && (
                                    <p className="text-sm text-red-500 animate-in slide-in-from-top-1 duration-200">
                                        {errors.terms.message}
                                    </p>
                                )}
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
                                        Creating Account...
                                    </>
                                ) : (
                                    <>
                                        Create Account
                                        <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1.5 transition-transform" />
                                    </>
                                )}
                            </Button>

                            {/* ===== Login Link ===== */}
                            <div className="text-center">
                                <p className="text-base text-slate-500">
                                    Already have an account?{' '}
                                    <Link
                                        href="/login"
                                        className="font-bold text-teal-600 hover:text-teal-700 hover:underline transition-colors"
                                    >
                                        Sign In
                                    </Link>
                                </p>
                            </div>

                            {/* ===== Trust Badges ===== */}
                            <div className="flex justify-center items-center gap-6 pt-4 border-t border-slate-100">
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
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-400 text-xs whitespace-nowrap">
                © 2026 Ceylon Vidu Tours. All rights reserved.
            </div>
        </div>
    );
}