import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface AuthState {
  accessToken: string | undefined;
}

const useAuthStore = create<AuthState>()(
  devtools(
    (): AuthState => ({
      accessToken: undefined,
    }),
    { name: 'auth-store' },
  ),
);

export function setAccessToken(accessToken: string) {
  useAuthStore.setState(() => ({ accessToken }), false, 'auth/setAccessToken');
}

export function getAccessToken() {
  return useAuthStore.getState().accessToken;
}
