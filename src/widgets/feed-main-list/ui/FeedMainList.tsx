import { NetworkError, Observer } from '@/shared/ui';

import { useInfinityFeeds } from '../api';

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
    return <SkeletonFeedMainList count={10} />;
  }

  if (isError && !feeds) {
    // 초기 로딩에서 에러가 발생할 경우
    return <NetworkError refetch={refetchFeeds} />;
  }

  return (
    <section className='feed-list-section'>
      <div className='feed-list'>
        {feeds?.pages.map((pageData) => {
          return pageData.data.feeds.map((feed) => (
            <Feed key={feed.id} feed={feed} />
          ));
        })}
        {!isFetching && (
          <Observer
            isReadyForNextPage={!isFetching && hasNextFeeds}
            fetch={fetchNextFeeds}
          />
        )}
        {hasNextFeeds && <SkeletonFeedMainList count={3} />}
      </div>
    </section>
  );
};
