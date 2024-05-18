import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { FeedReportForm } from '../consts';

interface FeedReportFailState {
  [feedId: number]: FeedReportForm;
}

/**
 * 피드 신고 실패시, 사용자가 작성한 정보에 대한 상태를 관리하는 스토어입니다.
 */
export const useFeedReportFailStore = create<FeedReportFailState>()(
  devtools((): FeedReportFailState => ({}), { name: 'feed-report-store' }),
);

/**
 * 피드 신고 실패시, 사용자가 작성한 정보를 저장합니다.
 * @param feedId 피드 아이디
 */
export function saveFeedReportForm(feedId: number, body: FeedReportForm) {
  useFeedReportFailStore.setState(
    (prev) => ({
      ...prev,
      [feedId]: body,
    }),
    false,
    'feed/saveFeedReportForm',
  );
}

/**
 * 피드 신고 성공시, 사용자가 작성한 정보를 삭제합니다.
 * @param feedId 피드 아이디
 */
export function removeFeedReportForm(feedId: number) {
  if (!useFeedReportFailStore.getState()[feedId]) return;

  useFeedReportFailStore.setState(
    (prev) => {
      const nextState = { ...prev };
      delete nextState[feedId];
      return nextState;
    },
    false,
    'feed/removeFeedReportForm',
  );
}
