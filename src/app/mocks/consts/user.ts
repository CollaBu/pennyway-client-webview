interface Users {
  [userId: number]: User;
}

export interface User {
  id: number;
  profileImage: string;
  name: string;
  content: string;
}

export const users: Users = {
  1: {
    id: 1,
    profileImage: 'https://picsum.photos/200/200',
    name: '강병준',
    content: 'bangdori',
  },
  2: {
    id: 2,
    profileImage: 'https://picsum.photos/200/200',
    name: '이의찬',
    content: 'Legitgoons',
  },
  3: {
    id: 3,
    profileImage: 'https://picsum.photos/200/200',
    name: '양재서',
    content: 'psychology50',
  },
  4: {
    id: 4,
    profileImage: 'https://picsum.photos/200/200',
    name: '이수민',
    content: 'SSXXMM22',
  },
  5: {
    id: 5,
    profileImage: 'https://picsum.photos/200/200',
    name: '신얀',
    content: 'yanni13',
  },
  6: {
    id: 6,
    profileImage: 'https://picsum.photos/200/200',
    name: '이주원',
    content: '2weeksone',
  },
  7: {
    id: 7,
    profileImage: 'https://picsum.photos/200/200',
    name: '안성윤',
    content: 'asn6878',
  },
  8: {
    id: 8,
    profileImage: 'https://picsum.photos/200/200',
    name: '이진우',
    content: 'jinlee1703',
  },
  9: {
    id: 9,
    profileImage: 'https://picsum.photos/200/200',
    name: '최희진',
    content: 'heejinnn',
  },
};
