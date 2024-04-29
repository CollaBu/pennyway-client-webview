import { ButtonProps } from './types';
import './ActiveButton.scss';

export type ActiveStyle = 'confirm' | 'follow-sm' | 'follow-lg';

interface ActiveButtonProps extends ButtonProps {
  styleClass: ActiveStyle;
  isDisabled: boolean;
}

export const ActiveButton = ({
  onClick,
  styleClass,
  isDisabled,
  children,
}: ActiveButtonProps) => {
  const sytleClassname = isDisabled ? styleClass : `${styleClass}-disabled`;

  return (
    <button
      onClick={onClick}
      className={`${sytleClassname}`}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
