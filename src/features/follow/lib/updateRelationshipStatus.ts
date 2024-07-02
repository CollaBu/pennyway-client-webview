import { RelationshipStatus, FetchRelationshipStatus } from '@/shared/consts';

/**
 * 팔로우, 언팔로우/팔로우 취소에 따라 변경된 관계 상태를 계산하는 함수
 * @param relationshipStatus 이전 관계 상태
 * @param locked 비공개 계정 여부
 */

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
