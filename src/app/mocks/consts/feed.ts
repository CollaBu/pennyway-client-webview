import { likes } from './like';

interface Feeds {
  [feedId: number]: Feed;
}

interface Feed {
  id: number;

  user: {
    id: number;
    profileImage: string;
    name: string;
  };

  title: string;
  content: string;
  images: Image[];

  likeCount: number;
  // commentCount: number;

  createdAt: string;
  updatedAt: string;
}

interface Image {
  id: number;
  imageUrl: string;
}

export const feeds: Feeds = {
  1: {
    id: 1,
    user: {
      id: 99991,
      profileImage: 'https://picsum.photos/200/200',
      name: '강병준',
    },
    title: 'Feed Title 1',
    content: 'Feed Content 1',
    images: [
      {
        id: 1,
        imageUrl: 'https://picsum.photos/200/200',
      },
    ],

    likeCount: likes[1].totalCount,

    createdAt: '2024-04-16 12:00:00',
    updatedAt: '2024-04-16 12:00:00',
  },
  2: {
    id: 2,
    user: {
      id: 99992,
      profileImage: 'https://picsum.photos/200/200',
      name: '이의찬',
    },
    title: 'Feed Title 2',
    content: 'Feed Content 2',
    images: [
      {
        id: 1,
        imageUrl: 'https://picsum.photos/200/200',
      },
      {
        id: 2,
        imageUrl: 'https://picsum.photos/200/200',
      },
      {
        id: 3,
        imageUrl: 'https://picsum.photos/200/200',
      },
    ],
    likeCount: likes[2].totalCount,

    createdAt: '2024-04-16 12:10:00',
    updatedAt: '2024-04-16 12:10:00',
  },
  3: {
    id: 3,
    user: {
      id: 99993,
      profileImage: 'https://picsum.photos/200/200',
      name: '양재서',
    },
    title: 'Feed Title 3',
    content: 'Feed Content 3',
    images: [
      {
        id: 1,
        imageUrl: 'https://picsum.photos/200/200',
      },
    ],
    likeCount: likes[3].totalCount,

    createdAt: '2024-04-16 12:20:00',
    updatedAt: '2024-04-16 12:20:00',
  },
  4: {
    id: 4,
    user: {
      id: 99994,
      profileImage: 'https://picsum.photos/200/200',
      name: '이수민',
    },
    title: 'Feed Title 4',
    content: 'Feed Content 4',
    images: [
      {
        id: 1,
        imageUrl: 'https://picsum.photos/200/200',
      },
      {
        id: 2,
        imageUrl: 'https://picsum.photos/200/200',
      },
    ],
    likeCount: likes[4].totalCount,

    createdAt: '2024-04-16 12:30:00',
    updatedAt: '2024-04-16 12:30:00',
  },
  5: {
    id: 5,
    user: {
      id: 99995,
      profileImage: 'https://picsum.photos/200/200',
      name: '신얀',
    },
    title: 'Feed Title 5',
    content: 'Feed Content 5',
    images: [
      {
        id: 1,
        imageUrl: 'https://picsum.photos/200/200',
      },
      {
        id: 2,
        imageUrl: 'https://picsum.photos/200/200',
      },
      {
        id: 3,
        imageUrl: 'https://picsum.photos/200/200',
      },
    ],
    likeCount: likes[5].totalCount,

    createdAt: '2024-04-16 12:40:00',
    updatedAt: '2024-04-16 12:40:00',
  },
  6: {
    id: 6,
    user: {
      id: 99995,
      profileImage: 'https://picsum.photos/200/200',
      name: '신얀',
    },
    title: 'Feed Title 5',
    content: 'Feed Content 5',
    images: [
      {
        id: 1,
        imageUrl: 'https://picsum.photos/200/200',
      },
      {
        id: 2,
        imageUrl: 'https://picsum.photos/200/200',
      },
      {
        id: 3,
        imageUrl: 'https://picsum.photos/200/200',
      },
    ],
    likeCount: likes[6].totalCount,

    createdAt: '2024-04-16 12:50:00',
    updatedAt: '2024-04-16 12:50:00',
  },
  7: {
    id: 7,
    user: {
      id: 99997,
      profileImage: 'https://picsum.photos/200/200',
      name: '안성윤',
    },
    title: 'Feed Title 7',
    content: 'Feed Content 7',
    images: [
      {
        id: 1,
        imageUrl: 'https://picsum.photos/200/200',
      },
      {
        id: 2,
        imageUrl: 'https://picsum.photos/200/200',
      },
    ],
    likeCount: likes[7].totalCount,

    createdAt: '2024-04-16 13:00:00',
    updatedAt: '2024-04-16 13:00:00',
  },
  8: {
    id: 8,
    user: {
      id: 99998,
      profileImage: 'https://picsum.photos/200/200',
      name: '이진우',
    },
    title: 'Feed Title 8',
    content: 'Feed Content 8',
    images: [
      {
        id: 1,
        imageUrl: 'https://picsum.photos/200/200',
      },
    ],
    likeCount: likes[8].totalCount,

    createdAt: '2024-04-16 13:10:00',
    updatedAt: '2024-04-16 13:10:00',
  },
  9: {
    id: 9,
    user: {
      id: 99999,
      profileImage: 'https://picsum.photos/200/200',
      name: '최희진',
    },
    title: 'Feed Title 9',
    content: 'Feed Content 9',
    images: [
      {
        id: 1,
        imageUrl: 'https://picsum.photos/200/200',
      },
      {
        id: 2,
        imageUrl: 'https://picsum.photos/200/200',
      },
    ],
    likeCount: likes[9].totalCount,

    createdAt: '2024-04-16 13:20:00',
    updatedAt: '2024-04-16 13:20:00',
  },
};
