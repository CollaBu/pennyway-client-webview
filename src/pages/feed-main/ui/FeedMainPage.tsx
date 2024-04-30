import { Feed } from '@/features/feed';
import { FeedMainHeader } from '@/features/feed-main-header';

import './FeedMainPage.scss';

const DUMMY_FEED = {
  id: 1,
  user: {
    id: 1,
    profileImage: 'https://picsum.photos/200/200',
    name: '인생은 한 방',
    content: 'bangdori',
  },
  title: 'Feed Title 1',
  content: '오늘은 쇼핑을 엄청나게 해서 거지가 됐습니다',
  images: [
    {
      id: 1,
      imageUrl: 'https://picsum.photos/200/200',
    },
  ],

  likeCount: 0,
  commentCount: 0,

  isLiked: false,
  isBookmark: false,

  createdAt: '2024-04-16 12:00:00',
  updatedAt: '2024-04-16 12:00:00',
};

export const FeedMainPage = () => {
  return (
    <section className='feed-main-section'>
      <FeedMainHeader />
      <div className='feed-list'>
        <Feed feed={DUMMY_FEED} />
        <Feed feed={DUMMY_FEED} />
        <Feed feed={DUMMY_FEED} />
        <Feed feed={DUMMY_FEED} />
        <Feed feed={DUMMY_FEED} />
      </div>
    </section>
  );
};
