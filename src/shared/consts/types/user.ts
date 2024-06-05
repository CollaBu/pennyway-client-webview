export interface User {
  id: number;
  profileImage: string;
  name: string;
  username: string;
  content: string;
  locked: boolean;

  feedCount: number;
  followingCount: number;
  followerCount: number;
}

export interface FetchUser {
  code: string;
  data: {
    user: User;
  };
}

export type RelationshipStatus = 'self' | 'following' | 'none' | 'pending';

export interface FetchRelationshipStatus {
  code: string;
  data: {
    relationshipStatus: RelationshipStatus;
  };
}
