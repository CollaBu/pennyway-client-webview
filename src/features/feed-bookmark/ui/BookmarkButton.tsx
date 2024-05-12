import { ICON_ACTIVE_COLOR } from '@/shared/consts';
import { Icon } from '@/shared/ui';

import { useBookmark } from '../api/useBookmark';

interface BookmarkButtonProps {
  feedId: number;
  isBookmarked: boolean;
}

export const BookmarkButton: React.FC<BookmarkButtonProps> = ({
  feedId,
  isBookmarked,
}) => {
  const { handleBookmarkFeed, isPending } = useBookmark(feedId);

  return (
    <button
      className='icon icon-btn'
      onClick={() => handleBookmarkFeed()}
      disabled={isPending}
    >
      <Icon
        name='bookmark'
        width='20'
        height='20'
        color={isBookmarked ? ICON_ACTIVE_COLOR : 'none'}
      />
    </button>
  );
};
