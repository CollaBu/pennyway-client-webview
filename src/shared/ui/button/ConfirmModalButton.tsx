import { ButtonProps } from './types';
import './ConfirmModalButton.scss';

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
    <button onClick={onClick} type='button' className={`${styleClass} h4semi`}>
      {children}
    </button>
  );
};
