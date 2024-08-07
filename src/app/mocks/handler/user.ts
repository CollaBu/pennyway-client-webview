import { http } from 'msw';

import {
  createHttpSuccessResponse,
  createHttpErrorResponse,
} from '../dir/response';

import { users } from '../consts/user';
import { feeds } from '../consts/feed';
import { reports } from '../consts/report';
import { hiddens } from '../consts/hidden';

export const userHandler = [
  // 1️⃣ 사용자 조회
  http.get('/users/:user_id', ({ params }) => {
    const { user_id } = params;

    if (isNaN(Number(user_id))) {
      return createHttpErrorResponse('4220');
    }

    const formattedUserId = Number(user_id);
    const user = users[formattedUserId];

    if (!user) {
      return createHttpErrorResponse('4040');
    }

    return createHttpSuccessResponse({ user: user });
  }),
  // 2️⃣ 사용자별 피드 조회
  http.get('/users/:user_id/feeds', ({ request, params }) => {
    const { user_id } = params;

    const url = new URL(request.url);
    const page = url.searchParams.get('page') || 1;

    if (isNaN(Number(user_id))) {
      return createHttpErrorResponse('4220');
    }

    const formattedUserId = Number(user_id);
    const user = users[formattedUserId];

    if (!user) {
      return createHttpErrorResponse('4040');
    }

    if (isNaN(Number(page)) || page === '0') {
      return createHttpErrorResponse('4220');
    }

    const formattedPage = Number(page);
    const pageCount = 5;

    const profileFeedsData = Object.values(feeds)
      .filter((feed) => formattedUserId === feed.user.id)
      .slice((formattedPage - 1) * pageCount, formattedPage * pageCount)
      .filter((feed) => !reports[feed.id] && !hiddens[feed.id]);

    const totalFeeds = Object.values(profileFeedsData).length;
    const endOfPageRange = formattedPage * pageCount;
    const hasNextPage = endOfPageRange < totalFeeds;

    return createHttpSuccessResponse({
      feeds: profileFeedsData,
      currentPageNumber: pageCount,
      pageSize: formattedPage,
      numberOfElements: profileFeedsData.length,
      hasNextPage,
    });
  }),
];
