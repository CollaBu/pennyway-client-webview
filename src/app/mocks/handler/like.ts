import { http } from 'msw';

import { likes } from '../consts/like';
import { feeds } from '../consts/feed';
import {
  createHttpSuccessResponse,
  createHttpErrorResponse,
} from '../dir/response';

export const likeHandlers = [
  // 1️⃣ 피드 좋아요 조회
  http.get('/feeds/:feed_id/likes', ({ params }) => {
    const { feed_id } = params;

    if (isNaN(Number(feed_id))) {
      return createHttpErrorResponse('4220');
    }

    const formattedFeedId = Number(feed_id);
    const likeInfo = likes[formattedFeedId];

    if (!likeInfo) {
      return createHttpErrorResponse('4040');
    }

    return createHttpSuccessResponse({ like: likeInfo });
  }),

  // 2️⃣ 피드 좋아요
  http.put('/feeds/:feed_id/likes', ({ params }) => {
    const { feed_id } = params;

    if (isNaN(Number(feed_id))) {
      return createHttpErrorResponse('4220');
    }

    const formattedFeedId = Number(feed_id);
    const likeInfo = likes[formattedFeedId];

    if (!likeInfo) {
      return createHttpErrorResponse('4040');
    }

    // 이미 좋아요 누른 경우
    if (likeInfo.isLiked) {
      return createHttpErrorResponse('0000');
    }

    likeInfo.isLiked = true;
    likeInfo.totalCount += 1;
    feeds[formattedFeedId].isLiked = true;
    feeds[formattedFeedId].likeCount += 1;

    return createHttpSuccessResponse({ isLiked: true });
  }),

  // 3️⃣ 피드 좋아요 취소
  http.delete('/feeds/:feed_id/likes', ({ params }) => {
    const { feed_id } = params;

    if (isNaN(Number(feed_id))) {
      return createHttpErrorResponse('4220');
    }

    const formattedFeedId = Number(feed_id);
    const likeInfo = likes[formattedFeedId];

    if (!likeInfo) {
      return createHttpErrorResponse('4040');
    }

    // 이미 좋아요 취소를 누른 경우
    if (!likeInfo.isLiked) {
      return createHttpErrorResponse('0000');
    }

    likeInfo.isLiked = false;
    likeInfo.totalCount -= 1;
    feeds[formattedFeedId].isLiked = false;
    feeds[formattedFeedId].likeCount -= 1;

    return createHttpSuccessResponse({ isLiked: false });
  }),
];
