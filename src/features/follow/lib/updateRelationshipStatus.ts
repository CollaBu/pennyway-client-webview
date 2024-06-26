import { RelationshipStatus, FetchRelationshipStatus } from '@/shared/consts';

const RelationshipStatusCalculate = (
  relationshipStatus: RelationshipStatus,
  locked: boolean,
) => {
  switch (relationshipStatus) {
    case 'self':
      return 'self';
    case 'following':
      return 'none';
    case 'none':
      return locked ? 'pending' : 'following';
    case 'pending':
      return 'none';
    default:
      return relationshipStatus;
  }
};

export function updateRelationshipStatus(
  previousRelationshipStatusData: FetchRelationshipStatus,
  locked: boolean,
) {
  return {
    code: previousRelationshipStatusData.code,
    data: {
      relationshipStatus: RelationshipStatusCalculate(
        previousRelationshipStatusData.data.relationshipStatus,
        locked,
      ),
    },
  };
}
