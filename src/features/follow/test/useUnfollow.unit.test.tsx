import { renderHook, act, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { createQueryClientWrapper } from '@/shared/tests';

import { useUnfollow } from '../api';

describe('Unfollow 기능 테스트', () => {
  it('self 상태일 때 Unfollow 기능이 동작하지 않는다.', async () => {
    // given
    const { result } = renderHook(() => useUnfollow('self', false), {
      wrapper: createQueryClientWrapper(),
    });

    // when
    act(() => result.current.handleUnfollow());

    // then
    await waitFor(() => {
      const {
        data: { initialStatus },
      } = result.current.data;

      expect(initialStatus).toBe('self');
    });
  });

  it('following 상태일 때 Unfollow 기능 실행 시, none 상태로 변경된다.', async () => {
    // given
    const { result } = renderHook(() => useUnfollow('following', false), {
      wrapper: createQueryClientWrapper(),
    });

    // when
    act(() => result.current.handleUnfollow());

    // then
    await waitFor(() => {
      const {
        data: { initialStatus },
      } = result.current.data;

      expect(initialStatus).toBe('none');
    });
  });

  it('pending 상태일 때 Unfollow 기능 실행 시, none 상태로 변경된다.', async () => {
    // given
    const { result } = renderHook(() => useUnfollow('pending', true), {
      wrapper: createQueryClientWrapper(),
    });

    //when
    act(() => result.current.handleUnfollow());

    //then
    await waitFor(() => {
      const {
        data: { initialStatus },
      } = result.current.data;

      expect(initialStatus).toBe('none');
    });
  });
});
