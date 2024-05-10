import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './NetworkErrorToast.scss';
import { Icon } from '..';

export const NetworkErrorToast = () => {
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
