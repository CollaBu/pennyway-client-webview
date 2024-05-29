import { BookmarkButton } from '@/features/feed-bookmark';
import { LikeButton } from '@/features/feed-main-like';
import { Feed as FeedProps } from '@/shared/consts';
import { Icon, Profile } from '@/shared/ui';
import { calculateElapsedTime } from '@/shared/utils';
import { Carousel } from '@/widgets/feed-carousel';
import { FeedKebabButton } from '@/widgets/feed-kebab';

import './Feed.scss';

export const Feed: React.FC<{ isLink: boolean; feed: FeedProps }> = ({
  feed,
  isLink,
}) => {
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
            userId={user.id}
            isLink={isLink}
          />

          <FeedKebabButton feedId={id} />
        </header>
        <div className='feed-content'>
          <p className='feed-text b1reg'>{content}</p>
          <Carousel images={images} />
        </div>
        <footer className='feed-footer'>
          <div className='footer-left'>
            <span className='footer-count'>
              <LikeButton feedId={id} isLiked={isLiked} />
              <p className='count-text b2md'>{likeCount}</p>
            </span>
            <span className='footer-count'>
              <button className='icon icon-btn'>
                <Icon name='chat' width='20' height='20' />
              </button>
              <p className='count-text b2md'>{commentCount}</p>
            </span>
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
