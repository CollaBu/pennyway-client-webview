import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type FeedKebabStore = {
  openedFeedId: number;
  isOpen: boolean;
  open: (_: number) => void;
  close: () => void;
};

/**
 * 피드의 kebab 메뉴를 관리하는 store
 */
export const useFeedKebabStore = create<FeedKebabStore>()(
  devtools(
    (set): FeedKebabStore => ({
      openedFeedId: 0,
      isOpen: false,
      open: (clickedId: number) =>
        set({ openedFeedId: clickedId, isOpen: true }),
      close: () => set({ openedFeedId: -1, isOpen: false }),
    }),
    { name: 'feed-kebab-store' },
  ),
);

export const clickFeedKebab = (feedId: number) => {
  useFeedKebabStore.getState().open(feedId);
};
