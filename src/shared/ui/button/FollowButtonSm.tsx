import './followButton.scss';
import { ActiveButtonProps } from './types';

interface FollowButtonSmProps extends ActiveButtonProps {}

export default function FollowButtonSm({
  onClick,
  isActive,
  children,
}: FollowButtonSmProps) {
  const style = isActive ? 'followButtonSmActive' : 'followButtonSm';
  return (
    <button onClick={onClick} className={`${style} b2semi`}>
      {children}
    </button>
  );
}
