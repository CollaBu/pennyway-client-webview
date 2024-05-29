import { createBrowserRouter, RouteObject } from 'react-router-dom';

import { FeedMainPage } from '@/pages/feed-main';
import { ProfileMainPage } from '@/pages/profile';

import { RootLayout } from '../layout';

const root: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <FeedMainPage /> },
      { path: 'users/:userId', element: <ProfileMainPage /> },
    ],
  },
];

export const router = createBrowserRouter(root);
