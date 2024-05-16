import { Bounce, toast } from 'react-toastify';

const id = 'react-query-toast';

/**
 * 메시지를 토스트 메시지로 변환합니다.
 * @param message 메시지
 */
export function showToastHandler(message: string) {
  // reference: https://fkhadra.github.io/react-toastify/api/toast
  if (!toast.isActive(id)) {
    toast(message, {
      toastId: id,
      autoClose: 3000,
      position: 'bottom-center',
      transition: Bounce,
    });
  }
}

/**
 * 화면에 표시되어 있는 토스트를 제거합니다.
 */
export function removeToastHandler() {
  if (toast.isActive(id)) {
    toast.dismiss(id);
  }
}
