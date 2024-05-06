import { http } from 'msw';

import { users } from '../consts/user';
import { profileFeeds } from '../consts/profileFeed';
import {
  createHttpSuccessResponse,
  createHttpErrorResponse,
} from '../dir/response';
import { reports } from '../consts/report';
import { relationshipStatus } from '../consts/relationshipStatus';

export const userHandlers = [
  // 1️⃣ 팔로우 요청
  http.post('/users/:user_id/follow', async ({ params }) => {
    const { user_id } = params;

    if (isNaN(Number(user_id))) {
      return createHttpErrorResponse('4220');
    }

    const formattedUserId = Number(user_id);
    const followInfo = relationshipStatus[formattedUserId];

    if (followInfo !== 'none') {
      return createHttpErrorResponse('4220');
    }

    return createHttpSuccessResponse({});
  }),
  // 2️⃣ 언팔로우 & 팔로우 요청 취소
  http.delete('/users/:user_id/follow', ({ params }) => {
    const { user_id } = params;

    if (isNaN(Number(user_id))) {
      return createHttpErrorResponse('4220');
    }

    const formattedUserId = Number(user_id);
    const followInfo = relationshipStatus[formattedUserId];

    if (followInfo === 'self' || followInfo === 'none') {
      return createHttpErrorResponse('4220');
    }

    return createHttpSuccessResponse({});
  }),
  // 3️⃣ 팔로우 확인
  http.get('/users/:user_id/follow', ({ params }) => {
    const { user_id } = params;

    if (isNaN(Number(user_id))) {
      return createHttpErrorResponse('4220');
    }

    const formattedUserId = Number(user_id);
    const followInfo = relationshipStatus[formattedUserId];

    if (!followInfo) {
      return createHttpErrorResponse('4040');
    }

    return createHttpSuccessResponse({ relationshipStatus: followInfo });
  }),
  // 4️⃣ 사용자 검색
  http.get('/users', ({ request }) => {
    const url = new URL(request.url);
    const query = url.searchParams.get('q');

    if (!query) {
      return createHttpErrorResponse('4220');
    }

    const filteredUsers = Object.values(users).filter((user) =>
      user.name.includes(query),
    );

    return createHttpSuccessResponse({ users: filteredUsers });
  }),
  // 5️⃣ 좋아요 사용자 검색
  http.get('/like', ({ request }) => {
    const url = new URL(request.url);
    const query = url.searchParams.get('q');

    if (!query) {
      return createHttpErrorResponse('4220');
    }

    const filteredUsers = Object.values(users).filter((user) =>
      user.name.includes(query),
    );

    return createHttpSuccessResponse({ users: filteredUsers });
  }),
  // 6️⃣ 사용자 프로필 조회
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
  // 7️⃣ 사용자 프로필 피드
  http.get('/users/:user_id', ({ request, params }) => {
    const { user_id } = params;

    const url = new URL(request.url);
    const page = url.searchParams.get('page') || 1;

    if (isNaN(Number(user_id))) {
      return createHttpErrorResponse('4220');
    }

    if (isNaN(Number(page)) || page === '0') {
      return createHttpErrorResponse('4220');
    }

    const formattedPage = Number(page);
    const pageCount = 5;

    const profileFeedsData = Object.values(profileFeeds)
      .slice((formattedPage - 1) * pageCount, formattedPage * pageCount)
      .filter((feed) => !reports[feed.id]);

    const totalFeeds = Object.values(profileFeeds).length;
    const endOfPageRange = formattedPage * pageCount;
    const hasNextPage = endOfPageRange < totalFeeds;

    return createHttpSuccessResponse({
      feeds: profileFeeds,
      currentPageNumber: pageCount,
      pageSize: formattedPage,
      numberOfElements: profileFeedsData.length,
      hasNextPage,
    });
  }),
];
