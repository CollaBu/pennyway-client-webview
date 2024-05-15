import './ReportModalButton.scss';

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
  const sytleClassName = isDisabled ? `${styleClass}-disabled` : styleClass;

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`${sytleClassName} h4semi`}
    >
      {children}
    </button>
  );
};
