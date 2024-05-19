import '@testing-library/jest-dom/vitest';
import * as matchers from '@testing-library/jest-dom/matchers';
// 테스트용 Mocking 서버 설정
import { setupServer } from 'msw/node';
import { beforeAll, afterAll, afterEach, expect } from 'vitest';

import { bookmarkHandlers } from './app/mocks/handler/bookmark';
import { commentHandlers } from './app/mocks/handler/comment';
import { feedHandlers } from './app/mocks/handler/feed';
import { followHandler } from './app/mocks/handler/follow';
import { feedHidesHandlers } from './app/mocks/handler/hide';
import { likeHandlers } from './app/mocks/handler/like';
import { searchHandler } from './app/mocks/handler/search';
import { userHandler } from './app/mocks/handler/user';

expect.extend(matchers);

export const server = setupServer(
  ...commentHandlers,
  ...feedHandlers,
  ...feedHidesHandlers,
  ...bookmarkHandlers,
  ...likeHandlers,
  ...followHandler,
  ...searchHandler,
  ...userHandler,
);

beforeAll(() => server.listen({ onUnhandledRequest: 'bypass' }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
