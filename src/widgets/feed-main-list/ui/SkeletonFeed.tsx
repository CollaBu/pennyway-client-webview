import { SkeletonProfile } from '@/shared/ui';
import './SkeletonFeed.scss';

export const SkeletonFeed = () => {
  return (
    <div className='skeleton-feed-wrapper'>
      <article className='skeleton-feed-article'>
        <header className='skeleton-feed-header'>
          <SkeletonProfile />
          <div className='skeleton-kebab-icon' />
        </header>
        <div className='feed-content'>
          <p className='feed-content-1' />
          <p className='feed-content-2' />
        </div>
        <footer className='feed-footer'>
          <div className='footer-left'>
            <div className='skeleton-footer-icon' />
            <div className='skeleton-footer-icon' />
            <div className='skeleton-footer-icon' />
          </div>
          <div className='footer-right'>
            <div className='skeleton-footer-icon' />
          </div>
        </footer>
      </article>
    </div>
  );
};
