'use client';

import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';

import { useAuthStore } from '@/stores/auth.store';

interface ProtectedRouteProps {
    children: ReactNode;
    roles?: string[];
}

export default function ProtectedRoute({
    children,
    roles,
}: ProtectedRouteProps) {
    const router = useRouter();

    const {
        initialized,
        isAuthenticated,
        user,
    } = useAuthStore();

    // App is still checking authentication
    if (!initialized) {
        return (
            <div className="flex h-screen items-center justify-center">
                <p>Loading...</p>
            </div>
        );
    }

    // Not logged in
    if (!isAuthenticated) {
        router.replace('/login');
        return null;
    }

    // Role check
    if (
        roles &&
        user &&
        !roles.includes(user.role)
    ) {
        router.replace('/unauthorized');
        return null;
    }

    return <>{children}</>;
}