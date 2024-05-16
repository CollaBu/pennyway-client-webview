import { ModalOverlay } from '@/shared/ui/modal/ModalOverlay';

import './ConfirmReportModal.scss';

interface ConfirmReportModalProps {
  onExecute: (_: React.FormEvent) => void;
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
          <button onClick={onClose} className='cancle-btn h4semi' type='button'>
            취소
          </button>
          <button
            onClick={onExecute}
            disabled={onExecuteIsDisabled}
            className='confirm-btn h4semi'
            type='submit'
          >
            신고하기
          </button>
        </div>
      </form>
    </ModalOverlay>
  );
};
