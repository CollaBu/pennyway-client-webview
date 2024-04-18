import '@testing-library/jest-dom/vitest';
import * as matchers from '@testing-library/jest-dom/matchers';
// 테스트용 Mocking 서버 설정
import { setupServer } from 'msw/node';
import { beforeAll, afterAll, afterEach, expect } from 'vitest';

// jest-dom의 matchers를 vitest 테스트 환경에 추가
expect.extend(matchers);

export const server = setupServer();

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
