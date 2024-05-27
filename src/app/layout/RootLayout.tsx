import { Outlet } from 'react-router-dom';
import './RootLayout.scss';

export const RootLayout = () => {
  return (
    <div className='wrap'>
      <Outlet />
    </div>
  );
};
