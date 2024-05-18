import { renderHook, act, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { createQueryClientWrapper } from '@/shared/tests';

import { useHideCancel, useHides } from '../api';

describe('숨기기 기능 테스트', () => {
  it('숨기기 상태가 아닐 때, 숨기기 버튼을 클릭하면 게시물이 숨겨진다.', async () => {
    // given
    const { result } = renderHook(() => useHides(1), {
      wrapper: createQueryClientWrapper(),
    });

    // when
    act(() => result.current.hideFeed());

    // then
    await waitFor(() => {
      const {
        data: { isHidden },
      } = result.current.data;

      expect(isHidden).toBeTruthy();
    });
  });

  it('숨기기 상태일 때, 취소 버튼을 클릭하면 숨기기가 취소된다.', async () => {
    // given
    const { result } = renderHook(() => useHideCancel(1), {
      wrapper: createQueryClientWrapper(),
    });

    // when
    act(() => result.current.hideCancelFeed());

    // then
    await waitFor(() => {
      const {
        data: { isHidden },
      } = result.current.data;

      expect(isHidden).toBeFalsy();
    });
  });
});
