import { FetchRelationshipStatus } from '@/shared/consts';

import { axiosInstance } from '../config/instance';

/**
 * 팔로우 API
 * @param userId 유저 아이디
 * @returns 관계 상태
 */
export async function requestFollow(
  userId: number,
): Promise<FetchRelationshipStatus> {
  const { data } = await axiosInstance.post(`/users/${userId}/follow`);

  return data;
}

/**
 * 언팔로우/팔로우 취소 API
 * @param userId 유저 아이디
 * @returns 관계 상태
 */
export async function requestUnfollow(
  userId: number,
): Promise<FetchRelationshipStatus> {
  const { data } = await axiosInstance.delete(`/users/${userId}/follow`);

  return data;
}
