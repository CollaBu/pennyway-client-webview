import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface HiddenFeedState {
  hiddenFeeds: Set<number>;
}

const useHiddenFeedStore = create<HiddenFeedState>()(
  devtools(
    (): HiddenFeedState => ({
      hiddenFeeds: new Set(),
    }),
    { name: 'feed-hidden-store' },
  ),
);

/**
 * 숨김 피드 목록에 피드를 추가합니다.
 * @param feedId 피드 아이디
 */
export function addHiddenFeed(feedId: number) {
  useHiddenFeedStore.setState(
    ({ hiddenFeeds: prevHiddenFeeds }) => ({
      hiddenFeeds: new Set(prevHiddenFeeds).add(feedId),
    }),
    false,
    'feed/addHiddenFeed',
  );
}

/**
 * 피드 아이디가 숨김 피드 목록에 있는지 확인합니다.
 * @param feedId 피드 아이디
 * @returns 숨김 피드 목록에 있으면 true, 없으면 false
 */
export function isHiddenFeed(feedId: number) {
  return useHiddenFeedStore.getState().hiddenFeeds.has(feedId);
}
