import { ActiveButton, BasicButton } from '@/shared/ui';
import { ModalOverlay } from '@/shared/ui/modal/ModalOverlay';

import './ConfirmReportModal.scss';

interface ConfirmReportModalProps {
  onExecute: () => void;
  onExecuteIsDisabled: boolean;
  onClose: () => void;
  children: JSX.Element[];
}

export const ConfirmReportModal: React.FC<ConfirmReportModalProps> = ({
  onExecute,
  onExecuteIsDisabled,
  onClose,
  children,
}) => {
  return (
    <ModalOverlay styleClass='modal' onClose={onClose}>
      <form className='confirm-report-modal'>
        <h3 className='title h3semi'>신고하기</h3>
        {children}
        <div className='modal-btn-container'>
          <BasicButton onClick={onClose} styleClass='confirm-cancle h4semi'>
            취소
          </BasicButton>
          <ActiveButton
            onClick={onExecute}
            isDisabled={onExecuteIsDisabled}
            styleClass='confirm h4semi'
          >
            신고하기
          </ActiveButton>
        </div>
      </form>
    </ModalOverlay>
  );
};
