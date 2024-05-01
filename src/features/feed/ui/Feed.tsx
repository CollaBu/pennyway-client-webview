import { Profile } from '@/shared/ui';
import BookmarkIcon from '@/shared/ui/icon/assets/bookmark_icon.svg?react';
import ChatIcon from '@/shared/ui/icon/assets/chat_icon.svg?react';
import KebabMenuIcon from '@/shared/ui/icon/assets/kebab_menu_icon.svg?react';
import LikeIcon from '@/shared/ui/icon/assets/like_icon.svg?react';
import SharedIcon from '@/shared/ui/icon/assets/share_icon.svg?react';
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
            <KebabMenuIcon />
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
              <LikeIcon />
            </button>
            <button className='icon-btn'>
              <ChatIcon />
            </button>
            <button className='icon-btn'>
              <SharedIcon />
            </button>
          </div>
          <div className='footer-right'>
            <button className='icon-btn'>
              <BookmarkIcon />
            </button>
          </div>
        </footer>
      </article>
    </div>
  );
};
