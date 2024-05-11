import { http } from 'msw';
import { User } from '@/shared/consts';

import {
  createHttpSuccessResponse,
  createHttpErrorResponse,
} from '../dir/response';

import { users } from '../consts/user';
import { likeUsers } from '../consts/likeUser';

export const searchHandler = [
  // 1️⃣ 사용자 검색
  http.get('/users', ({ request }) => {
    const url = new URL(request.url);
    const query = url.searchParams.get('q');

    if (!query) {
      return createHttpErrorResponse('4220');
    }

    const filteredUsers: User[] = Object.values(users).filter((user) =>
      user.name.includes(query),
    );
    return createHttpSuccessResponse({ users: filteredUsers });
  }),
  // 2️⃣ 좋아요 사용자 검색
  http.get('/like', ({ request }) => {
    const url = new URL(request.url);
    const query = url.searchParams.get('q');

    if (!query) {
      return createHttpErrorResponse('4220');
    }

    const filteredUsers: User[] = Object.values(likeUsers).filter((user) =>
      user.name.includes(query),
    );

    return createHttpSuccessResponse({ likeUsers: filteredUsers });
  }),
];
