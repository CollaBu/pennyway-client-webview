import { SkeletonFeed } from './SkeletonFeed';
import './SkeletonFeedMainList.scss';

export const SkeletonFeedMainList: React.FC<{ count: number }> = ({
  count,
}) => {
  return (
    <section className='skeleton-feed-section'>
      {new Array(count).fill(1).map((_, i) => (
        <SkeletonFeed key={i} />
      ))}
    </section>
  );
};
