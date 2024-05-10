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

  // feeds 쿼리에서 2 페이지부터 에러가 발생하면 네트워크 에러 토스트를 띄웁니다.
  if (queryKey[0] === 'feeds' && state.data) showErrorHandler();
}

export function handleMutationError() {
  showErrorHandler();
}
