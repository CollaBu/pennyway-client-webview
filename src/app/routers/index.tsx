import { createBrowserRouter, RouteObject } from 'react-router-dom';
import RootLayout from '../layout/RootLayout.tsx';

const root: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [{ index: true, element: <p>Hello World</p> }],
  },
];

export const router = createBrowserRouter(root);
