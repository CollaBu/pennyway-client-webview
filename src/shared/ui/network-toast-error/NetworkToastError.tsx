import { useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './NetworkToastError.scss';
import { Icon } from '..';

interface NetworkToastErrorProps {
  isVisible: boolean;
  errorMessage: string;
}

export const NetworkToastError: React.FC<NetworkToastErrorProps> = ({
  isVisible,
  errorMessage,
}) => {
  const toastId = useRef<number | string>(-1);

  useEffect(() => {
    if (isVisible && toastId.current === -1) {
      toastId.current = toast(errorMessage);
      return;
    }

    if (!isVisible && toastId.current !== -1) {
      toast.dismiss(toastId.current);
      toastId.current = -1;
      return;
    }
  }, [isVisible, errorMessage]);

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
