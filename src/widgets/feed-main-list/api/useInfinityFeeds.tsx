import { useInfiniteQuery } from '@tanstack/react-query';

import { axiosInstance } from '@/shared/axios';
import { Feed, QUERY_KEYS } from '@/shared/consts';

interface FetchFeeds {
  code: string;
  data: {
    currentPageNumber: number;
    feeds: Feed[];
    hasNext: boolean;
    numberOfElements: number;
    pageSize: number;
  };
}

async function fetchFeeds(page: number): Promise<FetchFeeds> {
  const { data } = await axiosInstance.get(`/feeds?page=${page}`);

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
  } = useInfiniteQuery({
    queryKey: [QUERY_KEYS.feeds],
    queryFn: ({ pageParam }) => fetchFeeds(pageParam),
    initialPageParam: 1,
    getNextPageParam: (currentPages, _, lastPageParam) => {
      return currentPages.data.hasNext ? lastPageParam + 1 : null;
    },
  });

  return {
    feeds,
    fetchNextFeeds,
    isFetching,
    hasNextFeeds,
    isLoading,
    isError,
  };
};
