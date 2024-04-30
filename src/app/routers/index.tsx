import { createBrowserRouter, RouteObject } from 'react-router-dom';

import FeedMainPage from '@/pages/feed-main/ui/FeedMainPage.tsx';

import RootLayout from '../layout/RootLayout.tsx';

const root: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [{ index: true, element: <FeedMainPage /> }],
  },
];

export const router = createBrowserRouter(root);
