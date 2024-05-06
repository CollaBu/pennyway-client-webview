import { User } from '@/shared/consts';

interface Users {
  [userId: number]: User;
}

export const users: Users = {
  1: {
    id: 1,
    profileImage: 'https://picsum.photos/200/200',
    name: '강병준',
    content: 'bangdori',
    feedCount: 100,
    followingCount: 347,
    followerCount: 25,
  },
  2: {
    id: 2,
    profileImage: 'https://picsum.photos/200/200',
    name: '이의찬',
    content: 'Legitgoons',
    feedCount: 124,
    followingCount: 2,
    followerCount: 5341,
  },
  3: {
    id: 3,
    profileImage: 'https://picsum.photos/200/200',
    name: '양재서',
    content: 'psychology50',
    feedCount: 6,
    followingCount: 35,
    followerCount: 423,
  },
  4: {
    id: 4,
    profileImage: 'https://picsum.photos/200/200',
    name: '이수민',
    content: 'SSXXMM22',
    feedCount: 24,
    followingCount: 42,
    followerCount: 53251,
  },
  5: {
    id: 5,
    profileImage: 'https://picsum.photos/200/200',
    name: '신얀',
    content: 'yanni13',
    feedCount: 51,
    followingCount: 7897,
    followerCount: 7890,
  },
  6: {
    id: 6,
    profileImage: 'https://picsum.photos/200/200',
    name: '이주원',
    content: '2weeksone',
    feedCount: 97,
    followingCount: 98,
    followerCount: 8975,
  },
  7: {
    id: 7,
    profileImage: 'https://picsum.photos/200/200',
    name: '안성윤',
    content: 'asn6878',
    feedCount: 87,
    followingCount: 67,
    followerCount: 4556,
  },
  8: {
    id: 8,
    profileImage: 'https://picsum.photos/200/200',
    name: '이진우',
    content: 'jinlee1703',
    feedCount: 32,
    followingCount: 24,
    followerCount: 543,
  },
  9: {
    id: 9,
    profileImage: 'https://picsum.photos/200/200',
    name: '최희진',
    content: 'heejinnn',
    feedCount: 66,
    followingCount: 1,
    followerCount: 1,
  },
};
