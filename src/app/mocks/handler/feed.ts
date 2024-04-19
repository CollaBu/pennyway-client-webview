import { HttpResponse, http } from 'msw';

import { feeds } from '../consts/feed';
import { reports } from '../consts/report';
import { users } from '../consts/user';
import { likes } from '../consts/like';
import { comments } from '../consts/comment';
import { getCurrentDate } from '../dir/date';
import { createHttpErrorResponse } from '../dir/response';

interface FeedForm {
  title: string;
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
  http.get('/feeds', ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get('page') || 1;

    if (isNaN(Number(page)) || page === '0') {
      return createHttpErrorResponse('4220');
    }

    const formattedPage = Number(page);
    const pageCount = 5; // 임시 5개 -> 추후 10개 변경 예정

    // 임시 5개 -> 추후 10개 변경 예정
    const feedsData = Object.values(feeds)
      .slice((formattedPage - 1) * pageCount, formattedPage * pageCount)
      .filter((feed) => !reports[feed.id]);

    const totalFeeds = Object.values(feeds).length;
    const endOfPageRange = formattedPage * pageCount;
    const hasNext = endOfPageRange < totalFeeds;

    return HttpResponse.json(
      {
        code: '2000',
        data: {
          feeds: feedsData,
          currentPageNumber: pageCount,
          pageSize: formattedPage,
          numberOfElements: feedsData.length,
          hasNext,
        },
      },
      { status: 200 },
    );
  }),

  // 2️⃣ 피드 작성
  http.post('/feeds', async ({ request }) => {
    const { title, content, images } = (await request.json()) as FeedForm;

    if (title.length === 0 || content.length === 0) {
      return createHttpErrorResponse('4003');
    }

    const nextFeedId = Object.keys(feeds).length + 1;

    feeds[nextFeedId] = {
      id: nextFeedId,
      user: users[1], // 임의 지정
      title,
      content,
      images: images.map((image, idx) => ({ id: idx + 1, imageUrl: image })),

      likeCount: 0,
      commentCount: 0,

      isLiked: false,
      isBookmark: false,

      createdAt: getCurrentDate(),
      updatedAt: getCurrentDate(),
    };

    likes[nextFeedId] = {
      totalCount: 0,
      isLiked: false,
    };
    comments[nextFeedId] = [];
    reports[nextFeedId] = false;

    return HttpResponse.json({ code: '2000', data: {} }, { status: 200 });
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

    return HttpResponse.json({ code: '2000', feed }, { status: 200 });
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

    const { title, content, images } = (await request.json()) as FeedForm;

    if (title.length === 0 || content.length === 0) {
      return createHttpErrorResponse('4003');
    }

    feeds[formattedFeedId] = {
      ...feeds[formattedFeedId],
      title,
      content,
      images: images.map((image, idx) => ({ id: idx + 1, imageUrl: image })),

      updatedAt: getCurrentDate(),
    };

    return HttpResponse.json({ code: '2000', data: {} }, { status: 200 });
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

    return HttpResponse.json({ code: '2000', data: {} }, { status: 200 });
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

    return HttpResponse.json({ code: '2000', data: {} }, { status: 200 });
  }),
];
