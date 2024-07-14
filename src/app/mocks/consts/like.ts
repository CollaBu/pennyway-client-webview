import { Like } from '@/shared/consts';

import { feeds } from './feed';

interface Likes {
  [feedId: keyof typeof feeds]: Like;
}

export const likes: Likes = {
  1: { totalCount: 92345, isLiked: false },
  2: { totalCount: 20, isLiked: true },
  3: { totalCount: 4, isLiked: false },
  4: { totalCount: 1, isLiked: true },
  5: { totalCount: 7, isLiked: true },
  6: { totalCount: 0, isLiked: false },
  7: { totalCount: 3, isLiked: false },
  8: { totalCount: 924, isLiked: false },
  9: { totalCount: 11, isLiked: true },
};
