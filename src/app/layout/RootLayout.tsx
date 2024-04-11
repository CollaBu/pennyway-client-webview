import { Outlet } from 'react-router-dom';
import Navbar from '@/shared/ui/Navbar';

export default function RootLayout() {
  return (
    <>
      <Outlet />
      <Navbar />
    </>
  );
}
