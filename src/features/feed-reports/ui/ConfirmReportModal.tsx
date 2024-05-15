import { ModalOverlay } from '@/shared/ui/modal/ModalOverlay';

import './ConfirmReportModal.scss';
import { ReportModalButton } from './ReportModalButton';

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
          <ReportModalButton onClick={onClose} styleClass='cancle'>
            취소
          </ReportModalButton>
          <ReportModalButton
            onClick={onExecute}
            isDisabled={onExecuteIsDisabled}
            styleClass='confirm'
          >
            신고하기
          </ReportModalButton>
        </div>
      </form>
    </ModalOverlay>
  );
};
