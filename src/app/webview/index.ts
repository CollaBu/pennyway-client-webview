import { setAccessToken } from '@/shared/store';

export function initWebViewInfo() {
  window.setAccessToken = setAccessToken;
}
