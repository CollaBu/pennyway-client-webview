import { http } from 'msw';

import { feeds } from '../consts/feed';
import { hiddens } from '../consts/hidden';
import {
  createHttpErrorResponse,
  createHttpSuccessResponse,
} from '../dir/response';

export const feedHidesHandlers = [
  // 1️⃣ 피드 숨기기
  http.put('/feeds/:feed_id/hides', ({ params }) => {
    const { feed_id } = params;

    if (isNaN(Number(feed_id))) {
      return createHttpErrorResponse('4220');
    }

    const formattedFeedId = Number(feed_id);

    if (!feeds[formattedFeedId]) {
      return createHttpErrorResponse('4040');
    }

    hiddens[formattedFeedId] = true;
    return createHttpSuccessResponse({ isHidden: true });
  }),

  // 2️⃣ 피드 숨기기 취소
  http.delete('/feeds/:feed_id/hides', ({ params }) => {
    const { feed_id } = params;

    if (isNaN(Number(feed_id))) {
      return createHttpErrorResponse('4220');
    }

    const formattedFeedId = Number(feed_id);

    if (!feeds[formattedFeedId]) {
      return createHttpErrorResponse('4040');
    }

    hiddens[formattedFeedId] = false;
    return createHttpSuccessResponse({ isHidden: false });
  }),
];
