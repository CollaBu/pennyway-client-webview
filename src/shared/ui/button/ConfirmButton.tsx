import './ConfirmButton.scss';
import { ActiveButtonProps } from './buttonType';

interface ConfirmButtonProps extends ActiveButtonProps {
  isActive: boolean;
}

export default function ConfirmButton({
  onClick,
  isActive,
  children,
}: ConfirmButtonProps) {
  const style = isActive ? 'confirmButtonActive' : 'confirmButton';
  return (
    <button onClick={onClick} className={`${style} h4semi`}>
      {children}
    </button>
  );
}
