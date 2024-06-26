import { User } from '.';

export interface FeedsQueryData {
  queryParams: number[];
  pages: FetchFeeds[];
}

export interface FetchFeeds {
  code: string;
  data: {
    currentPageNumber: number;
    feeds: Feed[];
    hasNextPage: boolean;
    numberOfElements: number;
    pageSize: number;
  };
}

export interface Feed {
  id: number;
  user: Pick<User, 'id' | 'profileImage' | 'username'>;

  content: string;
  images: Image[];

  likeCount: number;
  commentCount: number;

  isLiked: boolean;
  isBookmarked: boolean;

  createdAt: string;
  updatedAt: string;
}

export interface Image {
  id: number;
  imageUrl: string;
}
