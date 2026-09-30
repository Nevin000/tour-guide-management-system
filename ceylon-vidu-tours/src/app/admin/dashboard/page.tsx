"use client";

import Link from "next/link";
import {
    Compass, Calendar, Users, TrendingUp, Sparkles, Plus, MapPin, Images, Star, ChevronRight
} from "lucide-react";

export default function AdminDashboard() {
    const stats = [
        { label: "Total Tours", value: "48", icon: Compass, change: "+12%", changeType: "up" },
        { label: "Active Bookings", value: "156", icon: Calendar, change: "+8%", changeType: "up" },
        { label: "Total Users", value: "2,847", icon: Users, change: "+23%", changeType: "up" },
        { label: "Revenue", value: "$48.2K", icon: TrendingUp, change: "+15%", changeType: "up" },
    ];

    return (
        <div className="w-full space-y-6">
            {/* Header & Breadcrumb */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-[#1C2434] tracking-tight">Dashboard Overview</h1>
                    <p className="text-xs text-[#64748B] mt-0.5">Welcome back, Admin! Here is your Ceylon Vidu Tour System performance summary.</p>
                </div>

                <div className="flex items-center gap-2 text-sm text-[#64748B]">
                    <span className="text-[#10B981] font-bold">Home</span>
                    <ChevronRight className="h-4 w-4 text-[#8A99AD]" />
                    <span className="text-[#64748B] font-bold">Dashboard</span>
                </div>
            </div>

            {/* Stats Grid (Metric Cards) */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                        <div key={idx} className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-xs flex items-center justify-between">
                            <div>
                                <p className="text-xs font-bold text-[#8A99AD] uppercase tracking-wider mb-1">{stat.label}</p>
                                <h3 className="text-2xl font-bold text-[#1C2434]">{stat.value}</h3>
                                <div className="mt-2 flex items-center gap-1.5">
                                    <span className="text-xs font-bold text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded-full">
                                        {stat.change}
                                    </span>
                                    <span className="text-[11px] font-bold text-[#8A99AD]">vs last month</span>
                                </div>
                            </div>

                            <div className="h-12 w-12 rounded-full bg-[#ECFDF5] flex items-center justify-center text-[#10B981] shrink-0">
                                <Icon className="h-6 w-6" />
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Main Section Grid */}
            <div className="grid gap-6 lg:grid-cols-3">
                {/* Recent Activity Card */}
                <div className="lg:col-span-2 rounded-xl border border-[#E2E8F0] bg-white p-6 md:p-8 shadow-xs">
                    <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-4 mb-6">
                        <h2 className="text-lg font-bold text-[#1C2434]">Recent System Activity</h2>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#10B981]/10 px-2.5 py-1 text-xs font-bold text-[#10B981]">
                            <Sparkles className="h-3.5 w-3.5" /> Live Updates
                        </span>
                    </div>

                    <div className="space-y-4">
                        {[
                            { action: "New booking request for 7-Day Essence of Ceylon", time: "2 hours ago", icon: Calendar, status: "Pending" },
                            { action: "Tour package 'Sigiriya Rock & Culture' updated", time: "4 hours ago", icon: Compass, status: "Active" },
                            { action: "5 new traveler reviews submitted for Ella tour", time: "6 hours ago", icon: Star, status: "Verified" },
                            { action: "New user registered: Sarah Johnson", time: "8 hours ago", icon: Users, status: "Registered" },
                        ].map((activity, idx) => {
                            const Icon = activity.icon;
                            return (
                                <div key={idx} className="flex items-center gap-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 hover:bg-white hover:border-[#10B981]/40 transition">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ECFDF5] text-[#10B981]">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs font-bold text-[#1C2434] truncate">{activity.action}</p>
                                        <p className="text-[11px] font-bold text-[#8A99AD] mt-0.5">{activity.time}</p>
                                    </div>
                                    <span className="px-2.5 py-1 text-[10px] font-bold bg-white border border-[#E2E8F0] text-[#64748B] rounded-full">
                                        {activity.status}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Quick Actions Card */}
                <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 md:p-8 shadow-xs">
                    <div className="border-b border-[#F1F5F9] pb-4 mb-6">
                        <h2 className="text-lg font-bold text-[#1C2434]">Quick Actions</h2>
                        <p className="text-xs text-[#8A99AD] font-bold mt-0.5">Shortcuts to manage your website</p>
                    </div>

                    <div className="space-y-3">
                        <Link href="/admin/tours/add" className="flex items-center gap-3.5 rounded-xl border border-[#E2E8F0] p-4 hover:border-[#10B981] hover:bg-[#ECFDF5]/50 transition">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ECFDF5] text-[#10B981]">
                                <Plus className="h-5 w-5" />
                            </div>
                            <div>
                                <span className="text-xs font-bold text-[#1C2434] block">Add New Tour Package</span>
                                <span className="text-[11px] text-[#8A99AD] font-bold">Create tour itinerary</span>
                            </div>
                        </Link>

                        <Link href="/admin/destinations" className="flex items-center gap-3.5 rounded-xl border border-[#E2E8F0] p-4 hover:border-[#10B981] hover:bg-[#ECFDF5]/50 transition">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ECFDF5] text-[#10B981]">
                                <MapPin className="h-5 w-5" />
                            </div>
                            <div>
                                <span className="text-xs font-bold text-[#1C2434] block">Manage Destinations</span>
                                <span className="text-[11px] text-[#8A99AD] font-bold">Update landmark spots</span>
                            </div>
                        </Link>

                        <Link href="/admin/gallery" className="flex items-center gap-3.5 rounded-xl border border-[#E2E8F0] p-4 hover:border-[#10B981] hover:bg-[#ECFDF5]/50 transition">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ECFDF5] text-[#10B981]">
                                <Images className="h-5 w-5" />
                            </div>
                            <div>
                                <span className="text-xs font-bold text-[#1C2434] block">Gallery Media Workspace</span>
                                <span className="text-[11px] text-[#8A99AD] font-bold">Upload & pick photos</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}