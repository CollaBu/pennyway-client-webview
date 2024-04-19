import axios from 'axios';
import { describe, expect, it } from 'vitest';

const testCases = [
  ['GET', '피드 좋아요 조회 API'],
  ['PUT', '피드 좋아요 API'],
  ['DELETE', '피드 좋아요 취소 API'],
];

describe.each(testCases)('[%s] %s', (method) => {
  it('피드 아이디가 정수 타입이 아니라면 에러가 발생한다.', async () => {
    const feedIds = ['hello', undefined, '[]', '{}'];

    for (const feedId of feedIds) {
      const response = await axios({
        method,
        url: `/feeds/${feedId}/likes`,
      });
      const { code } = response.data;

      expect(code).toBe('4220');
    }
  });

  it('피드 아이디에 해당하는 피드가 존재하지 않는다면 에러가 발생한다.', async () => {
    const feedId = 5389532104234901;

    const response = await axios({
      method,
      url: `/feeds/${feedId}/likes`,
    });
    const { code } = response.data;

    expect(code).toBe('4040');
  });
});
