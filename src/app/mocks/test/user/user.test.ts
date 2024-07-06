import axios from 'axios';
import { expect, it } from 'vitest';
import { User } from '@/shared/consts';

async function getUserById(userId: number) {
  const user = await axios.get(`/users/${userId}`);
  const userData: User = user.data.data.user;
  return { userData };
}

async function getProfileFeedById(userId: number, page: number) {
  const profileFeed = await axios.get(`/users/${userId}/feeds?page=${page}`);

  const profileFeedData = profileFeed.data.data;
  return { profileFeedData };
}

it('유저 정보 조회 시, id에 일치하는 유저 정보를 반환한다.', async () => {
  const userId = 8;

  // 유저 정보 가져오기
  const { userData: user } = await getUserById(userId);

  expect(user.name).toBe('이진우');
});

it('유저의 ProfileFeed 조회 시, 해당 유저의 ProfileFeed를 반환한다.', async () => {
  const userId = 1;
  let page = 1;

  // ProfileFeed 가져오기
  const { profileFeedData: profileFeedData } = await getProfileFeedById(
    userId,
    page,
  );
  expect(profileFeedData.feeds[0].images.length).toBe(10);
});
