import axios from 'axios';
import { describe, expect, it } from 'vitest';

async function getUsersByName(userName: string) {
  const users = await axios.get(`/users?q=${userName}`);
  const searchedUsers = users.data.data.users;
  return { searchedUsers };
}

async function getLikeUsersByName(userName: string) {
  const likeusers = await axios.get(`/like?q=${userName}`);
  const searchedLikeUsers = likeusers.data.data.likeUsers;
  return { searchedLikeUsers };
}

describe('유저 검색 시, ', () => {
  it('이름이 일치하는 유저가 있다면 해당 사용자들을 반환한다.', async () => {
    const userName = '강병';

    // 검색
    await axios.get(`/users?q=${userName}`);

    // 검색 결과
    const { searchedUsers: searchedUsers } = await getUsersByName(userName);

    expect(searchedUsers).toHaveLength(1);
    expect(searchedUsers[0].name).toBe('강병준');
  });

  it('이름이 일치하는 유저가 없다면 빈 배열을 반환한다.', async () => {
    const userName = '김가상의유저이름';

    // 검색
    await axios.get(`/users?q=${userName}`);

    // 검색 결과
    const { searchedUsers: searchedUsers } = await getUsersByName(userName);

    expect(searchedUsers).toHaveLength(0);
  });
});

describe('좋아요 유저 검색 시, ', () => {
  it('이름이 일치하는 유저가 있다면 해당 사용자들을 반환한다.', async () => {
    const userName = '이';

    // 검색
    await axios.get(`/like?q=${userName}`);

    // 검색 결과
    const { searchedLikeUsers: searchedLikeUsers } =
      await getLikeUsersByName(userName);

    expect(searchedLikeUsers).toHaveLength(2);
    expect(searchedLikeUsers[1].name).toBe('이수민');
  });

  it('이름이 일치하는 유저가 없다면 빈 배열을 반환한다.', async () => {
    const userName = '김가상의유저이름';

    // 검색
    await axios.get(`/like?q=${userName}`);

    // 검색 결과
    const { searchedLikeUsers: searchedLikeUsers } =
      await getLikeUsersByName(userName);

    expect(searchedLikeUsers).toHaveLength(0);
  });
});
