import { LikeButton } from '@/features';
import { Feed as FeedProps } from '@/shared/consts';
import { Icon, Profile } from '@/shared/ui';
import { calculateElapsedTime } from '@/shared/utils';

import './Feed.scss';

export const Feed: React.FC<{ feed: FeedProps }> = ({ feed }) => {
  const { id, user, content, likeCount, commentCount, updatedAt, isLiked } =
    feed;

  return (
    <div className='feed-wrapper'>
      <article className='feed-article'>
        <header className='feed-header'>
          <Profile
            profileImage={user.profileImage}
            name={user.name}
            content={calculateElapsedTime(updatedAt)}
          />

          <button className='icon kebab-icon-btn'>
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
            <LikeButton feedId={id} isLiked={isLiked} />
            <button className='icon icon-btn'>
              <Icon name='chat' width='20' height='20' />
            </button>
            <button className='icon icon-btn'>
              <Icon name='share' width='20' height='20' />
            </button>
          </div>
          <div className='footer-right'>
            <button className='icon icon-btn'>
              <Icon name='bookmark' width='20' height='20' />
            </button>
          </div>
        </footer>
      </article>
    </div>
  );
};
