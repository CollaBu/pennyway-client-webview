import { useMutation, useQueryClient } from '@tanstack/react-query';

import { axiosInstance } from '@/shared/axios';
import { QUERY_KEYS } from '@/shared/consts';

async function requestLikeFeed(feedId: number) {
  const { data } = await axiosInstance.put(`/feeds/${feedId}/likes`);

  return data;
}

export const useLike = () => {
  const queryClient = useQueryClient();

  const { mutate: likeFeed, isPending } = useMutation({
    mutationFn: (clickedFeedId: number) => requestLikeFeed(clickedFeedId),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.feeds] });
    },
  });

  const handleFeedLike = (clickedFeedId: number) => likeFeed(clickedFeedId);

  return { handleFeedLike, isPending };
};
