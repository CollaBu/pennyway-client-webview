import { Outlet } from 'react-router-dom';

import FNB from '@/shared/ui/FNB/FNB';

export default function RootLayout() {
  return (
    <>
      <Outlet />
      <FNB />
    </>
  );
}
