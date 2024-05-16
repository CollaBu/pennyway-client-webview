import { ConfirmModalButton } from '../button/index';

import './ConfirmModal.scss';
import { ModalOverlay } from './ModalOverlay';

interface ConfirmModalProps {
  title: string;
  content: string;
  onExecute: () => void;
  onExecuteMsg: string;
  onClose: () => void;
  onCloseMsg: string;
}

export const ConfirmModal = ({
  title,
  content,
  onExecute,
  onExecuteMsg,
  onClose,
  onCloseMsg,
}: ConfirmModalProps) => {
  return (
    <ModalOverlay styleClass='modal' onClose={onClose}>
      <div className='confirm-modal'>
        <h3 className='title h3semi'>{title}</h3>
        <p className='content b1md'>{content}</p>
        <div className='modal-btn-container'>
          <ConfirmModalButton onClick={onClose} styleClass='cancle'>
            {onCloseMsg}
          </ConfirmModalButton>
          <ConfirmModalButton onClick={onExecute} styleClass='confirm'>
            {onExecuteMsg}
          </ConfirmModalButton>
        </div>
      </div>
    </ModalOverlay>
  );
};
