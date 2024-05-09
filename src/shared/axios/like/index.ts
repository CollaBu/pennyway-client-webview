import { axiosInstance } from '../config/instance';

/**
 * 좋아요 API
 * @param feedId 피드 아이디
 * @returns 좋아요 상태
 */
export async function requestLikeFeed(feedId: number) {
  const { data } = await axiosInstance.put(`/feeds/${feedId}/likes`);

  return data;
}

/**
 * 좋아요 취소 API
 * @param feedId 피드 아이디
 * @returns 좋아요 상태
 */
export async function requestUnlikeFeed(feedId: number) {
  const { data } = await axiosInstance.delete(`/feeds/${feedId}/likes`);

  return data;
}
