import { useMutation, useQueryClient } from '@tanstack/react-query';

import { requestBookmarkFeed, requestUnBookmarkFeed } from '@/shared/axios';
import { FeedsQueryData } from '@/shared/consts';
import { QUERY_KEYS } from '@/shared/react-query';
import { isErrorResponse } from '@/shared/utils';

import { updateBookmarkStatusInFeeds } from '../lib';

export const useBookmarks = (feedId: number, isBookmarked: boolean) => {
  const queryClient = useQueryClient();

  const { mutate: handleBookmarkFeed, isPending } = useMutation({
    mutationFn: () =>
      isBookmarked
        ? requestUnBookmarkFeed(feedId)
        : requestBookmarkFeed(feedId),
    onMutate: async () => {
      await queryClient.cancelQueries({
        queryKey: [QUERY_KEYS.feeds],
      });

      // 이전 쿼리값의 스냅샷
      const previousQueryData = queryClient.getQueryData<FeedsQueryData>([
        QUERY_KEYS.feeds,
      ]);

      if (!previousQueryData) return;

      // 업데이트 될 쿼리값
      const updatedQueryData = updateBookmarkStatusInFeeds(
        previousQueryData,
        feedId,
      );

      // setQueryData 함수를 사용해 newTodo로 Optimistic Update를 실시한다.
      await queryClient.setQueryData([QUERY_KEYS.feeds], updatedQueryData);

      return { previousQueryData };
    },
    onError: (_, __, context) => {
      queryClient.setQueryData([QUERY_KEYS.feeds], context?.previousQueryData);
    },
    onSuccess: (response, _, context) => {
      if (isErrorResponse(response)) {
        queryClient.setQueryData([QUERY_KEYS.feeds], context.previousQueryData);
        return;
      }

      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.feed, feedId] });
    },
  });

  return { handleBookmarkFeed, isPending };
};
