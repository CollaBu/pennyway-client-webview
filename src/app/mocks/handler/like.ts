import { HttpResponse, http } from 'msw';
import { likes } from '../consts/like';
import { createHttpErrorResponse } from '../dir/response';

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

    return HttpResponse.json({ code: '2000', like: likeInfo }, { status: 200 });
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

    if (!likeInfo.isLike) {
      likeInfo.isLike = true;
      likeInfo.totalCount += 1;
    }

    return HttpResponse.json({ code: '2000', data: {} }, { status: 200 });
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

    if (likeInfo.isLike) {
      likeInfo.isLike = false;
      likeInfo.totalCount -= 1;
    }

    return HttpResponse.json({ code: '2000', data: {} }, { status: 200 });
  }),
];
