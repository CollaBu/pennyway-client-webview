import './ReportModalButton.scss';

export type ReportModalButtonStyle = 'confirm' | 'cancle';

interface ReportModalButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  styleClass: ReportModalButtonStyle;
  type?: 'button' | 'submit' | 'reset';
  isDisabled?: boolean;
}

export const ReportModalButton = ({
  onClick,
  children,
  styleClass,
  type = 'submit',
  isDisabled = false,
}: ReportModalButtonProps) => {
  const sytleClassName = isDisabled ? `${styleClass}-disabled` : styleClass;

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`${sytleClassName} h4semi`}
      type={type}
    >
      {children}
    </button>
  );
};
