import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientConfig,
} from '@tanstack/react-query';

import { handleMutationError, handleQueryError } from '../dir';

const queryClientOptions: QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 10 * 60 * 1000, // 10 minutes
      gcTime: 15 * 60 * 1000, // 15 minutes
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
  queryCache: new QueryCache({
    onError: (_, query) => handleQueryError(query),
  }),
  mutationCache: new MutationCache({
    onError: () => handleMutationError(),
  }),
};
export const queryClient = new QueryClient(queryClientOptions);
