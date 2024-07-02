import { FetchUser } from '@/shared/consts';

import { axiosInstance } from '../config/instance';

/**
 * 유저 정보 API
 * @param userId 유저 아이디
 * @returns 유저 정보
 */
export async function fetchUser(userId: number): Promise<FetchUser> {
  const { data } = await axiosInstance.get(`/users/${userId}`);

  return data;
}
