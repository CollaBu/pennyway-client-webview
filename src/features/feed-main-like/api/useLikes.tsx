import { useMutation, useQueryClient } from '@tanstack/react-query';

import { requestLikeFeed, requestUnlikeFeed } from '@/shared/axios';
import { FeedsQueryData } from '@/shared/consts';
import { QUERY_KEYS } from '@/shared/react-query';
import { isErrorResponse } from '@/shared/utils';

import { updateLikeStatusInFeeds } from '../lib';

export const useLikes = (feedId: number, isLiked: boolean) => {
  const queryClient = useQueryClient();

  const {
    data,
    mutate: handleLikeFeed,
    isPending,
  } = useMutation({
    mutationFn: () =>
      isLiked ? requestUnlikeFeed(feedId) : requestLikeFeed(feedId),
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

      // 업데이트 될 쿼리값
      const updatedQueryData = updateLikeStatusInFeeds(
        previousQueryData,
        feedId,
      );

      // setQueryData 함수를 사용해 새로운 feeds로 Optimistic Update를 실시한다.
      await queryClient.setQueryData([QUERY_KEYS.feeds], updatedQueryData);

      return { previousQueryData };
    },
    onError: (_, __, context) => {
      // Network Error일 경우 이전 쿼리값으로 롤백
      queryClient.setQueryData([QUERY_KEYS.feeds], context?.previousQueryData);
    },
    onSuccess: (response, _, context) => {
      if (isErrorResponse(response)) {
        // Server Error일 경우 이전 쿼리값으로 롤백
        queryClient.setQueryData([QUERY_KEYS.feeds], context.previousQueryData);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.feeds] });
    },
  });

  return { data, handleLikeFeed, isPending };
};
