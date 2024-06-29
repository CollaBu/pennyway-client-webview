import './ProfileFollowButton.scss';

import { useFollow, useUnfollow } from '@/features/follow';
import { RelationshipStatus } from '@/shared/consts';

interface ProfileFollowButtonProps {
  relationshipStatus: RelationshipStatus;
  userId: number;
  locked: boolean;
}

export const ProfileFollowButton = ({
  relationshipStatus,
  userId,
  locked,
}: ProfileFollowButtonProps) => {
  const { handleFollow, isPendingFollow } = useFollow(userId, locked);
  const { handleUnfollow, isPendingUnfollow } = useUnfollow(userId, locked);

  switch (relationshipStatus) {
    case 'none':
      return (
        <button
          onClick={() => handleFollow()}
          disabled={isPendingFollow}
          className='profile-follow-btn b2md'
        >
          팔로우
        </button>
      );
    case 'pending':
    case 'following':
      return (
        <button
          onClick={() => handleUnfollow()}
          disabled={isPendingUnfollow}
          className='profile-unfollow-btn b2md'
        >
          {relationshipStatus === 'pending' ? '대기중' : '팔로잉'}
        </button>
      );
    default:
      return null;
  }
};
