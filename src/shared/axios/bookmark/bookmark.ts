import { axiosInstance } from '../config';

export async function requestBookmarkFeed(feedId: number) {
  const { data } = await axiosInstance.put(`/feeds/${feedId}/bookmarks`);

  return data;
}

export async function requestUnBookmarkFeed(feedId: number) {
  const { data } = await axiosInstance.delete(`/feeds/${feedId}/bookmarks`);

  return data;
}
