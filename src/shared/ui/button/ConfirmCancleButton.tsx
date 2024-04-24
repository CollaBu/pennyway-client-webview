import './ConfirmButton.scss';
import { BaseButtonProps } from './buttonType';

interface ConfirmCancleButtonProps extends BaseButtonProps {}

export default function ConfirmCancleButton({
  onClick,
  children,
}: ConfirmCancleButtonProps) {
  return (
    <button onClick={onClick} className='confirmCancleButton h4semi'>
      {children}
    </button>
  );
}
