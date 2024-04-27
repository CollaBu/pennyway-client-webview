import { ButtonProps } from './types';
import './BasicButton.scss';

export type BasicStyle =
  | 'defalut'
  | 'confirm-cancle'
  | 'bsm-cancle'
  | 'bsm-option';

interface BasicButtonProps extends ButtonProps {
  styleClass: BasicStyle;
}

export default function BasicButton({
  onClick,
  styleClass,
  children,
}: BasicButtonProps) {
  return (
    <button onClick={onClick} className={styleClass}>
      {children}
    </button>
  );
}
