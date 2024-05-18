import { renderHook, act } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import * as bookmarkModule from '@/shared/axios';
import { createQueryClientWrapper } from '@/shared/tests';

import { useBookmarks } from '../api';

describe('북마크 상태가 아닐 때 북마크 버튼을 클릭하면', () => {
  it('북마크 요청이 발생한다.', async () => {
    // given
    const spy = vi.spyOn(bookmarkModule, 'requestBookmarkFeed');
    const { result } = renderHook(() => useBookmarks(1, false), {
      wrapper: createQueryClientWrapper(),
    });

    // when
    expect(spy).not.toHaveBeenCalled();
    await act(async () => result.current.handleBookmarkFeed());

    // then
    expect(spy).toHaveBeenCalled();
  });

  it('북마크 상태가 변경된다.', async () => {
    // given
    const {
      data: { isBookmarked },
    } = await bookmarkModule.requestBookmarkFeed(1);

    expect(isBookmarked).toBeTruthy();
  });
});

describe('북마크 상태일 때 북마크 버튼을 클릭하면', () => {
  it('북마크 취소 요청이 발생한다.', async () => {
    // given
    const spy = vi.spyOn(bookmarkModule, 'requestUnbookmarkFeed');
    const { result } = renderHook(() => useBookmarks(1, true), {
      wrapper: createQueryClientWrapper(),
    });

    // when
    expect(spy).not.toHaveBeenCalled();
    await act(async () => result.current.handleBookmarkFeed());

    // then
    expect(spy).toHaveBeenCalled();
  });

  it('북마크 상태가 변경된다.', async () => {
    const {
      data: { isBookmarked },
    } = await bookmarkModule.requestUnbookmarkFeed(1);

    expect(isBookmarked).toBeFalsy();
  });
});
