import { Feed } from '@/shared/consts';

import { comments } from './comment';
import { likes } from './like';
import { users } from './user';
import { reports } from './report';

interface Feeds {
  [feedId: number]: Feed;
}

export const feeds: Feeds = {
  1: {
    id: 1,
    user: users[1],
    content: 'Feed Content 1',
    images: [
      {
        id: 1,
        imageUrl: 'https://picsum.photos/320/400',
      },
    ],

    likeCount: likes[1].totalCount,
    commentCount: comments[1].length,

    isLiked: likes[1].isLiked,
    isBookmark: false,

    createdAt: '2024-04-16 12:00:00',
    updatedAt: '2024-04-16 12:00:00',
  },
  2: {
    id: 2,
    user: users[2],
    content: 'Feed Content 2',
    images: [
      {
        id: 1,
        imageUrl: 'https://picsum.photos/320/400',
      },
      {
        id: 2,
        imageUrl: 'https://picsum.photos/320/400',
      },
      {
        id: 3,
        imageUrl: 'https://picsum.photos/320/400',
      },
    ],

    likeCount: likes[2].totalCount,
    commentCount: comments[2].length,

    isLiked: likes[2].isLiked,
    isBookmark: false,

    createdAt: '2024-04-16 12:10:00',
    updatedAt: '2024-04-16 12:10:00',
  },
  3: {
    id: 3,
    user: users[3],
    content: 'Feed Content 3',
    images: [
      {
        id: 1,
        imageUrl: 'https://picsum.photos/320/400',
      },
    ],

    likeCount: likes[3].totalCount,
    commentCount: comments[3].length,

    isLiked: likes[3].isLiked,
    isBookmark: false,

    createdAt: '2024-04-16 12:20:00',
    updatedAt: '2024-04-16 12:20:00',
  },
  4: {
    id: 4,
    user: users[4],
    content: 'Feed Content 4',
    images: [
      {
        id: 1,
        imageUrl: 'https://picsum.photos/320/400',
      },
      {
        id: 2,
        imageUrl: 'https://picsum.photos/320/400',
      },
    ],

    likeCount: likes[4].totalCount,
    commentCount: comments[4].length,

    isLiked: likes[4].isLiked,
    isBookmark: false,

    createdAt: '2024-04-16 12:30:00',
    updatedAt: '2024-04-16 12:30:00',
  },
  5: {
    id: 5,
    user: users[5],
    content: 'Feed Content 5',
    images: [
      {
        id: 1,
        imageUrl: 'https://picsum.photos/320/400',
      },
      {
        id: 2,
        imageUrl: 'https://picsum.photos/320/400',
      },
      {
        id: 3,
        imageUrl: 'https://picsum.photos/320/400',
      },
    ],

    likeCount: likes[5].totalCount,
    commentCount: comments[5].length,

    isLiked: likes[5].isLiked,
    isBookmark: false,

    createdAt: '2024-04-16 12:40:00',
    updatedAt: '2024-04-16 12:40:00',
  },
  6: {
    id: 6,
    user: users[6],
    content: 'Feed Content 5',
    images: [
      {
        id: 1,
        imageUrl: 'https://picsum.photos/320/400',
      },
      {
        id: 2,
        imageUrl: 'https://picsum.photos/320/400',
      },
      {
        id: 3,
        imageUrl: 'https://picsum.photos/320/400',
      },
    ],

    likeCount: likes[6].totalCount,
    commentCount: comments[6].length,

    isLiked: likes[6].isLiked,
    isBookmark: false,

    createdAt: '2024-04-16 12:50:00',
    updatedAt: '2024-04-16 12:50:00',
  },
  7: {
    id: 7,
    user: users[7],
    content: 'Feed Content 7',
    images: [
      {
        id: 1,
        imageUrl: 'https://picsum.photos/320/400',
      },
      {
        id: 2,
        imageUrl: 'https://picsum.photos/320/400',
      },
    ],

    likeCount: likes[7].totalCount,
    commentCount: comments[7].length,

    isLiked: likes[7].isLiked,
    isBookmark: false,

    createdAt: '2024-04-16 13:00:00',
    updatedAt: '2024-04-16 13:00:00',
  },
  8: {
    id: 8,
    user: users[8],
    content: 'Feed Content 8',
    images: [
      {
        id: 1,
        imageUrl: 'https://picsum.photos/320/400',
      },
    ],

    likeCount: likes[8].totalCount,
    commentCount: comments[8].length,

    isLiked: likes[8].isLiked,
    isBookmark: false,

    createdAt: '2024-04-16 13:10:00',
    updatedAt: '2024-04-16 13:10:00',
  },
  9: {
    id: 9,
    user: users[9],
    content: 'Feed Content 9',
    images: [
      {
        id: 1,
        imageUrl: 'https://picsum.photos/320/400',
      },
      {
        id: 2,
        imageUrl: 'https://picsum.photos/320/400',
      },
    ],

    likeCount: likes[9].totalCount,
    commentCount: comments[9].length,

    isLiked: likes[9].isLiked,
    isBookmark: false,

    createdAt: '2024-04-16 13:20:00',
    updatedAt: '2024-04-16 13:20:00',
  },
};

for (let i = 10; i < 100; i++) {
  reports[i] = false;
  comments[i] = [];
  likes[i] = { totalCount: i, isLiked: false };
  feeds[i] = {
    id: i,
    user: users[1],
    content: `Feed Content ${i}`,
    images: [],

    likeCount: likes[i].totalCount,
    commentCount: comments[i].length,

    isLiked: likes[i].isLiked,
    isBookmark: false,

    createdAt: '2024-05-03 12:00:00',
    updatedAt: '2024-05-03 12:00:00',
  };
}
