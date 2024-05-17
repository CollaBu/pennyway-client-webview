import { useMutation } from '@tanstack/react-query';

import { addHiddenFeed } from '@/entitites/feed';
import { axiosInstance } from '@/shared/axios';

interface ReportBody {
  category: string;
  content: string;
  isBlind: boolean;
}

async function requestFeedReports(feedId: number, body: ReportBody) {
  const { data } = await axiosInstance.post(`feeds/${feedId}/reports`, body);

  return data;
}

export const useSubmitReports = (feedId: number) => {
  const { mutate: reportFeed, isPending } = useMutation({
    mutationKey: ['feed-report'],
    mutationFn: (body: ReportBody) => requestFeedReports(feedId, body),
    onError: () => {},
    onSuccess: (_, body) => {
      const { isBlind } = body;

      // 숨김 처리
      if (isBlind) {
        addHiddenFeed(feedId, 'siren');
      }
    },
  });

  return { reportFeed, isPending };
};
