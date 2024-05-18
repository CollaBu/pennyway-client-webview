import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientConfig,
} from '@tanstack/react-query';

import {
  handleMutationError,
  handleMutationSuccess,
  handleQueryError,
  handleQuerySuccess,
} from '../dir';

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
    onSuccess: () => handleQuerySuccess(),
    onError: (_, query) => handleQueryError(query),
  }),
  mutationCache: new MutationCache({
    onSuccess: (_, __, ___, mutation) => handleMutationSuccess(mutation),
    onError: (_, __, ___, mutation) => handleMutationError(mutation),
  }),
};
export const queryClient = new QueryClient(queryClientOptions);
