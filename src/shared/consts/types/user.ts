export interface User {
  id: number;
  profileImage: string;
  name: string;
  content: string;

  feedCount: number;
  followingCount: number;
  followerCount: number;
}

export type RelationshipStatus = 'self' | 'following' | 'none' | 'pending';
