import { http } from 'msw';

import { comments } from '../consts/comment';
import { getCurrentDate } from '../dir/date';
import {
  createHttpSuccessResponse,
  createHttpErrorResponse,
} from '../dir/response';
import { users } from '../consts/user';
import { feeds } from '../consts/feed';

interface CommentForm {
  content: string;
}

export const commentHandlers = [
  // 1️⃣ 댓글 조회
  http.get('/feeds/:feed_id/comments', ({ request, params }) => {
    const { feed_id } = params;

    if (isNaN(Number(feed_id))) {
      return createHttpErrorResponse('4220');
    }

    const formattedFeedId = Number(feed_id);

    const url = new URL(request.url);
    const page = url.searchParams.get('page') || 1;

    if (isNaN(Number(page)) || page === '0') {
      return createHttpErrorResponse('4220');
    }

    const formattedPage = Number(page);
    const pageCount = 5; // 조정 필요!

    const commentsData = comments[formattedFeedId].slice(
      (formattedPage - 1) * pageCount,
      formattedPage * pageCount,
    );

    const totalComments = comments[formattedFeedId].length;
    const endOfPageRange = formattedPage * pageCount;
    const hasNext = endOfPageRange < totalComments;

    return createHttpSuccessResponse({
      comments: commentsData,
      currentPageNumber: pageCount,
      pageSize: formattedPage,
      numberOfElements: commentsData.length,
      hasNext,
    });
  }),

  // 2️⃣ 댓글 작성
  http.post('/feeds/:feed_id/comments', async ({ request, params }) => {
    const { feed_id } = params;

    if (isNaN(Number(feed_id))) {
      return createHttpErrorResponse('4220');
    }

    const formattedFeedId = Number(feed_id);
    const commentsData = comments[formattedFeedId];

    if (!commentsData) {
      return createHttpErrorResponse('4040');
    }

    const { content } = (await request.json()) as CommentForm;

    if (content.length === 0) {
      return createHttpErrorResponse('4003');
    }

    const nextCommentId = commentsData.length + 1;

    commentsData.push({
      id: nextCommentId,
      user: users[1], // 임의 지정

      content,

      createdAt: getCurrentDate(),
      updatedAt: getCurrentDate(),
    });
    feeds[formattedFeedId].commentCount += 1;

    return createHttpSuccessResponse({});
  }),
];
