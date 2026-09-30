'use client';

import { useEffect } from 'react';

import { authService } from '@/services/auth.service';
import { useAuthStore } from '@/stores/auth.store';

interface Props {
    children: React.ReactNode;
}

export default function AuthInitializer({ children }: Props) {
    useEffect(() => {
        const bootstrap = async () => {
            const {
                setAuth,
                clearAuth,
                setLoading,
                setInitialized,
            } = useAuthStore.getState();

            setLoading(true);

            try {
                const response = await authService.refresh();

                if (response.success) {
                    setAuth(
                        response.data.user,
                        response.data.accessToken
                    );
                }
            } catch {
                const currentUser = useAuthStore.getState().user;
                if (currentUser?.role !== 'ADMIN') {
                    clearAuth();
                }
            } finally {
                setLoading(false);
                setInitialized(true);
            }
        };

        bootstrap();
    }, []);

    return <>{children}</>;
}