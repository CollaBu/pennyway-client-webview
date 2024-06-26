import { renderHook, act, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { createQueryClientWrapper } from '@/shared/tests';

import { useUnfollow } from '../api';

describe('Unfollow 기능 테스트', () => {
  it('following 상태일 때, none 상태로 변경된다.', async () => {
    // given
    const { result } = renderHook(() => useUnfollow(2, false), {
      wrapper: createQueryClientWrapper(),
    });

    // when
    act(() => result.current.handleUnfollow());

    // then
    await waitFor(() => {
      const {
        data: { relationshipStatus: initialStatus },
      } = result.current.data;

      expect(initialStatus).toBe('none');
    });
  });

  it('pending 상태일 때, none 상태로 변경된다.', async () => {
    // given
    const { result } = renderHook(() => useUnfollow(3, true), {
      wrapper: createQueryClientWrapper(),
    });

    //when
    act(() => result.current.handleUnfollow());

    //then
    await waitFor(() => {
      const {
        data: { relationshipStatus: initialStatus },
      } = result.current.data;

      expect(initialStatus).toBe('none');
    });
  });
});
