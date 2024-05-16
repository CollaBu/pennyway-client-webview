import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Icon } from '@/shared/ui';

import './Toast.scss';

export const Toast = () => {
  return (
    <ToastContainer
      className='network-error-toast b1semi'
      icon={<Icon name='caution' width='20' height='20' />}
      limit={1}
      pauseOnHover={false}
      pauseOnFocusLoss={false}
      theme='colored'
    />
  );
};
