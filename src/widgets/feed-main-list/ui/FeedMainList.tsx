import InfiniteScroll from 'react-infinite-scroller';
import { toast } from 'react-toastify';

import { NetworkError, NetworkToastError } from '@/shared/ui';

import { useInfinityFeeds } from '../api/useInfinityFeeds';

import { Feed } from './Feed';
import { SkeletonFeedMainList } from './SkeletonFeedMainList';
import './FeedMainList.scss';

export const FeedMainList = () => {
  const {
    feeds,
    fetchNextFeeds,
    isFetching,
    hasNextFeeds,
    isLoading,
    isError,
    refetchFeeds,
  } = useInfinityFeeds();

  if (isLoading) {
    return <SkeletonFeedMainList />;
  }

  if (isError && !feeds) {
    // 초기 로딩에서 에러가 발생할 경우
    return <NetworkError refetch={refetchFeeds} />;
  }

  if (isError && feeds) {
    // 무한 스크롤 도중 에러가 발생할 경우
    toast('인터넷 연결이 불안정해요');
  }

  return (
    <section className='feed-list-section'>
      <InfiniteScroll
        className='feed-list'
        loadMore={() => {
          if (!isFetching) fetchNextFeeds();
        }}
        hasMore={hasNextFeeds}
      >
        {feeds?.pages.map((pageData) => {
          return pageData.data.feeds.map((feed) => (
            <Feed key={feed.id} feed={feed} />
          ));
        })}
        <NetworkToastError />
      </InfiniteScroll>
    </section>
  );
};
