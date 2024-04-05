import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from './providers/query-client';
import { router } from './routers/index';

if (import.meta.env.DEV) {
  // development 모드일 경우 Mocking 서버가 실행됩니다.
  const { worker } = await import('@/shared/mocks/browser');
  worker.start();
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
