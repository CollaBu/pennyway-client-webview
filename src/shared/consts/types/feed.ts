import { User } from '.';

export interface Feed {
  id: number;
  user: Pick<User, 'id' | 'profileImage' | 'name'>;

  content: string;
  images: Image[];

  likeCount: number;
  commentCount: number;

  isLiked: boolean;
  isBookmark: boolean;

  createdAt: string;
  updatedAt: string;
}

export interface Image {
  id: number;
  imageUrl: string;
}
