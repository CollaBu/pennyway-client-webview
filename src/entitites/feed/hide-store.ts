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

export function addHiddenFeed(feedId: number) {
  useHiddenFeedStore.setState(
    ({ hiddenFeeds: prevHiddenFeeds }) => ({
      hiddenFeeds: new Set(prevHiddenFeeds).add(feedId),
    }),
    false,
    'feed/addHiddenFeed',
  );
}

export function isFeedHidden(feedId: number) {
  return useHiddenFeedStore.getState().hiddenFeeds.has(feedId);
}
