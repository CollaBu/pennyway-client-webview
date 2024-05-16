import { useMutation } from '@tanstack/react-query';

import { cancleHiddenFeed } from '@/entitites/feed';
import { axiosInstance } from '@/shared/axios';

async function requestHideCancelFeed(feedId: number) {
  const { data } = await axiosInstance.delete(`/feeds/${feedId}/hides`);

  return data;
}

export const useHideCancel = (feedId: number) => {
  const { mutateAsync: hideCancelFeed, isPending } = useMutation({
    mutationFn: () => requestHideCancelFeed(feedId),
    onSuccess: () => cancleHiddenFeed(feedId),
  });

  return { hideCancelFeed, isPending };
};
