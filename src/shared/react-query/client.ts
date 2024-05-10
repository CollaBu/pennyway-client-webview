import { QueryClient, QueryClientConfig } from '@tanstack/react-query';

const queryClientOptions: QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 10 * 60 * 1000, // 10 minutes
      gcTime: 15 * 60 * 1000, // 15 minutes
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
};
export const queryClient = new QueryClient(queryClientOptions);
