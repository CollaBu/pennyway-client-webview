import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientConfig,
} from '@tanstack/react-query';
import { toast } from 'react-toastify';

/**
 * 에러 메시지를 토스트 메시지로 변환합니다.
 */
function showErrorHandler() {
  // reference: https://fkhadra.github.io/react-toastify/api/toast
  const id = 'react-query-toast';

  if (!toast.isActive(id)) {
    toast('인터넷 연결이 불안정해요', {
      toastId: id,
      position: 'bottom-center',
    });
  }
}

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
    onError: (_, query) => {
      const { queryKey, state } = query;

      // feeds 쿼리에서 데이터가 없을 경우 에러 토스트를 띄우지 않습니다.
      if (queryKey[0] === 'feeds' && state.data === undefined) {
        return;
      }

      showErrorHandler();
    },
  }),
  mutationCache: new MutationCache({
    onError: () => showErrorHandler(),
  }),
};
export const queryClient = new QueryClient(queryClientOptions);
