import { comments } from './comment';
import { likes } from './like';
import { ProfileFeed } from '@/shared/consts';

interface ProfileFeeds {
  [feedId: number]: ProfileFeed;
}

export const profileFeeds: ProfileFeeds = {
  1: {
    id: 1,
    title: 'Feed Title 1',
    content: 'Feed Content 1',
    thubnailImage: 'https://picsum.photos/200/200',

    likeCount: likes[1].totalCount,
    commentCount: comments[1].length,
  },
  2: {
    id: 2,
    title: 'Feed Title 2',
    content: 'Feed Content 2',
    thubnailImage: 'https://picsum.photos/200/200',

    likeCount: likes[2].totalCount,
    commentCount: comments[2].length,
  },
  3: {
    id: 3,
    title: 'Feed Title 3',
    content: 'Feed Content 3',
    thubnailImage: 'https://picsum.photos/200/200',

    likeCount: likes[3].totalCount,
    commentCount: comments[3].length,
  },
  4: {
    id: 4,
    title: 'Feed Title 4',
    content: 'Feed Content 4',
    thubnailImage: 'https://picsum.photos/200/200',

    likeCount: likes[4].totalCount,
    commentCount: comments[4].length,
  },
  5: {
    id: 5,
    title: 'Feed Title 5',
    content: 'Feed Content 5',
    thubnailImage: 'https://picsum.photos/200/200',

    likeCount: likes[5].totalCount,
    commentCount: comments[5].length,
  },
  6: {
    id: 6,
    title: 'Feed Title 5',
    content: 'Feed Content 5',
    thubnailImage: 'https://picsum.photos/200/200',

    likeCount: likes[6].totalCount,
    commentCount: comments[6].length,
  },
  7: {
    id: 7,
    title: 'Feed Title 7',
    content: 'Feed Content 7',
    thubnailImage: 'https://picsum.photos/200/200',

    likeCount: likes[7].totalCount,
    commentCount: comments[7].length,
  },
  8: {
    id: 8,
    title: 'Feed Title 8',
    content: 'Feed Content 8',
    thubnailImage: 'https://picsum.photos/200/200',

    likeCount: likes[8].totalCount,
    commentCount: comments[8].length,
  },
  9: {
    id: 9,
    title: 'Feed Title 9',
    content: 'Feed Content 9',
    thubnailImage: '',

    likeCount: likes[9].totalCount,
    commentCount: comments[9].length,
  },
};
