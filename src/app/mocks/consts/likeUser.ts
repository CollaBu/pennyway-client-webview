import { User } from '@/shared/consts';

interface Users {
  [userId: number]: User;
}

export const likeUsers: Users = {
  1: {
    id: 2,
    profileImage: '',
    name: '이의찬',
    username: 'Legitgoons',
    content: '취업하고싶당',
    locked: false,
    feedCount: 124,
    followingCount: 2,
    followerCount: 5341,
  },
  2: {
    id: 3,
    profileImage: '',
    name: '양재서',
    username: 'psychology50',
    content: 'IMPM',
    locked: true,
    feedCount: 6,
    followingCount: 35,
    followerCount: 423,
  },
  3: {
    id: 5,
    profileImage: 'https://picsum.photos/32/32',
    name: '신얀',
    username: 'yanni13',
    content: 'imiOSDev',
    locked: true,
    feedCount: 51,
    followingCount: 7897,
    followerCount: 7890,
  },
  4: {
    id: 4,
    profileImage: 'https://picsum.photos/32/32',
    name: '이수민',
    username: 'SSXXMM22',
    content: 'imdesigner',
    locked: true,
    feedCount: 24,
    followingCount: 42,
    followerCount: 53251,
  },
  5: {
    id: 7,
    profileImage: 'https://picsum.photos/32/32',
    name: '안성윤',
    username: 'asn6878',
    content: 'imbackend',
    locked: true,
    feedCount: 87,
    followingCount: 67,
    followerCount: 4556,
  },
};
