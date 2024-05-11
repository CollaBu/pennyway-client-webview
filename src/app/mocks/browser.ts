import { setupWorker } from 'msw/browser';

import { commentHandlers } from './handler/comment';
import { feedHandlers } from './handler/feed';
import { likeHandlers } from './handler/like';
import { followHandler } from './handler/follow';
import { searchHandler } from './handler/search';
import { userHandler } from './handler/user';

// 브라우저에서 실행하기 위한 mocking worker 초기화
export const worker = setupWorker(
  ...commentHandlers,
  ...feedHandlers,
  ...likeHandlers,
  ...followHandler,
  ...searchHandler,
  ...userHandler,
);
