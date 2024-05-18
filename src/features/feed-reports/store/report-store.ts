import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { FeedReportForm, REPORT_CATEGORIES } from '../consts';

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

/**
 * 사용자가 이전에 작성한 피드 신고 정보를 가져옵니다.
 * @if 만약 없다면, 초기 상태를 반환합니다.
 * @param feedId 피드 아이디
 * @returns 피드 신고 양식
 */
export function getFeedReportForm(feedId: number) {
  const body = useFeedReportFailStore.getState()[feedId];

  if (!body) {
    return {
      clickedId: -1,
      content: '',
      isBlind: false,
    };
  }

  return {
    clickedId: REPORT_CATEGORIES.indexOf(body.category),
    ...body,
  };
}
