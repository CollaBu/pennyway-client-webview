import { SkeletonFeed } from './SkeletonFeed';
import './SkeletonFeedMainList.scss';

export const SkeletonFeedMainList = () => {
  return (
    <section className='skeleton-feed-section'>
      {new Array(10).fill(1).map((_, i) => (
        <SkeletonFeed key={i} />
      ))}
    </section>
  );
};
