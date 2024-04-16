import { feeds } from './feed';

interface Likes {
  [feedId: keyof typeof feeds]: Like;
}

interface Like {
  totalCount: number;
  isLike: boolean;
}

export const likes: Likes = {
  1: { totalCount: 10, isLike: false },
  2: { totalCount: 2, isLike: true },
  3: { totalCount: 4, isLike: false },
  4: { totalCount: 1, isLike: true },
  5: { totalCount: 7, isLike: true },
  6: { totalCount: 0, isLike: false },
  7: { totalCount: 3, isLike: false },
  8: { totalCount: 924, isLike: false },
  9: { totalCount: 11, isLike: true },
};
