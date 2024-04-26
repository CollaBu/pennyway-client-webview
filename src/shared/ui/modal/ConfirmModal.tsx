import ActiveButton from '../button/ActiveButton';
import BasicButton from '../button/BasicButton';

import './ConfirmModal.scss';
import { BaseModalProps } from './types';

interface ConfirmModalProps extends BaseModalProps {
  content: string;
}

export default function ConfirmModal({
  title,
  content,
  onExecute,
  onExecuteMsg,
  onExecuteIsDisabled,
  onClose,
  onCloseMsg,
}: ConfirmModalProps) {
  return (
    <div className='confirmModal'>
      <h3 className='title h3semi'>{title}</h3>
      <p className='content b1md'>{content}</p>
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
    </div>
  );
}
