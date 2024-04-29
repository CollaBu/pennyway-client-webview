import ActiveButton from '../button/ActiveButton';
import BasicButton from '../button/BasicButton';

import { BaseModalProps as ConfirmReportModalProps } from './types';

export const ConfirmReportModal = ({
  title,
  onExecute,
  onExecuteMsg,
  onExecuteIsDisabled,
  onClose,
  onCloseMsg,
}: ConfirmReportModalProps) => {
  return (
    <form className='confirm-report-modal'>
      <h3 className='title h3semi'>{title}</h3>
      <section></section>
      <div className='buttons'>
        <BasicButton onClick={onClose} styleClass='confirm-cancle'>
          {onCloseMsg}
        </BasicButton>
        <ActiveButton
          onClick={onExecute}
          isDisabled={onExecuteIsDisabled}
          styleClass='confirm'
        >
          {onExecuteMsg}
        </ActiveButton>
      </div>
    </form>
  );
};
