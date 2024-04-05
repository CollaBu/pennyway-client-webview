import { QueryClient, QueryClientConfig } from '@tanstack/react-query';

const queryClientOptions: QueryClientConfig = {};
export const queryClient = new QueryClient(queryClientOptions);
