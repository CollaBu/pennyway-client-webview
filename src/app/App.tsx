import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router-dom';

import { queryClient } from '@/shared/react-query';
import { Toast } from '@/shared/toast';

import { router } from './routers/index';
import './styles/global.scss';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />

      <Toast />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
