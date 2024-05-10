import { Query, QueryKey } from '@tanstack/react-query';

import { showErrorHandler } from './toastHandlers';

/**
 * 쿼리 에러 핸들러
 * @param query 쿼리
 * @returns
 */
export function handleQueryError(
  query: Query<unknown, unknown, unknown, QueryKey>,
) {
  const { queryKey, state } = query;

  // feeds 쿼리에서 데이터가 없을 경우 에러 토스트를 띄우지 않습니다.
  if (queryKey[0] === 'feeds' && state.data === undefined) {
    return;
  }

  showErrorHandler();
}

export function handleMutationError() {
  showErrorHandler();
}
