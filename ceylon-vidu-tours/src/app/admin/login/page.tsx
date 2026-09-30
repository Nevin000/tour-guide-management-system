"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import {
    Eye,
    EyeOff,
    Lock,
    Mail,
    Loader2,
    ShieldAlert,
    ShieldCheck,
    ArrowRight
} from "lucide-react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { useAuthStore } from "@/stores/auth.store";

// ============================================
// Secure Login Validation Schema
// ============================================
const adminLoginSchema = z.object({
    email: z
        .string()
        .min(1, "Email is required")
        .email("Please enter a valid email address"),
    password: z
        .string()
        .min(1, "Password is required")
        .min(6, "Password must be at least 6 characters"),
});

type AdminLoginFormData = z.infer<typeof adminLoginSchema>;

export default function AdminLoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isPageLoaded, setIsPageLoaded] = useState(false);

    const router = useRouter();
    const { setAuth } = useAuthStore();

    useEffect(() => {
        setIsPageLoaded(true);
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AdminLoginFormData>({
        resolver: zodResolver(adminLoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data: AdminLoginFormData) => {
        try {
            setIsLoading(true);

            const response = await axios.post("/api/auth/admin-login", {
                email: data.email,
                password: data.password,
            });
            const responseData = response.data;

            if (!responseData.success) {
                toast.error(responseData.message || "Authentication aborted.");
                return;
            }

            const { user, accessToken } = responseData.data;

            setAuth(user, accessToken);
            toast.success("Command privileges established! 🔑");
            router.replace("/admin/dashboard");
        } catch (error: any) {
            console.error("Admin authentication error:", error);
            const errorMessage = error?.response?.data?.message || "Verification failed. Inspect credentials.";
            toast.error(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="relative min-h-screen w-full flex items-center justify-center bg-slate-950 px-4 overflow-hidden select-none">
            {/* Ambient security lighting indicators */}
            <div className="absolute top-1/4 left-1/4 h-80 w-80 rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-emerald-600/5 blur-[130px] pointer-events-none" />

            <div className={`
                w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col justify-center transition-all duration-1000 ease-out z-10
                ${isPageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}>

                {/* Logo & Header */}
                <div className="flex flex-col items-center mb-8">
                    <div className="relative w-28 h-28 rounded-2xl mb-4 bg-slate-900 p-2 border border-slate-800 flex items-center justify-center">
                        <Image
                            src="/logo1.png"
                            alt="Ceylon Vidu Tours Logo"
                            width={112}
                            height={112}
                            className="object-contain rounded-xl brightness-110"
                        />
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-950/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400 border border-emerald-900/50">
                        <ShieldCheck className="h-3.5 w-3.5" />
                        Admin Command Gateway
                    </span>
                    <h2 className="mt-4 text-2xl font-black text-white text-center">
                        Administrative Access
                    </h2>
                    <p className="text-sm text-slate-400 mt-1 text-center">
                        Authorize with credentials to govern the system setup.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Email Entry */}
                    <div>
                        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                            Secure ID / Email
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                            <input
                                id="email"
                                type="email"
                                placeholder="administrator@domain.com"
                                className={`w-full rounded-xl border pl-12 pr-4 py-3 text-sm bg-slate-950 text-white placeholder-slate-600 outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-950/40 ${errors.email ? "border-red-500/50" : "border-slate-800 hover:border-slate-700"
                                    }`}
                                {...register("email")}
                            />
                        </div>
                        {errors.email && (
                            <p className="mt-1.5 text-xs text-red-500 font-medium">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Password Entry */}
                    <div>
                        <label htmlFor="password" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                            Control Cryptokey / Password
                        </label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                className={`w-full rounded-xl border pl-12 pr-12 py-3 text-sm bg-slate-950 text-white placeholder-slate-600 outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-950/40 ${errors.password ? "border-red-500/50" : "border-slate-800 hover:border-slate-700"
                                    }`}
                                {...register("password")}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                            >
                                {showPassword ? (
                                    <EyeOff className="h-5 w-5" />
                                ) : (
                                    <Eye className="h-5 w-5" />
                                )}
                            </button>
                        </div>
                        {errors.password && (
                            <p className="mt-1.5 text-xs text-red-500 font-medium">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Submit Access Request */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-bold text-white shadow-xl shadow-emerald-900/20 hover:bg-emerald-700 active:scale-[0.98] transition-all disabled:opacity-50 cursor-pointer"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="h-4 w-4 animate-spin" />
                                Verifying credentials...
                            </>
                        ) : (
                            <>
                                Authenticate Account
                                <ArrowRight className="h-4 w-4" />
                            </>
                        )}
                    </button>
                </form>

                {/* Secure Badge Footer */}
                <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-center gap-1.5 text-xs text-slate-550">
                    <ShieldAlert className="h-4 w-4 text-emerald-500" />
                    Encrypted Session. Unlawful entries are recorded.
                </div>
            </div>
        </main>
    );
}
