import InfiniteScroll from 'react-infinite-scroller';

import { Feed } from '@/widgets/feed';

import { useInfinityFeeds } from '../api/useInfinityFeeds';
import './FeedMainList.scss';

export const FeedMainList = () => {
  const {
    feeds,
    fetchNextFeeds,
    isFetching,
    hasNextFeeds,
    isLoading,
    isError,
  } = useInfinityFeeds();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error</p>;
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
