import { useMutation, useQueryClient } from '@tanstack/react-query';

import { axiosInstance } from '@/shared/axios';
import { FetchFeeds, QUERY_KEYS } from '@/shared/consts';
import { isErrorResponse } from '@/shared/utils';

interface FeedsQueryData {
  queryParams: number[];
  pages: FetchFeeds[];
}

async function requestLikeFeed(feedId: number) {
  const { data } = await axiosInstance.put(`/feeds/${feedId}/likes`);

  return data;
}

export const useLike = (feedId: number) => {
  const queryClient = useQueryClient();

  const { mutate: handleLikeFeed, isPending } = useMutation({
    mutationFn: () => requestLikeFeed(feedId),
    // mutate가 호출되면 ✨낙관적 업데이트를 위해 onMutate를 실행
    onMutate: async () => {
      // 진행중인 refetch가 있다면 취소시킨다.
      await queryClient.cancelQueries({
        queryKey: [QUERY_KEYS.feeds],
      });

      // 이전 쿼리값의 스냅샷
      const previousQueryData = queryClient.getQueryData<FeedsQueryData>([
        QUERY_KEYS.feeds,
      ]);

      if (!previousQueryData) return;

      const { pages: previousPages } = previousQueryData;

      // 업데이트 될 쿼리값
      const updatedQueryData = {
        ...previousQueryData,
        pages: previousPages.map((pageData) => {
          const { data } = pageData;
          const updateFeeds = data.feeds.map((feed) =>
            feed.id === feedId
              ? { ...feed, likeCount: feed.likeCount + 1, isLiked: true }
              : feed,
          );
          const updatedData = { ...data, feeds: updateFeeds };

          return { ...pageData, data: updatedData };
        }),
      };

      // setQueryData 함수를 사용해 newTodo로 Optimistic Update를 실시한다.
      await queryClient.setQueryData([QUERY_KEYS.feeds], updatedQueryData);

      return { previousQueryData };
    },
    onError: (_, __, context) => {
      // Network Errord일 경우 이전 쿼리값으로 롤백
      queryClient.setQueryData([QUERY_KEYS.feeds], context?.previousQueryData);
    },
    onSuccess: (response, _, context) => {
      // Nextwork Success일 경우 실행

      if (isErrorResponse(response)) {
        // 실패 시 이전 쿼리값으로 롤백
        queryClient.setQueryData([QUERY_KEYS.feeds], context.previousQueryData);
        return;
      }

      // 성공 시 feed와 feedId를 가진 쿼리를 다시 불러온다.
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.feed, feedId] });
    },
  });

  return { handleLikeFeed, isPending };
};
