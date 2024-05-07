import { User } from '.';

export interface Comment {
  id: number;

  user: Pick<User, 'id' | 'profileImage' | 'name'>;
  content: string;

  createdAt: string;
  updatedAt: string;
}
