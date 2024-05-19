import { renderHook, waitFor } from '@testing-library/react';
import { expect, test } from 'vitest';

import { createQueryClientWrapper } from '@/shared/tests';

import { useInfinityFeeds } from '../api';

test('무한 스크롤 테스트', async () => {
  const { result } = renderHook(() => useInfinityFeeds(), {
    wrapper: createQueryClientWrapper(),
  });

  await waitFor(() => expect(result.current.feeds?.pageParams).toEqual([1]));

  result.current.fetchNextFeeds();

  await waitFor(() => expect(result.current.feeds?.pageParams).toEqual([1, 2]));
});
