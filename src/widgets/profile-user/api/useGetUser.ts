import { useQuery } from '@tanstack/react-query';

import { fetchUser } from '@/shared/axios';
import { QUERY_KEYS } from '@/shared/react-query';

export const useGetUser = (userId: number) => {
  const {
    data,
    isLoading,
    isError,
    refetch: refetchUser,
  } = useQuery({
    queryKey: [QUERY_KEYS.users, userId],
    queryFn: () => fetchUser(userId),
  });

  return {
    data,
    isLoading,
    isError,
    refetchUser,
  };
};
