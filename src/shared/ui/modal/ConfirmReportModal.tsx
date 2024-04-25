import ConfirmButton from '../button/ConfirmButton';
import ConfirmCancleButton from '../button/ConfirmCancleButton';

import { BaseModalProps } from './types';

interface ConfirmReportModalProps extends BaseModalProps {
  children: React.ReactNode;
}

export default function ConfirmReportModal({
  title,
  children,
  onExecute,
  onExecuteMsg,
  onExecuteisActive,
  onClose,
  onCloseMsg,
}: ConfirmReportModalProps) {
  return (
    <form className='confirmReportModal'>
      <h3 className='title h3semi'>{title}</h3>
      <section>{children}</section>
      <div className='buttons'>
        <ConfirmCancleButton onClick={onClose}>
          {onCloseMsg}
        </ConfirmCancleButton>
        <ConfirmButton onClick={onExecute} isActive={onExecuteisActive}>
          {onExecuteMsg}
        </ConfirmButton>
      </div>
    </form>
  );
}
