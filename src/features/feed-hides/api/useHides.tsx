import { useMutation } from '@tanstack/react-query';

import { addHiddenFeed } from '@/entitites/feed';
import { axiosInstance } from '@/shared/axios';

async function requestHideFeed(feedId: number) {
  const { data } = await axiosInstance.put(`/feeds/${feedId}/hides`);

  return data;
}

export const useHides = (feedId: number) => {
  const {
    data,
    mutate: hideFeed,
    isPending,
  } = useMutation({
    mutationFn: () => requestHideFeed(feedId),
    onMutate: () => addHiddenFeed(feedId, 'hidden'),
  });

  return { data, hideFeed, isPending };
};
