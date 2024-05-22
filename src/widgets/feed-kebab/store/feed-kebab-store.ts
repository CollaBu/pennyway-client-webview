import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type FeedKebabStore = {
  openedFeedId: number;
  isOpen: boolean;
  openKebab: (_: number) => void;
  closeKebab: () => void;
};

/**
 * 피드의 kebab 메뉴를 관리하는 store
 */
export const useFeedKebabStore = create<FeedKebabStore>()(
  devtools(
    (set): FeedKebabStore => ({
      openedFeedId: 0,
      isOpen: false,
      openKebab: (clickedId: number) =>
        set({ openedFeedId: clickedId, isOpen: true }),
      closeKebab: () => set({ openedFeedId: -1, isOpen: false }),
    }),
    { name: 'feed-kebab-store' },
  ),
);

/**
 * 피드의 kebab 메뉴를 열거나 닫습니다.
 * @param feedId 피드 아이디
 * @returns
 */
export const onClickFeedKebab = (feedId: number) => {
  if (feedId === useFeedKebabStore.getState().openedFeedId) {
    useFeedKebabStore.getState().closeKebab();
    return;
  }

  useFeedKebabStore.getState().openKebab(feedId);
};
