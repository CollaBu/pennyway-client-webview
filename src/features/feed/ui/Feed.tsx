import { Icon, Profile } from '@/shared/ui';
import { calculateElapsedTime } from '@/shared/utils';

import './Feed.scss';
import { FeedProps } from '../consts/type';

export const Feed: React.FC<FeedProps> = ({ feed }) => {
  const { user, content, likeCount, commentCount, updatedAt } = feed;

  return (
    <div className='feed-wrapper'>
      <article className='feed-article'>
        <header className='feed-header'>
          <Profile
            profileImage={user.profileImage}
            name={user.name}
            content={calculateElapsedTime(updatedAt)}
          />

          <button className='kebab-icon-btn'>
            <Icon name='kebab-menu' width='20' height='20' color='red' />
          </button>
        </header>
        <div className='feed-content'>
          <p className='feed-text b1reg'>{content}</p>
        </div>
        <div className='feed-count-container'>
          <p className='count-text b3md'>좋아요 {likeCount}</p>
          <span className='count-divider' />
          <p className='count-text b3md'>댓글 {commentCount}</p>
        </div>
        <footer className='feed-footer'>
          <div className='footer-left'>
            <button className='icon-btn'>
              <Icon name='like' width='20' height='20' />
            </button>
            <button className='icon-btn'>
              <Icon name='chat' width='20' height='20' />
            </button>
            <button className='icon-btn'>
              <Icon name='share' width='20' height='20' />
            </button>
          </div>
          <div className='footer-right'>
            <button className='icon-btn'>
              <Icon name='bookmark' width='20' height='20' />
            </button>
          </div>
        </footer>
      </article>
    </div>
  );
};
