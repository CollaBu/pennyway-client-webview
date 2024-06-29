import { RelationshipStatus } from '@/shared/consts';
import { users } from './user';

interface Relationship {
  [userId: keyof typeof users]: RelationshipStatus;
}

export const relationshipStatus: Relationship = {
  1: 'self',
  2: 'following',
  3: 'pending',
  4: 'none',
  5: 'following',
  6: 'none',
  7: 'following',
  8: 'none',
  9: 'none',
};
