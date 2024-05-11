import axios from 'axios';
import { describe, expect, it } from 'vitest';
import { RelationshipStatus } from '@/shared/consts';

async function getUserById(userId: number) {
  const followInfo = await axios.get(`/users/${userId}/follow`);
  const relationshipStatus: RelationshipStatus =
    followInfo.data.data.relationshipStatus;
  return { relationshipStatus };
}

describe('팔로우가 되어있지 않은 상태에서', () => {
  it('공개 계정에 팔로우 신청을 클릭하면, 팔로잉으로 상태가 변경된다.', async () => {
    const userId = 8;

    // 팔로우 신청
    await axios.post(`/users/${userId}/follow`);

    // 업데이트 된 팔로우 상태
    const { relationshipStatus: relationshipStatus } =
      await getUserById(userId);

    expect(relationshipStatus).toBe('following');
  });

  it('비공개 계정에 팔로우 신청을 클릭하면, 요청됨으로 상태가 변경된다.', async () => {
    const userId = 4;

    // 팔로우 신청
    await axios.post(`/users/${userId}/follow`);

    // 업데이트 된 팔로우 상태
    const { relationshipStatus: relationshipStatus } =
      await getUserById(userId);

    expect(relationshipStatus).toBe('pending');
  });

  it('언팔로우를 클릭하면, 팔로우 상태가 변경되지 않는다.', async () => {
    const userId = 9;
    const { relationshipStatus: prevStatus } = await getUserById(userId);

    // 팔로우 취소 클릭
    await axios.delete(`/users/${userId}/follow`);

    // 업데이트 된 팔로우 상태
    const { relationshipStatus: newStatus } = await getUserById(userId);

    expect(newStatus).toBe(prevStatus);
  });
});

describe('팔로우 된 상태에서', () => {
  it('팔로우 신청을 클릭하면, 팔로우 상태가 변동되지 않는다.', async () => {
    const userId = 2;
    const { relationshipStatus: prevStatus } = await getUserById(userId);

    // 팔로우 신청
    await axios.post(`/users/${userId}/follow`);

    // 업데이트 된 팔로우 상태
    const { relationshipStatus: newStatus } = await getUserById(userId);

    expect(newStatus).toBe(prevStatus);
  });

  it('언팔로우를 클릭하면, 상태가 none으로 변경된다.', async () => {
    const userId = 2;

    // 팔로우 취소 클릭
    await axios.delete(`/users/${userId}/follow`);

    // 업데이트 된 팔로우 상태
    const { relationshipStatus: relationshipStatus } =
      await getUserById(userId);

    expect(relationshipStatus).toBe('none');
  });
});

describe('팔로우 요청 중 상태에서', () => {
  it('팔로우 신청을 클릭하면, 팔로우 상태가 변동되지 않는다.', async () => {
    const userId = 3;
    const { relationshipStatus: prevStatus } = await getUserById(userId);

    // 팔로우 신청
    await axios.post(`/users/${userId}/follow`);

    // 업데이트 된 팔로우 상태
    const { relationshipStatus: newStatus } = await getUserById(userId);

    expect(newStatus).toBe(prevStatus);
  });

  it('팔로우 요청 취소를 클릭하면, 상태가 none으로 변경된다.', async () => {
    const userId = 3;

    // 팔로우 취소
    await axios.delete(`/users/${userId}/follow`);

    // 업데이트 된 팔로우 상태
    const { relationshipStatus: relationshipStatus } =
      await getUserById(userId);

    expect(relationshipStatus).toBe('none');
  });
});

describe('목표 유저가 본인이라면', () => {
  it('팔로우 신청을 클릭하면, 상태가 변동되지 않는다.', async () => {
    const userId = 1;
    const { relationshipStatus: prevStatus } = await getUserById(userId);

    // 팔로우 신청
    await axios.post(`/users/${userId}/follow`);

    // 업데이트 된 팔로우 상태
    const { relationshipStatus: newStatus } = await getUserById(userId);

    expect(newStatus).toBe(prevStatus);
  });

  it('언팔로우를 클릭하면, 상태가 변동되지 않는다.', async () => {
    const userId = 1;
    const { relationshipStatus: prevStatus } = await getUserById(userId);

    // 팔로우 취소
    await axios.delete(`/users/${userId}/follow`);

    // 업데이트 된 팔로우 상태
    const { relationshipStatus: newStatus } = await getUserById(userId);

    expect(newStatus).toBe(prevStatus);
  });
});
