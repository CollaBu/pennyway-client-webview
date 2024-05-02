export interface FeedProps {
  feed: Feed;
}

interface Feed {
  id: number;

  user: User;

  title: string;
  content: string;
  images: Image[];

  likeCount: number;
  commentCount: number;

  isLiked: boolean;
  isBookmark: boolean;

  createdAt: string;
  updatedAt: string;
}

interface Image {
  id: number;
  imageUrl: string;
}

interface User {
  id: number;
  profileImage: string;
  name: string;
  content: string;
}
