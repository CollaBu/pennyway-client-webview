import { useQuery } from '@tanstack/react-query';

import { axiosInstance } from '@/shared/axios';
import { FetchUser } from '@/shared/consts';
import { QUERY_KEYS } from '@/shared/react-query';

async function fetchUser(userId: number): Promise<FetchUser> {
  const { data } = await axiosInstance.get(`/users/${userId}`);
  return data;
}

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
