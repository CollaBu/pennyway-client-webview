import { useMutation, useQueryClient } from '@tanstack/react-query';

import { requestLikeFeed, requestUnlikeFeed } from '@/shared/axios';
import { QUERY_KEYS } from '@/shared/consts';
import { isErrorResponse } from '@/shared/utils';

import { FeedsQueryData } from '../consts';
import { updateLikeStatusInFeeds } from '../lib';

export const useLike = (feedId: number, isLiked: boolean) => {
  const queryClient = useQueryClient();

  const { mutate: handleLikeFeed, isPending } = useMutation({
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

      // setQueryData 함수를 사용해 newTodo로 Optimistic Update를 실시한다.
      await queryClient.setQueryData([QUERY_KEYS.feeds], updatedQueryData);

      return { previousQueryData };
    },
    onError: (_, __, context) => {
      // Network Error일 경우 이전 쿼리값으로 롤백
      queryClient.setQueryData([QUERY_KEYS.feeds], context?.previousQueryData);
    },
    onSuccess: (response, _, context) => {
      // Nextwork Success일 경우 실행

      if (isErrorResponse(response)) {
        // 실패 시 이전 쿼리값으로 롤백
        queryClient.setQueryData([QUERY_KEYS.feeds], context.previousQueryData);
        return;
      }

      // 성공 시 피드 아이디에 해당하는 피드를 무효화한다.
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.feed, feedId] });
    },
  });

  return { handleLikeFeed, isPending };
};
