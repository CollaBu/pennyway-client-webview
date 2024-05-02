import { SkeletonFeed } from './SkeletonFeed';

export const SkeletonFeedMainList = () => {
  return (
    <section className='feed-list-section'>
      {new Array(5).fill(1).map((_, i) => (
        <SkeletonFeed key={i} />
      ))}
    </section>
  );
};
