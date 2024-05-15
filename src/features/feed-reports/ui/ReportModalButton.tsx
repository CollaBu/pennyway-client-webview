export type ReportModalButtonStyle = 'confirm' | 'cancle';

interface ConfirmModalButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  styleClass: ReportModalButtonStyle;
  isDisabled?: boolean;
}

export const ReportModalButton = ({
  onClick,
  children,
  styleClass,
  isDisabled = false,
}: ConfirmModalButtonProps) => {
  const sytleClassName = isDisabled ? styleClass : `${styleClass}-disabled`;

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`${sytleClassName} h3semi`}
    >
      {children}
    </button>
  );
};
