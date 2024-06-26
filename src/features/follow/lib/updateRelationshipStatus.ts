import { RelationshipStatus } from '@/shared/consts';

export function updateRelationshipStatus(
  previousRelationshipStatus: RelationshipStatus,
  locked: boolean,
) {
  switch (previousRelationshipStatus) {
    case 'self':
      return 'self';
    case 'following':
      return 'none';
    case 'none':
      return locked ? 'pending' : 'following';
    case 'pending':
      return 'none';
    default:
      return previousRelationshipStatus;
  }
}
