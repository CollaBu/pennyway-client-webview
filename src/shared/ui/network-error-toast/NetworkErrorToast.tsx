import { useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './NetworkErrorToast.scss';
import { Icon } from '..';

interface NetworkToastErrorProps {
  isVisible: boolean;
  errorMessage: string;
}

export const NetworkErrorToast: React.FC<NetworkToastErrorProps> = ({
  isVisible,
  errorMessage,
}) => {
  const toastId = useRef<number | string>(-1);

  useEffect(() => {
    // 에러 메시지가 보여야 하고, 현재 토스트가 표시되지 않았다면,
    // 새로운 토스트를 표시하고 그 ID를 toastId에 저장합니다.
    if (isVisible && toastId.current === -1) {
      toastId.current = toast(errorMessage);
      return;
    }

    // 에러 메시지가 보여지지 않아야 하고, 현재 토스트가 표시되어 있다면,
    // 토스트를 제거하고 toastId를 초기화합니다.
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
