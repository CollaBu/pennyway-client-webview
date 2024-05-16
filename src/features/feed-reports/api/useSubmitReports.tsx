import { useMutation } from '@tanstack/react-query';

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
    mutationFn: (body: ReportBody) => requestFeedReports(feedId, body),
    onError: () => {},
    onSuccess: () => {},
  });

  return { reportFeed, isPending };
};
