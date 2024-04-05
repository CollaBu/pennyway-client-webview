import { createBrowserRouter, RouteObject } from 'react-router-dom';
import App from '../App.tsx';
import RootLayout from '../layout/RootLayout.tsx';

const root: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [{ index: true, element: <App /> }],
  },
];

export const router = createBrowserRouter(root);
