import { expect, test, vi } from 'vitest';

import { fireEvent, render, screen } from '@/shared/tests';
import { Toast } from '@/shared/toast';

import { FeedReportsForm } from '../ui';

vi.mock('@/shared/ui/modal/ModalOverlay', () => ({
  ModalOverlay: ({ children }: { children: JSX.Element }) => (
    <section>{children}</section>
  ),
}));

vi.mock('@/features/feed-reports/model', () => ({
  useReportForm: () => ({
    content: '',
    isBlind: false,
    isDisabledReportForm: false,
    createReportBody: () => ({
      category: '상업적/홍보성',
      content: '',
      isBlind: false,
    }),
  }),
}));

test('신고하기 버튼을 클릭하면, 신고 접수 토스트 메시지가 표시된다', async () => {
  // given
  render(
    <>
      <FeedReportsForm feedId={1} onClose={() => {}} />
      <Toast />
    </>,
  );

  const reportBtn = screen.getByRole('button', { name: '신고하기' });

  // when
  fireEvent.click(reportBtn);

  // then
  const reportAcceptMsg = await screen.findByText('신고가 접수되었어요');
  expect(reportAcceptMsg).toBeInTheDocument();
});
