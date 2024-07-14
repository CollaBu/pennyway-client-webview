import { RelationshipStatus, FetchRelationshipStatus } from '@/shared/consts';

/**
 * 팔로우, 언팔로우/팔로우 취소에 따라 변경되는 관계 상태를 계산하는 함수
 * @param {RelationshipStatus} relationshipStatus 이전 관계 상태
 * @param {boolean} locked 비공개 계정 여부
 * @returns {RelationshipStatus} 변경된 관계 상태
 */

const calculateRelationshipStatus = (
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
      relationshipStatus: calculateRelationshipStatus(
        previousRelationshipStatusData.data.relationshipStatus,
        locked,
      ),
    },
  };
}
