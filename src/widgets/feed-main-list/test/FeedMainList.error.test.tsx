import { HttpResponse, http } from 'msw';
import { expect, test } from 'vitest';

import { server } from '@/setupTest';
import { render, screen } from '@/shared/tests/setup';

import { FeedMainList } from '..';

test('피드 메인 페이지 에러 발생 시, 네트워크 에러 메시지가 화면에 표시된다.', async () => {
  // given
  server.use(
    http.get('/feeds', async () => {
      return new HttpResponse(null, { status: 524 }); // 타임아웃 에러 반환
    }),
  );
  render(<FeedMainList />);

  const errorTitle = await screen.findByRole('heading', {
    level: 1,
    name: '인터넷에 연결되지 않았어요',
  });
  const retryButton = await screen.findByRole('button', {
    name: '재시도하기',
  });

  // then
  expect(errorTitle).toBeInTheDocument();
  expect(retryButton).toBeInTheDocument();
});
