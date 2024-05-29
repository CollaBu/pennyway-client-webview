import { Feed as FeedProps } from '@/shared/consts';
import { Feed } from '@/widgets/feed-main-list';

import './ProfileFeedList.scss';

const dummyFeeds: FeedProps[] = [
  {
    id: 1,
    user: {
      id: 1,
      name: '김붕어빵',
      profileImage: '',
    },
    createdAt: '1분 전',
    updatedAt: '1분 전',
    content: 'ㅎㅇ',
    images: [],
    likeCount: 30,
    commentCount: 30,
    isLiked: true,
    isBookmarked: false,
  },
  {
    id: 2,
    user: {
      id: 1,
      name: '김붕어빵',
      profileImage: '',
    },
    createdAt: '1분 전',
    updatedAt: '1분 전',
    content: 'ㅎㅇ',
    images: [],
    likeCount: 300,
    commentCount: 340,
    isLiked: true,
    isBookmarked: false,
  },
  {
    id: 3,
    user: {
      id: 1,
      name: '김붕어빵',
      profileImage: '',
    },
    createdAt: '1분 전',
    updatedAt: '1분 전',
    content: 'ㅎㅇ',
    images: [],
    likeCount: 1,
    commentCount: 2,
    isLiked: false,
    isBookmarked: false,
  },
];

export const ProfileFeedList = () => {
  return (
    <section className='profile-feed-list-wrapper'>
      <h3 className='feed-list-title b1md'>내 게시글</h3>
      {dummyFeeds.map((dummyFeed) => (
        <div className='profile-feed' key={dummyFeed.id}>
          <Feed feed={dummyFeed} isLink={false} />
        </div>
      ))}
    </section>
  );
};
