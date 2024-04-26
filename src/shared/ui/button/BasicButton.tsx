import { ButtonProps } from './types';

interface BasicButtonProps extends ButtonProps {
  styleClass: 'confirm-cancle' | 'bsm-cancle' | 'bsm-option';
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
