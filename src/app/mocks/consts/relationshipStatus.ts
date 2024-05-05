import { Relationship } from '@/shared/consts';
import { users } from './user';

interface RelationshipStatus {
  [userId: keyof typeof users]: Relationship;
}

export const relationshipStatus: RelationshipStatus = {
  1: { relationshipStatus: 'self' },
  2: { relationshipStatus: 'following' },
  3: { relationshipStatus: 'pending' },
  4: { relationshipStatus: 'none' },
  5: { relationshipStatus: 'following' },
  6: { relationshipStatus: 'pending' },
  7: { relationshipStatus: 'following' },
  8: { relationshipStatus: 'none' },
  9: { relationshipStatus: 'pending' },
};
