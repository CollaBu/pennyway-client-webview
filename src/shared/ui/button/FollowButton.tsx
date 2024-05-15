import './FollowButton.scss';
import { ButtonProps } from './types';

interface FollowButtonProps extends ButtonProps {
  isUnfollow: boolean;
}

export const FollowButton = ({
  onClick,
  isUnfollow,
  children,
}: FollowButtonProps) => {
  const sytleClass = isUnfollow ? 'follow' : 'follow-unfollow';

  return (
    <button onClick={onClick} className={`${sytleClass} b2semi`}>
      {children}
    </button>
  );
};
