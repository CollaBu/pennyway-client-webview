import InfiniteScroll from 'react-infinite-scroller';

import { NetworkError } from '@/shared/ui';

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

  if (isError) {
    return <NetworkError refetch={refetchFeeds} />;
  }

  return (
    <section className='feed-list-section'>
      <InfiniteScroll
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
      </InfiniteScroll>
    </section>
  );
};
