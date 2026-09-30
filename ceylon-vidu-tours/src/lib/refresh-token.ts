import { authService } from '@/services/auth.service';
import { useAuthStore } from '@/stores/auth.store';

export async function refreshAccessToken() {
  const response = await authService.refresh();

  if (!response.success) {
    throw new Error('Unable to refresh token.');
  }

  useAuthStore.getState().setAuth(response.data.user, response.data.accessToken);

  return response.data.accessToken;
}
