import { ButtonProps } from './types';
import './ActiveButton.scss';

export type ActiveStyle =
  | 'confirm h4semi'
  | 'follow-sm b2semi'
  | 'follow-lg b1semi';

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
