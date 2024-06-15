import { useMutation, useQueryClient } from '@tanstack/react-query';

import { requestFollow } from '@/shared/axios';
import { RelationshipStatus } from '@/shared/consts';
import { QUERY_KEYS } from '@/shared/react-query';
import { isErrorResponse } from '@/shared/utils';

import { updateRelationshipStatus } from '../lib/updateRelationshipStatus';

export const useFollow = (isPrivate: boolean, userId: number) => {
  const queryClient = useQueryClient();

  const {
    data,
    mutate: handleFollow,
    isPending,
  } = useMutation({
    mutationFn: () => requestFollow(userId),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: [QUERY_KEYS.follow] });

      // 이전 쿼리값의 스냅샷
      const previousQueryData = queryClient.getQueryData<RelationshipStatus>([
        QUERY_KEYS.follow,
      ]);

      if (!previousQueryData) return;

      // 업데이트 될 쿼리값
      const updatedQueryData = updateRelationshipStatus(
        previousQueryData as RelationshipStatus,
        isPrivate,
      );

      // setQueryData 함수를 사용해 Optimistic Update를 실시한다.
      await queryClient.setQueryData([QUERY_KEYS.follow], updatedQueryData);

      return { previousQueryData };
    },
    onError: (_, __, context) => {
      // Network Error일 경우 이전 쿼리값으로 롤백
      queryClient.setQueryData([QUERY_KEYS.follow], context?.previousQueryData);
    },
    onSuccess: (response, _, context) => {
      if (isErrorResponse(response)) {
        // Server Error일 경우 이전 쿼리값으로 롤백
        queryClient.setQueryData(
          [QUERY_KEYS.follow],
          context.previousQueryData,
        );
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.follow] });
    },
  });

  return { data, handleFollow, isPending };
};
