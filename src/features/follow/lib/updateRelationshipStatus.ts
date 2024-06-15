import { RelationshipStatus } from '@/shared/consts';

export function updateRelationshipStatus(
  previousRelationshipStatus: RelationshipStatus,
  isPrivate: boolean,
) {
  switch (previousRelationshipStatus) {
    case 'self':
      return 'self';
    case 'following':
      return 'none';
    case 'none':
      return isPrivate ? 'pending' : 'following';
    case 'pending':
      return 'none';
    default:
      return previousRelationshipStatus;
  }
}
