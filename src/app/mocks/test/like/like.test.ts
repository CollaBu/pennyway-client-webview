import axios from 'axios';
import { describe, expect, it } from 'vitest';

async function getFeedById(feedId: number) {
  const likes = await axios.get(`/feeds/${feedId}/likes`);
  const { totalCount, isLiked } = likes.data.data.like;

  return { totalCount, isLiked };
}

describe('좋아요가 되어있지 않은 상태에서', () => {
  it('좋아요를 클릭하면, 좋아요의 수가 1 증가한다.', async () => {
    // 현재 좋아요의 상태
    const feedId = 1;
    const { totalCount: prevTotalCount } = await getFeedById(feedId);

    // 좋아요 클릭
    await axios.put(`/feeds/${feedId}/likes`);

    // 업데이트 된 좋아요의 상태
    const { totalCount, isLiked } = await getFeedById(feedId);

    expect(totalCount).toBe(prevTotalCount + 1);
    expect(isLiked).toBeTruthy();
  });

  it('좋아요 취소를 클릭하면, 좋아요의 수가 변경되지 않는다.', async () => {
    const feedId = 3;
    const { totalCount: prevTotalCount, isLiked: prevIsLiked } =
      await getFeedById(feedId);

    await axios.delete(`/feeds/${feedId}/likes`);

    const { totalCount, isLiked } = await getFeedById(feedId);

    expect(totalCount).toBe(prevTotalCount);
    expect(isLiked).toBe(prevIsLiked);
  });
});

describe('좋아요가 되어있는 상태에서', () => {
  it('좋아요를 클릭하면, 좋아요의 수가 변동되지 않는다.', async () => {
    const feedId = 2;
    const { totalCount: prevTotalCount, isLiked: prevIsLiked } =
      await getFeedById(feedId);

    await axios.put(`/feeds/${feedId}/likes`);

    const { totalCount, isLiked } = await getFeedById(feedId);

    expect(totalCount).toBe(prevTotalCount);
    expect(isLiked).toBe(prevIsLiked);
  });

  it('좋아요 취소를 클릭하면, 좋아요의 수가 1 감소한다.', async () => {
    const feedId = 4;
    const { totalCount: prevTotalCount } = await getFeedById(feedId);

    await axios.delete(`/feeds/${feedId}/likes`);

    const { totalCount, isLiked } = await getFeedById(feedId);

    expect(totalCount).toBe(prevTotalCount - 1);
    expect(isLiked).toBeFalsy();
  });
});
