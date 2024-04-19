import ReactDOM from 'react-dom/client';

import App from './app/App';

async function enableMocking() {
  if (import.meta.env.PROD) {
    return;
  }

  const { worker } = await import('@/app/mocks/browser');

  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
});
