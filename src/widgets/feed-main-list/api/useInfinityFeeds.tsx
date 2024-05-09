import { useInfiniteQuery } from '@tanstack/react-query';

import { axiosInstance } from '@/shared/axios';
import { FetchFeeds, QUERY_KEYS } from '@/shared/consts';

async function fetchFeeds(
  page: number,
  count: number = 10,
): Promise<FetchFeeds> {
  const { data } = await axiosInstance.get(
    `/feeds?page=${page}&count=${count}`,
  );

  return data;
}

export const useInfinityFeeds = () => {
  const {
    data: feeds,
    fetchNextPage: fetchNextFeeds,
    isFetching,
    hasNextPage: hasNextFeeds,
    isLoading,
    isError,
    refetch: refetchFeeds,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEYS.feeds],
    queryFn: ({ pageParam }) => fetchFeeds(pageParam),
    initialPageParam: 1,
    getNextPageParam: (currentPages, _, lastPageParam) => {
      return currentPages.data.hasNextPage ? lastPageParam + 1 : null;
    },
  });

  return {
    feeds,
    fetchNextFeeds,
    isFetching,
    hasNextFeeds,
    isLoading,
    isError,
    refetchFeeds,
  };
};
