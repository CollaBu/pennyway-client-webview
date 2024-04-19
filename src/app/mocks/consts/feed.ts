import { comments } from './comment';
import { likes } from './like';
import { User, users } from './user';

interface Feeds {
  [feedId: number]: Feed;
}

interface Feed {
  id: number;

  user: User;

  title: string;
  content: string;
  images: Image[];

  likeCount: number;
  commentCount: number;

  isLike: boolean;
  isBookmark: boolean;

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
    user: users[1],
    title: 'Feed Title 1',
    content: 'Feed Content 1',
    images: [
      {
        id: 1,
        imageUrl: 'https://picsum.photos/200/200',
      },
    ],

    likeCount: likes[1].totalCount,
    commentCount: comments[1].length,

    isLike: likes[1].isLike,
    isBookmark: false,

    createdAt: '2024-04-16 12:00:00',
    updatedAt: '2024-04-16 12:00:00',
  },
  2: {
    id: 2,
    user: users[2],
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
    commentCount: comments[2].length,

    isLike: likes[2].isLike,
    isBookmark: false,

    createdAt: '2024-04-16 12:10:00',
    updatedAt: '2024-04-16 12:10:00',
  },
  3: {
    id: 3,
    user: users[3],
    title: 'Feed Title 3',
    content: 'Feed Content 3',
    images: [
      {
        id: 1,
        imageUrl: 'https://picsum.photos/200/200',
      },
    ],

    likeCount: likes[3].totalCount,
    commentCount: comments[3].length,

    isLike: likes[3].isLike,
    isBookmark: false,

    createdAt: '2024-04-16 12:20:00',
    updatedAt: '2024-04-16 12:20:00',
  },
  4: {
    id: 4,
    user: users[4],
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
    commentCount: comments[4].length,

    isLike: likes[4].isLike,
    isBookmark: false,

    createdAt: '2024-04-16 12:30:00',
    updatedAt: '2024-04-16 12:30:00',
  },
  5: {
    id: 5,
    user: users[5],
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
    commentCount: comments[5].length,

    isLike: likes[5].isLike,
    isBookmark: false,

    createdAt: '2024-04-16 12:40:00',
    updatedAt: '2024-04-16 12:40:00',
  },
  6: {
    id: 6,
    user: users[6],
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
    commentCount: comments[6].length,

    isLike: likes[6].isLike,
    isBookmark: false,

    createdAt: '2024-04-16 12:50:00',
    updatedAt: '2024-04-16 12:50:00',
  },
  7: {
    id: 7,
    user: users[7],
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
    commentCount: comments[7].length,

    isLike: likes[7].isLike,
    isBookmark: false,

    createdAt: '2024-04-16 13:00:00',
    updatedAt: '2024-04-16 13:00:00',
  },
  8: {
    id: 8,
    user: users[8],
    title: 'Feed Title 8',
    content: 'Feed Content 8',
    images: [
      {
        id: 1,
        imageUrl: 'https://picsum.photos/200/200',
      },
    ],

    likeCount: likes[8].totalCount,
    commentCount: comments[8].length,

    isLike: likes[8].isLike,
    isBookmark: false,

    createdAt: '2024-04-16 13:10:00',
    updatedAt: '2024-04-16 13:10:00',
  },
  9: {
    id: 9,
    user: users[9],
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
    commentCount: comments[9].length,

    isLike: likes[9].isLike,
    isBookmark: false,

    createdAt: '2024-04-16 13:20:00',
    updatedAt: '2024-04-16 13:20:00',
  },
};
