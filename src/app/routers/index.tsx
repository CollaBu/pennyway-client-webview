import {
  createBrowserRouter,
  RouteObject,
  ScrollRestoration,
} from 'react-router-dom';

import { FeedMainPage } from '@/pages/feed-main';
import { ProfileMainPage } from '@/pages/profile';

import { RootLayout } from '../layout';

const root: RouteObject[] = [
  {
    path: '/',
    element: (
      <>
        <RootLayout />
        <ScrollRestoration
          getKey={(location) => {
            return location.pathname;
          }}
        />
      </>
    ),
    children: [
      { index: true, element: <FeedMainPage /> },
      { path: 'users/:userId', element: <ProfileMainPage /> },
    ],
  },
];

export const router = createBrowserRouter(root);
