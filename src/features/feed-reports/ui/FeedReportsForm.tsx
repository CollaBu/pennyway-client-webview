import { ConfirmReportModal } from './ConfirmReportModal';

interface FeedReportsFormProps {
  onClose: () => void;
}

export const FeedReportsForm: React.FC<FeedReportsFormProps> = ({
  onClose,
}) => {
  return (
    <ConfirmReportModal
      onExecute={() => {}} // API 연동 후 수정
      onExecuteIsDisabled={false} // API 연동 후 수정
      onClose={onClose}
    >
      <section className='reports-section'>hi</section>
    </ConfirmReportModal>
  );
};
