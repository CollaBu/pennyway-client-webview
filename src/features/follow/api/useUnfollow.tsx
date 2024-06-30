import { useMutation, useQueryClient } from '@tanstack/react-query';

import { requestUnfollow } from '@/shared/axios';
import { FetchRelationshipStatus } from '@/shared/consts';
import { QUERY_KEYS } from '@/shared/react-query';
import { isErrorResponse } from '@/shared/utils';

import { updateRelationshipStatus } from '../lib';

export const useUnfollow = (userId: number, locked: boolean) => {
  const queryClient = useQueryClient();

  const {
    data,
    mutate: handleUnfollow,
    isPending: isPendingUnfollow,
  } = useMutation({
    mutationKey: [QUERY_KEYS.follow],
    mutationFn: () => requestUnfollow(userId),
    onMutate: async () => {
      await queryClient.cancelQueries({
        queryKey: [QUERY_KEYS.follow, userId],
      });

      const previousQueryData =
        queryClient.getQueryData<FetchRelationshipStatus>([
          QUERY_KEYS.follow,
          userId,
        ]);

      if (!previousQueryData) return;

      const updatedQueryData = updateRelationshipStatus(
        previousQueryData,
        locked,
      );

      await queryClient.setQueryData(
        [QUERY_KEYS.follow, userId],
        updatedQueryData,
      );

      return { previousQueryData };
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(
        [QUERY_KEYS.follow, userId],
        context?.previousQueryData,
      );
    },
    onSuccess: (response, _, context) => {
      if (isErrorResponse(response)) {
        queryClient.setQueryData(
          [QUERY_KEYS.follow, userId],
          context.previousQueryData,
        );
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.follow, userId] });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.users, userId],
      });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.users, 1] });
    },
  });

  return { data, handleUnfollow, isPendingUnfollow };
};
