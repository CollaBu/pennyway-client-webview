import axios from 'axios';
import { describe, expect, it } from 'vitest';

describe('[GET] 유저 조회 API', () => {
  it('유저 아이디가 정수 타입이 아니라면 에러가 발생한다.', async () => {
    const userIds = ['hello', undefined, '[]', '{}'];

    for (const userId of userIds) {
      const response = await axios({
        method: 'GET',
        url: `/users/${userId}`,
      });
      const { code } = response.data;

      expect(code).toBe('4220');
    }
  });

  it('유저 아이디에 해당하는 유저가 존재하지 않는다면 에러가 발생한다.', async () => {
    const userId = 5389532104234901;

    const response = await axios({
      method: 'GET',
      url: `/users/${userId}`,
    });
    const { code } = response.data;

    expect(code).toBe('4040');
  });
});

describe('[GET] 프로필 피드 조회 API', () => {
  it('유저 아이디가 정수 타입이 아니라면 에러가 발생한다.', async () => {
    const userIds = ['hello', undefined, '[]', '{}'];

    for (const userId of userIds) {
      const response = await axios({
        method: 'GET',
        url: `/users/${userId}`,
      });
      const { code } = response.data;

      expect(code).toBe('4220');
    }
  });

  it('유저 아이디에 해당하는 유저가 존재하지 않는다면 에러가 발생한다.', async () => {
    const userId = 5389532104234901;

    const response = await axios({
      method: 'GET',
      url: `/users/${userId}`,
    });
    const { code } = response.data;

    expect(code).toBe('4040');
  });

  it('page가 정수 타입이 아니라면 에러가 발생한다.', async () => {
    const pages = ['hello', undefined, '[]', '{}'];
    const userId = 1;
    for (const page of pages) {
      const response = await axios({
        method: 'GET',
        url: `/users/${userId}/feeds?page=${page}`,
      });
      const { code } = response.data;

      expect(code).toBe('4220');
    }
  });
});
