import { setupWorker } from 'msw/browser';

// 브라우저에서 실행하기 위한 mocking worker 초기화
export const worker = setupWorker();
