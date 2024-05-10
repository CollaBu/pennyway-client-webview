import axios from 'axios';
import { describe, expect, it } from 'vitest';

const testCases = [
  ['GET', '팔로우 조회 API'],
  ['POST', '팔로우 신청 API'],
  ['DELETE', '언팔로우 & 팔로우 요청 취소 API'],
];

describe.each(testCases)('[%s] %s', (method) => {
  it('유저 아이디가 정수 타입이 아니라면 에러가 발생한다.', async () => {
    const userIds = ['hello', undefined, '[]', '{}'];

    for (const userId of userIds) {
      const response = await axios({
        method,
        url: `/users/${userId}/follow`,
      });
      const { code } = response.data;

      expect(code).toBe('4220');
    }
  });

  it('유저 아이디에 해당하는 유저가 존재하지 않는다면 에러가 발생한다.', async () => {
    const userId = 5389532104234901;

    const response = await axios({
      method,
      url: `/users/${userId}/follow`,
    });
    const { code } = response.data;

    expect(code).toBe('4040');
  });
});
