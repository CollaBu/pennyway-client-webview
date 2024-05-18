import { renderHook, act, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { createQueryClientWrapper } from '@/shared/tests';

import { useLikes } from '../api';

describe('좋아요 기능 테스트', () => {
  it('좋아요 상태가 아닐 때, 좋아요 버튼을 클릭하면 좋아요 상태가 변경된다.', async () => {
    const { result } = renderHook(() => useLikes(1, false), {
      wrapper: createQueryClientWrapper(),
    });

    act(() => result.current.handleLikeFeed());

    // then
    await waitFor(() => {
      const {
        data: { isLiked },
      } = result.current.data;

      expect(isLiked).toBeTruthy();
    });
  });

  it('좋아요 상태일 때, 좋아요 버튼을 클릭하면 좋아요가 취소된다.', async () => {
    const { result } = renderHook(() => useLikes(1, true), {
      wrapper: createQueryClientWrapper(),
    });

    act(() => result.current.handleLikeFeed());

    // then
    await waitFor(() => {
      const {
        data: { isLiked },
      } = result.current.data;

      expect(isLiked).toBeFalsy();
    });
  });
});
