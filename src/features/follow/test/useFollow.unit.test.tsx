import { renderHook, act, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { createQueryClientWrapper } from '@/shared/tests';

import { useFollow } from '../api';

describe('Follow 기능 테스트', () => {
  it('self 상태일 때 Follow 기능이 동작하지 않는다.', async () => {
    // given
    const { result } = renderHook(() => useFollow('self', false), {
      wrapper: createQueryClientWrapper(),
    });

    // when
    act(() => result.current.handleFollow());

    // then
    await waitFor(() => {
      const {
        data: { initialStatus },
      } = result.current.data;

      expect(initialStatus).toBe('self');
    });
  });

  it('none 상태일 때 Follow 기능 실행 시, 공개 계정이라면 following 상태로 변경된다.', async () => {
    //given
    const { result } = renderHook(() => useFollow('none', false), {
      wrapper: createQueryClientWrapper(),
    });

    //when
    act(() => result.current.handleFollow());

    //then
    await waitFor(() => {
      const {
        data: { initialStatus },
      } = result.current.data;

      expect(initialStatus).toBe('following');
    });
  });

  it('none 상태일 때 Follow 기능 실행 시, 비공개 계정이라면 pending 상태로 변경된다.', async () => {
    const { result } = renderHook(() => useFollow('none', true), {
      wrapper: createQueryClientWrapper(),
    });

    act(() => result.current.handleFollow());

    await waitFor(() => {
      const {
        data: { initialStatus },
      } = result.current.data;

      expect(initialStatus).toBe('pending');
    });
  });
});
