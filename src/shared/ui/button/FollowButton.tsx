import './FollowButton.scss';
import { ButtonProps } from './types';

interface FollowButtonProps extends ButtonProps {
  isFollow: boolean;
}

export const FollowButton = ({ onClick, isFollow }: FollowButtonProps) => {
  const sytleClass = isFollow ? 'follow' : 'unfollow';
  const content = isFollow ? '팔로잉' : '팔로우';

  return (
    <button onClick={onClick} type='button' className={`${sytleClass} b2semi`}>
      {content}
    </button>
  );
};
