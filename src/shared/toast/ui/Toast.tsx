import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Toast.scss';

export const Toast = () => {
  return (
    <ToastContainer
      className='network-error-toast b1semi'
      limit={1}
      pauseOnHover={false}
      pauseOnFocusLoss={false}
      theme='colored'
    />
  );
};
