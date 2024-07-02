import './ProfileFollowButton.scss';

import { useFollow } from '@/features/follow';
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
  const isfollow = relationshipStatus === 'none' ? true : false;
  const { handleFollow, isPendingFollow } = useFollow(userId, locked, isfollow);

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
          onClick={() => handleFollow()}
          disabled={isPendingFollow}
          className='profile-unfollow-btn b2md'
        >
          {relationshipStatus === 'pending' ? '대기중' : '팔로잉'}
        </button>
      );
    default:
      return null;
  }
};
