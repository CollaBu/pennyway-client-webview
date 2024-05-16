import { Bounce, toast } from 'react-toastify';

import { Icon } from '@/shared/ui';
import { IconName } from '@/shared/ui/icon';

const id = 'react-query-toast';

/**
 * reference: https://fkhadra.github.io/react-toastify/api/toast
 * 메시지를 토스트 메시지로 변환합니다.
 * @param iconName 아이콘 이름
 * @param message 메시지
 */
export function showToastHandler(iconName: IconName, message: string) {
  if (!toast.isActive(id)) {
    toast(message, {
      toastId: id,
      autoClose: 3000,
      position: 'bottom-center',
      transition: Bounce,
      icon: <Icon name={iconName} width='20' height='20' />,
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
