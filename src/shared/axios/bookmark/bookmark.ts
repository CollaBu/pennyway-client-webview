import { axiosInstance } from '../config';

/**
 * 피드 북마크 API
 * @param feedId 피드 아이디
 * @returns 피드 북마크 상태
 */
export async function requestBookmarkFeed(feedId: number) {
  const { data } = await axiosInstance.put(`/feeds/${feedId}/bookmarks`);

  return data;
}

/**
 * 피드 북마크 취소 API
 * @param feedId 피드 아이디
 * @returns 피드 북마크 상태
 */
export async function requestUnbookmarkFeed(feedId: number) {
  const { data } = await axiosInstance.delete(`/feeds/${feedId}/bookmarks`);

  return data;
}
