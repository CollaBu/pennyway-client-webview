import { renderHook, act, waitFor } from '@testing-library/react';
import { expect, test, vi } from 'vitest';

import * as bookmarkModule from '@/shared/axios';
import { createQueryClientWrapper } from '@/shared/tests';

import { useBookmarks } from '../api';

test('북마크 상태가 아닐 때, 북마크 버튼을 클릭하면 북마크 요청이 발생한다.', async () => {
  // given
  // requestLikeFeed 함수를 스파이한다.
  const spy = vi.spyOn(bookmarkModule, 'requestBookmarkFeed');
  const { result } = renderHook(() => useBookmarks(1, false), {
    wrapper: createQueryClientWrapper(),
  });

  // requestLikeFeed가 호출되지 않았는지 확인
  await waitFor(() => expect(spy).not.toHaveBeenCalled());

  // when
  // 좋아요 버튼 클릭
  await act(async () => result.current.handleBookmarkFeed());

  // then
  // requestLikeFeed가 호출되었는지 확인
  await waitFor(() => expect(spy).toHaveBeenCalled());
});

test('북마크 상태일 때, 북마크 버튼을 클릭하면 북마크 취소 요청이 발생한다.', async () => {
  // given
  const spy = vi.spyOn(bookmarkModule, 'requestUnbookmarkFeed');
  const { result } = renderHook(() => useBookmarks(1, true), {
    wrapper: createQueryClientWrapper(),
  });

  await waitFor(() => expect(spy).not.toHaveBeenCalled());

  // when
  await act(async () => result.current.handleBookmarkFeed());

  // then
  await waitFor(() => expect(spy).toHaveBeenCalled());
});
