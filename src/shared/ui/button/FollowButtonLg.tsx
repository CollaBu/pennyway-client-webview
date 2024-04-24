import './followButton.scss';
import { ActiveButtonProps } from './types';

interface FollowButtonLgProps extends ActiveButtonProps {}

export default function FollowButtonLg({
  onClick,
  isActive,
  children,
}: FollowButtonLgProps) {
  const style = isActive ? 'followButtonLgActive' : 'followButtonLg';
  return (
    <button onClick={onClick} className={`${style} b1semi`}>
      {children}
    </button>
  );
}
