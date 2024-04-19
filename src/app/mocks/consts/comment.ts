import { feeds } from './feed';
import { User, users } from './user';

interface Comments {
  [feedId: keyof typeof feeds]: Comment[];
}

interface Comment {
  id: number;

  user: User;
  content: string;

  createdAt: string;
  updatedAt: string;
}

export const comments: Comments = {
  1: [
    {
      id: 1,
      user: users[1],
      content: 'post 1 - comment 1',

      createdAt: '2024-04-16 12:00:00',
      updatedAt: '2024-04-16 12:00:00',
    },
    {
      id: 2,
      user: users[3],
      content: 'post 1 - comment 2',

      createdAt: '2024-04-16 12:00:00',
      updatedAt: '2024-04-16 12:00:00',
    },
  ],
  2: [],
  3: [
    {
      id: 1,
      user: users[2],
      content: 'post 1 - comment 1',

      createdAt: '2024-04-16 12:00:00',
      updatedAt: '2024-04-16 12:00:00',
    },
  ],
  4: [
    {
      id: 1,
      user: users[4],
      content: 'post 1 - comment 1',

      createdAt: '2024-04-16 12:00:00',
      updatedAt: '2024-04-16 12:00:00',
    },
  ],
  5: [],
  6: [
    {
      id: 1,
      user: users[6],
      content: 'post 1 - comment 1',

      createdAt: '2024-04-16 12:00:00',
      updatedAt: '2024-04-16 12:00:00',
    },
  ],
  7: [],
  8: [],
  9: [
    {
      id: 1,
      user: users[8],
      content: 'post 1 - comment 1',

      createdAt: '2024-04-16 12:00:00',
      updatedAt: '2024-04-16 12:00:00',
    },
  ],
};
