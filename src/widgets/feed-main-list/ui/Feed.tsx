import { BookmarkButton } from '@/features/feed-bookmark';
import { LikeButton } from '@/features/feed-main-like';
import { Feed as FeedProps } from '@/shared/consts';
import { Carousel, Icon, Profile } from '@/shared/ui';
import { calculateElapsedTime } from '@/shared/utils';
import { FeedKebabButton } from '@/widgets/feed-kebab';

import './Feed.scss';

export const Feed: React.FC<{ feed: FeedProps }> = ({ feed }) => {
  const {
    id,
    user,
    updatedAt,
    content,
    images,
    likeCount,
    commentCount,
    isLiked,
    isBookmarked,
  } = feed;

  return (
    <div className='feed-wrapper'>
      <article className='feed-article'>
        <header className='feed-header'>
          <Profile
            profileImage={user.profileImage}
            name={user.name}
            content={calculateElapsedTime(updatedAt)}
          />

          <FeedKebabButton />
        </header>
        <div className='feed-content'>
          <p className='feed-text b1reg'>{content}</p>
          <Carousel images={images} />
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
            <BookmarkButton feedId={id} isBookmarked={isBookmarked} />
          </div>
        </footer>
      </article>
    </div>
  );
};
