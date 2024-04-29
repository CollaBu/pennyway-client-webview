import { Outlet } from 'react-router-dom';

import { FNB } from '@/shared/ui/fnb';

export default function RootLayout() {
  return (
    <>
      <Outlet />
      <FNB />
    </>
  );
}
