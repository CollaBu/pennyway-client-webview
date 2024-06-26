import { renderHook, act, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { createQueryClientWrapper } from '@/shared/tests';

import { useFollow } from '../api';

describe('Follow 기능 테스트', () => {
  describe('none 상태일 때', () => {
    it('공개 계정이라면 following 상태로 변경된다.', async () => {
      //given
      const { result } = renderHook(() => useFollow(9, false), {
        wrapper: createQueryClientWrapper(),
      });

      //when
      act(() => result.current.handleFollow());

      //then
      await waitFor(() => {
        const {
          data: { relationshipStatus: initialStatus },
        } = result.current.data;

        expect(initialStatus).toBe('following');
      });
    });

    it('비공개 계정이라면 pending 상태로 변경된다.', async () => {
      const { result } = renderHook(() => useFollow(4, true), {
        wrapper: createQueryClientWrapper(),
      });

      act(() => result.current.handleFollow());

      await waitFor(() => {
        const {
          data: { relationshipStatus: initialStatus },
        } = result.current.data;

        expect(initialStatus).toBe('pending');
      });
    });
  });
});
