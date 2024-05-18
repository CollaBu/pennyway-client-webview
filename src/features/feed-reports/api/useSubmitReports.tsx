import { useMutation } from '@tanstack/react-query';

import { addHiddenFeed } from '@/entitites/feed';
import { axiosInstance } from '@/shared/axios';

import { FeedReportForm } from '../consts';
import { removeFeedReportForm, saveFeedReportForm } from '../store';

async function requestFeedReports(feedId: number, body: FeedReportForm) {
  const { data } = await axiosInstance.post(`feeds/${feedId}/reports`, body);

  return data;
}

export const useSubmitReports = (feedId: number) => {
  const { mutate: reportFeed, isPending } = useMutation({
    mutationKey: ['feed-report'],
    mutationFn: (body: FeedReportForm) => requestFeedReports(feedId, body),
    onError: (_, body) => saveFeedReportForm(feedId, body),
    onSuccess: (_, body) => {
      const { isBlind } = body;

      // 숨김 처리
      if (isBlind) {
        addHiddenFeed(feedId, 'siren');
      }

      removeFeedReportForm(feedId);
    },
  });

  return { reportFeed, isPending };
};
