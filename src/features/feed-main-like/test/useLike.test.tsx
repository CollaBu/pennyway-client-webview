import { renderHook, act, waitFor } from '@testing-library/react';
import { expect, test, vi } from 'vitest';

import * as likeModule from '@/shared/axios/like';
import { createQueryClientWrapper } from '@/shared/tests/setup';

import { useLike } from '../api';

test('좋아요 상태가 아닐 때, 좋아요 버튼을 클릭하면 좋아요 요청이 발생한다.', async () => {
  // given
  // requestLikeFeed 함수를 스파이한다.
  const spy = vi.spyOn(likeModule, 'requestLikeFeed');
  const { result } = renderHook(() => useLike(1, false), {
    wrapper: createQueryClientWrapper(),
  });

  // requestLikeFeed가 호출되지 않았는지 확인
  await waitFor(() => expect(spy).not.toHaveBeenCalled());

  // when
  // 좋아요 버튼 클릭
  await act(async () => result.current.handleLikeFeed());

  // then
  // requestLikeFeed가 호출되었는지 확인
  await waitFor(() => expect(spy).toHaveBeenCalled());
});

test('좋아요 상태일 때, 좋아요 버튼을 클릭하면 좋아요 취소 요청이 발생한다.', async () => {
  // given
  const spy = vi.spyOn(likeModule, 'requestUnlikeFeed');
  const { result } = renderHook(() => useLike(1, true), {
    wrapper: createQueryClientWrapper(),
  });

  await waitFor(() => expect(spy).not.toHaveBeenCalled());

  // when
  await act(async () => result.current.handleLikeFeed());

  // then
  await waitFor(() => expect(spy).toHaveBeenCalled());
});
