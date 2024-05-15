import { ButtonProps } from './types';
import './ActiveButton.scss';

export type ConfirmModalButtonStyle = 'confirm' | 'cancle';

interface ConfirmModalButtonProps extends ButtonProps {
  styleClass: ConfirmModalButtonStyle;
}

export const ConfirmModalButton = ({
  onClick,
  children,
  styleClass,
}: ConfirmModalButtonProps) => {
  return (
    <button onClick={onClick} className={`${styleClass} h4semi`}>
      {children}
    </button>
  );
};
