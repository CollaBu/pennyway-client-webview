import { ICON_ACTIVE_COLOR } from '@/shared/consts';
import { Icon } from '@/shared/ui';

interface LikeButtonProps {
  isLiked: boolean;
}

export const LikeButton: React.FC<LikeButtonProps> = ({ isLiked }) => {
  return (
    <button className='icon icon-btn'>
      <Icon
        name='like'
        width='20'
        height='20'
        color={isLiked ? ICON_ACTIVE_COLOR : 'none'}
      />
    </button>
  );
};
