import { User } from '@/shared/consts';

interface Users {
  [userId: number]: User;
}

export const likeUsers: Users = {
  1: {
    id: 2,
    profileImage: 'https://picsum.photos/200/200',
    name: '이의찬',
    content: 'Legitgoons',
    locked: false,
    feedCount: 124,
    followingCount: 2,
    followerCount: 5341,
  },
  2: {
    id: 3,
    profileImage: 'https://picsum.photos/200/200',
    name: '양재서',
    content: 'psychology50',
    locked: true,
    feedCount: 6,
    followingCount: 35,
    followerCount: 423,
  },
  3: {
    id: 5,
    profileImage: 'https://picsum.photos/200/200',
    name: '신얀',
    content: 'yanni13',
    locked: true,
    feedCount: 51,
    followingCount: 7897,
    followerCount: 7890,
  },
  4: {
    id: 4,
    profileImage: 'https://picsum.photos/200/200',
    name: '이수민',
    content: 'SSXXMM22',
    locked: true,
    feedCount: 24,
    followingCount: 42,
    followerCount: 53251,
  },
  5: {
    id: 7,
    profileImage: 'https://picsum.photos/200/200',
    name: '안성윤',
    content: 'asn6878',
    locked: true,
    feedCount: 87,
    followingCount: 67,
    followerCount: 4556,
  },
};
