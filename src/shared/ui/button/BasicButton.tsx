import { ButtonProps } from './types';
import './BasicButton.scss';

export type BasicStyle =
  | 'defalut'
  | 'confirm-cancle h4semi'
  | 'bsm-cancle h4semi'
  | 'bsm-option h4md';

interface BasicButtonProps extends ButtonProps {
  styleClass: BasicStyle;
}

export const BasicButton = ({
  onClick,
  styleClass,
  children,
}: BasicButtonProps) => {
  return (
    <button onClick={onClick} className={styleClass}>
      {children}
    </button>
  );
};
