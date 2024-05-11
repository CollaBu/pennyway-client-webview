import { http } from 'msw';

import {
  createHttpSuccessResponse,
  createHttpErrorResponse,
} from '../dir/response';

import { relationshipStatus } from '../consts/relationshipStatus';
import { users } from '../consts/user';

export const followHandler = [
  // 1️⃣ 팔로우 요청
  http.post('/users/:user_id/follow', ({ params }) => {
    const { user_id } = params;

    if (isNaN(Number(user_id))) {
      return createHttpErrorResponse('4220');
    }

    const formattedUserId = Number(user_id);
    const followInfo = relationshipStatus[formattedUserId];

    switch (followInfo) {
      case 'self':
        return createHttpErrorResponse('4220');
      case 'none':
        if (users[formattedUserId].locked) {
          relationshipStatus[formattedUserId] = 'pending';
        } else relationshipStatus[formattedUserId] = 'following';
        break;
      case 'following':
        return createHttpErrorResponse('4220');
      case 'pending':
        return createHttpErrorResponse('4220');
      default:
        return createHttpErrorResponse('4040');
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

    switch (followInfo) {
      case 'self':
        return createHttpErrorResponse('4220');
      case 'none':
        return createHttpErrorResponse('4220');
      case 'following':
        relationshipStatus[formattedUserId] = 'none';
        break;
      case 'pending':
        relationshipStatus[formattedUserId] = 'none';
        break;

      default:
        return createHttpErrorResponse('4040');
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
];
