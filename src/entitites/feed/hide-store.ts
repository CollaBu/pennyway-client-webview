import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface HiddenFeedState {
  hiddenFeeds: number[];
}

export const useHiddenFeedStore = create<HiddenFeedState>()(
  devtools(
    (): HiddenFeedState => ({
      hiddenFeeds: [],
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
      hiddenFeeds: [...prevHiddenFeeds, feedId],
    }),
    false,
    'feed/addHiddenFeed',
  );
}
