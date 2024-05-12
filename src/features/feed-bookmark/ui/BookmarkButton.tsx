import { ICON_ACTIVE_COLOR } from '@/shared/consts';
import { Icon } from '@/shared/ui';

interface BookmarkButtonProps {
  feedId: number;
  isBookmark: boolean;
}

export const BookmarkButton: React.FC<BookmarkButtonProps> = ({
  isBookmark,
}) => {
  return (
    <button className='icon icon-btn'>
      <Icon
        name='bookmark'
        width='20'
        height='20'
        color={isBookmark ? ICON_ACTIVE_COLOR : 'none'}
      />
    </button>
  );
};
