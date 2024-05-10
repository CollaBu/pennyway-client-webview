import '@testing-library/jest-dom/vitest';
import * as matchers from '@testing-library/jest-dom/matchers';
// 테스트용 Mocking 서버 설정
import { setupServer } from 'msw/node';
import { beforeAll, afterAll, afterEach, expect } from 'vitest';

import { followHandler } from './app/mocks/handler/follow';
import { likeHandlers } from './app/mocks/handler/like';
import { profileHandler } from './app/mocks/handler/profile';
import { searchHandler } from './app/mocks/handler/search';

expect.extend(matchers);

export const server = setupServer(
  ...likeHandlers,
  ...followHandler,
  ...searchHandler,
  ...profileHandler,
);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
