import { renderHook, act, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { createQueryClientWrapper } from '@/shared/tests';

import { useBookmarks } from '../api';

describe('북마크 기능 테스트', () => {
  it('북마크 상태가 아닐 때, 북마크 버튼을 클릭하면 북마크 된다', async () => {
    // given
    const { result } = renderHook(() => useBookmarks(1, false), {
      wrapper: createQueryClientWrapper(),
    });

    // when
    act(() => result.current.handleBookmarkFeed());

    // then
    await waitFor(() => {
      const {
        data: { isBookmarked },
      } = result.current.data;
      expect(isBookmarked).toBeTruthy();
    });
  });

  it('북마크 상태일 때, 북마크 버튼을 클릭하면 북마크가 취소된다', async () => {
    // given
    const { result } = renderHook(() => useBookmarks(1, true), {
      wrapper: createQueryClientWrapper(),
    });

    // when
    act(() => result.current.handleBookmarkFeed());

    // then
    await waitFor(() => {
      const {
        data: { isBookmarked },
      } = result.current.data;
      expect(isBookmarked).toBeFalsy();
    });
  });
});
