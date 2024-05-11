import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router-dom';

import { queryClient } from '@/shared/react-query';
import { NetworkErrorToast } from '@/shared/ui';

import { router } from './routers/index';
import './styles/global.scss';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />

      <NetworkErrorToast />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
