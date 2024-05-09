import { ICON_ACTIVE_COLOR } from '@/shared/consts';
import { Icon } from '@/shared/ui';

import { useLike } from '../api';

interface LikeButtonProps {
  feedId: number;
  isLiked: boolean;
}

export const LikeButton: React.FC<LikeButtonProps> = ({ feedId, isLiked }) => {
  const { handleLikeFeed, isPending } = useLike(feedId);

  return (
    <button
      className='icon icon-btn'
      onClick={() => handleLikeFeed()}
      disabled={isPending}
    >
      <Icon
        name='like'
        width='20'
        height='20'
        color={isLiked ? ICON_ACTIVE_COLOR : 'none'}
      />
    </button>
  );
};
