import { ICON_ACTIVE_COLOR } from '@/shared/consts';
import { Icon } from '@/shared/ui';

interface BookmarkButtonProps {
  feedId: number;
  isBookmarked: boolean;
}

export const BookmarkButton: React.FC<BookmarkButtonProps> = ({
  isBookmarked,
}) => {
  return (
    <button className='icon icon-btn'>
      <Icon
        name='bookmark'
        width='20'
        height='20'
        color={isBookmarked ? ICON_ACTIVE_COLOR : 'none'}
      />
    </button>
  );
};
