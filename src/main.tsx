import ReactDOM from 'react-dom/client';

import App from './app/App';
import { initWebViewInfo } from './app/webview';

async function enableMocking() {
  // if (import.meta.env.PROD) {
  //   return;
  // }

  const { worker } = await import('@/app/mocks/browser');

  return worker.start({
    quiet: true,
    onUnhandledRequest: 'bypass',
  });
}

enableMocking().then(() => {
  initWebViewInfo();
  ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
});
