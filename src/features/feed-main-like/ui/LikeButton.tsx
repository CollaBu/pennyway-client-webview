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
        color={isLiked ? '#00D5E1' : 'none'}
      />
    </button>
  );
};
