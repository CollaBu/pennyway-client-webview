import { ActiveButton, BasicButton } from '../button/index';

import './ConfirmModal.scss';
import { ModalOverlay } from './ModalOverlay';
import { BaseModalProps } from './types';

interface ConfirmModalProps extends BaseModalProps {
  content: string;
}

export const ConfirmModal = ({
  title,
  content,
  onExecute,
  onExecuteMsg,
  onExecuteIsDisabled,
  onClose,
  onCloseMsg,
}: ConfirmModalProps) => {
  return (
    <ModalOverlay styleClass='modal' onClose={onClose}>
      <div className='confirm-modal'>
        <h3 className='title h3semi'>{title}</h3>
        <p className='content b1md'>{content}</p>
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
      </div>
    </ModalOverlay>
  );
};
