import { ICON_ACTIVE_COLOR } from '@/shared/consts';
import { Icon } from '@/shared/ui';

import { useLike } from '../api/useLike';

interface LikeButtonProps {
  feedId: number;
  isLiked: boolean;
}

export const LikeButton: React.FC<LikeButtonProps> = ({ feedId, isLiked }) => {
  const { handleFeedLike, isPending } = useLike();

  return (
    <button
      className='icon icon-btn'
      onClick={() => handleFeedLike(feedId)}
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
