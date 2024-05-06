import { ActiveButton, BasicButton } from '../button/index';

import { ModalOverlay } from './ModalOverlay';
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
    <ModalOverlay styleClass='modal' onClose={onClose}>
      <form className='confirm-report-modal'>
        <h3 className='title h3semi'>{title}</h3>
        <section></section>
        <div className='buttons'>
          <BasicButton onClick={onClose} styleClass='confirm-cancle h4semi'>
            {onCloseMsg}
          </BasicButton>
          <ActiveButton
            onClick={onExecute}
            isDisabled={onExecuteIsDisabled}
            styleClass='confirm h4semi'
          >
            {onExecuteMsg}
          </ActiveButton>
        </div>
      </form>
    </ModalOverlay>
  );
};
