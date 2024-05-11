import { createBrowserRouter, RouteObject } from 'react-router-dom';

import { FeedMainPage } from '@/pages/index.ts';

import { IPhoneLayout } from '../layout';

/**
 * 🚨 현재 iPhone Layout은 DEV 모드에서만 활성화되는 부분이지만,
 * 실제 PROD 환경에서도 볼 수 있도록 하기 위해 따로 처리하지 않겠습니다.
 * 하지만 실제 PROD 모드로 배포할 경우에는 <IPhoneLayout />을 제거하고 <RootLayout />으로 변경해주세요.
 */
const root: RouteObject[] = [
  {
    path: '/',
    element: <IPhoneLayout />,
    children: [{ index: true, element: <FeedMainPage /> }],
  },
];

export const router = createBrowserRouter(root);
