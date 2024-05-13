import { http } from 'msw';

import {
  createHttpErrorResponse,
  createHttpSuccessResponse,
} from '../dir/response';
import { feeds } from '../consts/feed';

export const bookmarkHandlers = [
  // 1️⃣ 피드 북마크
  http.put('/feeds/:feed_id/bookmarks', ({ params }) => {
    const { feed_id } = params;

    if (isNaN(Number(feed_id))) {
      return createHttpErrorResponse('4220');
    }

    const formattedFeedId = Number(feed_id);

    if (!feeds[formattedFeedId]) {
      return createHttpErrorResponse('4040');
    }

    feeds[formattedFeedId].isBookmarked = true;

    return createHttpSuccessResponse({ isBookmarked: true });
  }),

  // 2️⃣ 피드 북마크 취소
  http.delete('/feeds/:feed_id/bookmarks', ({ params }) => {
    const { feed_id } = params;

    if (isNaN(Number(feed_id))) {
      return createHttpErrorResponse('4220');
    }

    const formattedFeedId = Number(feed_id);

    if (!feeds[formattedFeedId]) {
      return createHttpErrorResponse('4040');
    }

    feeds[formattedFeedId].isBookmarked = false;

    return createHttpSuccessResponse({ isBookmarked: false });
  }),
];
