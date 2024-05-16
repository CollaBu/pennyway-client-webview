import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const HIDDEN = true;
const VISIBLE = false;

interface HiddenFeedState {
  hiddenFeeds: Map<number, boolean>;
}

export const useHiddenFeedStore = create<HiddenFeedState>()(
  devtools(
    (): HiddenFeedState => ({
      hiddenFeeds: new Map<number, boolean>(),
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
      hiddenFeeds: new Map(prevHiddenFeeds).set(feedId, HIDDEN),
    }),
    false,
    'feed/addHiddenFeed',
  );
}

/**
 * 숨김 피드 목록에서 피드를 제거합니다.
 * @param feedId 피드 아이디
 */
export function cancleHiddenFeed(feedId: number) {
  useHiddenFeedStore.setState(
    ({ hiddenFeeds: prevHiddenFeeds }) => ({
      hiddenFeeds: new Map(prevHiddenFeeds).set(feedId, VISIBLE),
    }),
    false,
    'feed/cancleHiddenFeed',
  );
}
