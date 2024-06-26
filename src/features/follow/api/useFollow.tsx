import { useMutation, useQueryClient } from '@tanstack/react-query';

import { requestFollow } from '@/shared/axios';
import { FetchRelationshipStatus } from '@/shared/consts';
import { QUERY_KEYS } from '@/shared/react-query';
import { isErrorResponse } from '@/shared/utils';

import { updateRelationshipStatus } from '../lib/updateRelationshipStatus';

export const useFollow = (userId: number, locked: boolean) => {
  const queryClient = useQueryClient();

  const {
    data,
    mutate: handleFollow,
    isPending: isPendingFollow,
  } = useMutation({
    mutationKey: [QUERY_KEYS.follow],
    mutationFn: () => requestFollow(userId),
    // mutate가 호출되면 ✨낙관적 업데이트를 위해 onMutate를 실행
    onMutate: async () => {
      // 진행중인 refetch가 있다면 취소
      await queryClient.cancelQueries({
        queryKey: [QUERY_KEYS.follow, userId],
      });

      // 이전 쿼리값의 스냅샷
      const previousQueryData =
        queryClient.getQueryData<FetchRelationshipStatus>([
          QUERY_KEYS.follow,
          userId,
        ]);

      if (!previousQueryData) return;

      // 업데이트 될 쿼리값
      const updatedQueryData = updateRelationshipStatus(
        previousQueryData,
        locked,
      );
      // setQueryData 함수를 사용해 Optimistic Update를 실시한다.
      queryClient.setQueryData([QUERY_KEYS.follow, userId], updatedQueryData);

      return { previousQueryData };
    },
    onError: (_, __, context) => {
      // Network Error일 경우 이전 쿼리값으로 롤백
      queryClient.setQueryData(
        [QUERY_KEYS.follow, userId],
        context?.previousQueryData,
      );
    },
    onSuccess: (response, _, context) => {
      if (isErrorResponse(response)) {
        // Server Error일 경우 이전 쿼리값으로 롤백
        queryClient.setQueryData(
          [QUERY_KEYS.follow, userId],
          context.previousQueryData,
        );
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.follow, userId] });
    },
  });

  return { data, handleFollow, isPendingFollow };
};
