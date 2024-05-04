import { ToastContainer } from 'react-toastify';

import './NetworkToastError.scss';
import { Icon } from '..';

export const NetworkToastError = () => {
  return (
    <ToastContainer
      className='network-error-toast b1semi'
      position='bottom-center'
      autoClose={false}
      icon={<Icon name='caution' width='20' height='20' />}
      hideProgressBar={true}
      rtl={false}
      limit={1}
      theme='colored'
    />
  );
};
