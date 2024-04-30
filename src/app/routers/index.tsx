import { createBrowserRouter, RouteObject } from 'react-router-dom';

import { FeedMainPage } from '@/pages/index.ts';

import RootLayout from '../layout/RootLayout.tsx';

const root: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [{ index: true, element: <FeedMainPage /> }],
  },
];

export const router = createBrowserRouter(root);
