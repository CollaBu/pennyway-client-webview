import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type HiddenType = 'hidden' | 'siren';

const HiddenMessage = {
  hidden: {
    reasonMsg: '게시물이 숨겨졌어요',
    cancleMsg: '취소',
  },
  siren: {
    reasonMsg: '신고가 접수되었어요',
    cancleMsg: '게시물 보기',
  },
};

interface HiddenFeedState {
  hiddenFeeds: Map<number, HiddenType>;
}

export const useHiddenFeedStore = create<HiddenFeedState>()(
  devtools(
    (): HiddenFeedState => ({
      hiddenFeeds: new Map<number, HiddenType>(),
    }),
    { name: 'feed-hidden-store' },
  ),
);

/**
 * 숨김 피드 목록에 피드를 추가합니다.
 * @param feedId 피드 아이디
 * @param type 숨김 타입 (hidden, siren)
 */
export function addHiddenFeed(feedId: number, type: HiddenType) {
  useHiddenFeedStore.setState(
    ({ hiddenFeeds: prevHiddenFeeds }) => ({
      hiddenFeeds: new Map(prevHiddenFeeds).set(feedId, type),
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
    ({ hiddenFeeds: prevHiddenFeeds }) => {
      prevHiddenFeeds.delete(feedId);

      return {
        hiddenFeeds: new Map(prevHiddenFeeds),
      };
    },
    false,
    'feed/cancleHiddenFeed',
  );
}

/**
 * 숨김 메시지를 반환합니다.
 * @param {hidden | siren} type 숨김 타입
 * @returns 숨김 사유 메시지, 숨김 해제 메시지
 */
export function getHiddenMessageByType(type: HiddenType) {
  return HiddenMessage[type];
}
