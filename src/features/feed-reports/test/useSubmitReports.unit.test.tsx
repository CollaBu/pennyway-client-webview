import { act, renderHook, waitFor } from '@testing-library/react';
import { expect, test } from 'vitest';

import { createQueryClientWrapper } from '@/shared/tests';

import { useSubmitReports } from '../api';

test('신고 기능 테스트', async () => {
  // given
  const { result } = renderHook(() => useSubmitReports(1), {
    wrapper: createQueryClientWrapper(),
  });
  const body = {
    category: '상업적/홍보성',
    content: '',
    isBlind: false,
  };

  // when
  act(() => result.current.reportFeed(body));

  // then
  await waitFor(() => {
    const {
      data: { isReported },
    } = result.current.data;

    expect(isReported).toBeTruthy();
  });
});
