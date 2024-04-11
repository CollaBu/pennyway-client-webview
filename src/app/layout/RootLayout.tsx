import { Outlet } from 'react-router-dom';
import Navbar from '@/shared/ui/FNB/FNB';

export default function RootLayout() {
  return (
    <>
      <Outlet />
      <Navbar />
    </>
  );
}
