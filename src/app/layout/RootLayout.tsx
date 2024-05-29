import { IPhoneLayout } from 'react-iphone-layout';
import 'react-iphone-layout/dist/ReactIPhoneLayout.css';
import { Outlet } from 'react-router-dom';

import './RootLayout.scss';

export const RootLayout = () => {
  return (
    <IPhoneLayout>
      <div className='wrap'>
        <Outlet />
      </div>
    </IPhoneLayout>
  );
};
