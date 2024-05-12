import { http } from 'msw';

import { feeds } from '../consts/feed';
import { reports } from '../consts/report';
import { users } from '../consts/user';
import { likes } from '../consts/like';
import { comments } from '../consts/comment';
import { getCurrentDate } from '../dir/date';
import {
  createHttpSuccessResponse,
  createHttpErrorResponse,
} from '../dir/response';

interface FeedForm {
  content: string;
  images: string[];
  scope: 'public' | 'friend' | 'private';
}

interface ReportForm {
  category: string;
  content: string;
  isBlind: boolean;
}

export const feedHandlers = [
  // 1️⃣ 피드 목록 조회
  /**
   * @todo pageCount를 쿼리 파라미터로 받도록 수정
   */
  http.get('/feeds', ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get('page') || 1;
    const count = url.searchParams.get('count') || 10;

    if (isNaN(Number(page)) || page === '0') {
      return createHttpErrorResponse('4220');
    }

    const formattedPage = Number(page);
    const pageCount = Number(count);

    const feedsData = Object.values(feeds)
      .slice((formattedPage - 1) * pageCount, formattedPage * pageCount)
      .filter((feed) => !reports[feed.id]);

    const totalFeeds = Object.values(feeds).length;
    const endOfPageRange = formattedPage * pageCount;
    const hasNextPage = endOfPageRange < totalFeeds;

    return createHttpSuccessResponse({
      feeds: feedsData,
      currentPageNumber: pageCount,
      pageSize: formattedPage,
      numberOfElements: feedsData.length,
      hasNextPage,
    });
  }),

  // 2️⃣ 피드 작성
  http.post('/feeds', async ({ request }) => {
    const { content, images } = (await request.json()) as FeedForm;

    if (content.length === 0) {
      return createHttpErrorResponse('4003');
    }

    const nextFeedId = Object.keys(feeds).length + 1;

    feeds[nextFeedId] = {
      id: nextFeedId,
      user: users[1], // 임의 지정
      content,
      images: images.map((image, idx) => ({ id: idx + 1, imageUrl: image })),

      likeCount: 0,
      commentCount: 0,

      isLiked: false,
      isBookmarked: false,

      createdAt: getCurrentDate(),
      updatedAt: getCurrentDate(),
    };

    likes[nextFeedId] = {
      totalCount: 0,
      isLiked: false,
    };
    comments[nextFeedId] = [];
    reports[nextFeedId] = false;

    return createHttpSuccessResponse({});
  }),

  // 3️⃣ 피드 상세
  http.get('/feeds/:feed_id', ({ params }) => {
    const { feed_id } = params;

    if (isNaN(Number(feed_id))) {
      return createHttpErrorResponse('4220');
    }

    const formattedFeedId = Number(feed_id);
    const feed = feeds[formattedFeedId];

    if (!feed) {
      return createHttpErrorResponse('4040');
    }

    return createHttpSuccessResponse({ feed });
  }),

  // 4️⃣ 피드 수정
  http.put('/feeds/:feed_id', async ({ request, params }) => {
    const { feed_id } = params;

    if (isNaN(Number(feed_id))) {
      return createHttpErrorResponse('4220');
    }

    const formattedFeedId = Number(feed_id);

    if (!feeds[formattedFeedId]) {
      return createHttpErrorResponse('4040');
    }

    const { content, images } = (await request.json()) as FeedForm;

    if (content.length === 0) {
      return createHttpErrorResponse('4003');
    }

    feeds[formattedFeedId] = {
      ...feeds[formattedFeedId],
      content,
      images: images.map((image, idx) => ({ id: idx + 1, imageUrl: image })),

      updatedAt: getCurrentDate(),
    };

    return createHttpSuccessResponse({});
  }),

  // 5️⃣ 피드 삭제
  http.delete('/feeds/:feed_id', ({ params }) => {
    const { feed_id } = params;

    if (isNaN(Number(feed_id))) {
      return createHttpErrorResponse('4220');
    }

    const formattedFeedId = Number(feed_id);

    if (!feeds[formattedFeedId]) {
      return createHttpErrorResponse('4040');
    }

    delete feeds[formattedFeedId];
    delete likes[formattedFeedId];
    delete comments[formattedFeedId];

    return createHttpSuccessResponse({});
  }),

  // 6️⃣ 피드 신고
  http.post('/feeds/:feed_id/reports', async ({ request, params }) => {
    const { feed_id } = params;

    if (isNaN(Number(feed_id))) {
      return createHttpErrorResponse('4220');
    }

    const formattedFeedId = Number(feed_id);

    if (!feeds[formattedFeedId]) {
      return createHttpErrorResponse('4040');
    }

    const reportForm = (await request.json()) as ReportForm;
    const { category, isBlind } = reportForm;

    if (category.length === 0) {
      return createHttpErrorResponse('4003');
    }

    if (isBlind) {
      reports[formattedFeedId] = true;
    }

    return createHttpSuccessResponse({});
  }),

  // 7️⃣ 피드 북마크
  http.put('/feeds/:feed_id/bookmarks', ({ params }) => {
    const { feed_id } = params;

    if (isNaN(Number(feed_id))) {
      return createHttpErrorResponse('4220');
    }

    const formattedFeedId = Number(feed_id);

    if (!feeds[formattedFeedId]) {
      return createHttpErrorResponse('4040');
    }

    feeds[formattedFeedId].isBookmarked = !feeds[formattedFeedId].isBookmarked;

    return createHttpSuccessResponse({
      isBookmarked: feeds[formattedFeedId].isBookmarked,
    });
  }),
];
