import { Bounce, toast } from 'react-toastify';

const id = 'react-query-toast';

/**
 * 에러 메시지를 토스트 메시지로 변환합니다.
 */
export function showErrorHandler() {
  // reference: https://fkhadra.github.io/react-toastify/api/toast
  if (!toast.isActive(id)) {
    toast('인터넷 연결이 불안정해요', {
      toastId: id,
      autoClose: 3000,
      position: 'bottom-center',
      transition: Bounce,
    });
  }
}

/**
 * 에러 메시지 토스트를 제거합니다.
 */
export function removeErrorHandler() {
  if (toast.isActive(id)) {
    toast.dismiss(id);
  }
}
