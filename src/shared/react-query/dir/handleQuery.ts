import { Query, QueryKey } from '@tanstack/react-query';

import { removeErrorHandler, showErrorHandler } from './toastHandlers';

/**
 * 쿼리 성공 핸들러
 */
export function handleQuerySuccess() {
  removeErrorHandler();
}

/**
 * 쿼리 에러 핸들러 함수
 * @param query 쿼리
 * @if 피드 메인 페이지 2 페이지부터 에러가 발생하면 네트워크 에러 토스트를 띄웁니다.
 */
export function handleQueryError(
  query: Query<unknown, unknown, unknown, QueryKey>,
) {
  const { queryKey, state } = query;

  // feeds 쿼리에서 2 페이지부터 에러가 발생하면 네트워크 에러 토스트를 띄웁니다.
  if (queryKey[0] === 'feeds' && state.data) showErrorHandler();
}

/**
 * 뮤테이션 에러 핸들러
 */
export function handleMutationError() {
  return;
}