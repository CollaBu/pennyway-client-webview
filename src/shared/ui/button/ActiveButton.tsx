import { ButtonProps } from './types';

interface ActiveButtonProps extends ButtonProps {
  styleClass: 'confirm' | 'follow-sm' | 'follow-lg';
  isDisabled: boolean;
}

export default function ActiveButton({
  onClick,
  styleClass,
  isDisabled,
  children,
}: ActiveButtonProps) {
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
}
