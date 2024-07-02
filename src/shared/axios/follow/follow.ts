import { axiosInstance } from '../config/instance';

/**
 * 팔로우 API
 * @param userId 유저 아이디
 * @returns 관계 상태
 */
export async function requestFollow(userId: number) {
  const { data } = await axiosInstance.post(`/users/${userId}/follow`);

  return data;
}

/**
 * 언팔로우/팔로우 취소 API
 * @param userId 유저 아이디
 * @returns 관계 상태
 */
export async function requestUnfollow(userId: number) {
  const { data } = await axiosInstance.delete(`/users/${userId}/follow`);

  return data;
}

/**
 * 팔로우 확인 API
 * @param userId 유저 아이디
 * @returns 관계 상태
 */
export async function fetchRelationshipStatus(userId: number) {
  const { data } = await axiosInstance.get(`/users/${userId}/follow`);

  return data;
}
