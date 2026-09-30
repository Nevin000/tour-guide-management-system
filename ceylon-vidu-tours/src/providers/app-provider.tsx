'use client';

import { ReactNode } from 'react';
import { Toaster } from 'sonner';

import AuthInitializer from '@/components/auth/auth-initializer';

import QueryProvider from './query-provider';

interface AppProviderProps {
    children: ReactNode;
}

export default function AppProvider({
    children,
}: AppProviderProps) {
    return (
        <QueryProvider>
            <AuthInitializer>
                {children}
            </AuthInitializer>

            <Toaster
                position="top-right"
                richColors
                closeButton
            />
        </QueryProvider>
    );
}