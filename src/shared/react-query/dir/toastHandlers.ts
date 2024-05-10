import { toast } from 'react-toastify';

/**
 * 에러 메시지를 토스트 메시지로 변환합니다.
 */
export function showErrorHandler() {
  // reference: https://fkhadra.github.io/react-toastify/api/toast
  const id = 'react-query-toast';

  if (!toast.isActive(id)) {
    toast('인터넷 연결이 불안정해요', {
      toastId: id,
      position: 'bottom-center',
    });
  }
}
