import { IPhoneLayout } from 'react-iphone-layout';
import 'react-iphone-layout/dist/ReactIPhoneLayout.css';
import { Outlet, ScrollRestoration } from 'react-router-dom';

import './RootLayout.scss';

/**
 * 🚨 현재 적용되어 있는 IPhoneLayout은 DEV 모드에서만 활성화되어야 하지만,
 * 실제 개발 서버에서도 볼 수 있도록 하기 위해 따로 처리하지 않겠습니다.
 * 하지만 실제 PROD 모드로 배포할 경우에는 <IPhoneLayout />을 제거해주세요.
 */
export const RootLayout = () => {
  return (
    <IPhoneLayout defaultSize={85}>
      <div className='wrap'>
        <Outlet />
      </div>
      <ScrollRestoration
        getKey={(location) => {
          return location.pathname;
        }}
      />
    </IPhoneLayout>
  );
};
