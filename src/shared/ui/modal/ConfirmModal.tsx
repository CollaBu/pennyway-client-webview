import ConfirmButton from '../button/ConfirmButton';
import ConfirmCancleButton from '../button/ConfirmCancleButton';

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
  onExecuteisActive,
  onClose,
  onCloseMsg,
}: ConfirmModalProps) {
  return (
    <div className='confirmModal'>
      <h3 className='title h3semi'>{title}</h3>
      <p className='description b1md'>{content}</p>
      <div className='buttons'>
        <ConfirmCancleButton onClick={onClose}>
          {onCloseMsg}
        </ConfirmCancleButton>
        <ConfirmButton onClick={onExecute} isActive={onExecuteisActive}>
          {onExecuteMsg}
        </ConfirmButton>
      </div>
    </div>
  );
}
