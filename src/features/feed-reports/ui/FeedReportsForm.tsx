import { Icon } from '@/shared/ui';

import { useSubmitReports } from '../api';
import { MAX_REPORT_CONTENT_LENGTH, REPORT_CATEGORIES } from '../consts';
import { useReportForm } from '../model';

import { ConfirmReportModal } from './ConfirmReportModal';
import './FeedReportsForm.scss';

interface FeedReportsFormProps {
  feedId: number;
  onClose: () => void;
}

export const FeedReportsForm: React.FC<FeedReportsFormProps> = ({
  feedId,
  onClose,
}) => {
  const { reportFeed, isPending } = useSubmitReports(feedId);
  const {
    clickedId,
    content,
    isBlind,
    isDisabledReportForm,
    handleClickCategory,
    handleInputContent,
    toggleBlind,
    createReportBody,
  } = useReportForm(feedId);

  const handleSubmitReports = (event: React.FormEvent) => {
    event.preventDefault();
    if (isDisabledReportForm || isPending) return;

    const body = createReportBody();
    reportFeed(body);
    onClose();
  };

  return (
    <ConfirmReportModal
      onExecute={handleSubmitReports}
      onExecuteIsDisabled={isDisabledReportForm}
      onClose={onClose}
    >
      {/* 신고 카테고리 */}
      <ul className='reports-list'>
        {REPORT_CATEGORIES.map((category, id) => (
          <li key={id} className='report-item'>
            <button
              className='checkbox-btn'
              type='button'
              onClick={() => handleClickCategory(id)}
            >
              <Icon
                name={`checkbox-circle_${id === clickedId ? 'on' : 'off'}`}
                width='20'
                height='20'
              />
            </button>
            <p className='item-name b1md'>{category}</p>
          </li>
        ))}
      </ul>

      {/* 신고 사유 */}
      <div className='report-textarea-container'>
        <textarea
          className='report-textarea b1md'
          spellCheck={false}
          value={content}
          onChange={handleInputContent}
          maxLength={MAX_REPORT_CONTENT_LENGTH}
        />
        <span className='textarea-text-count b2md'>
          {content.length}/{MAX_REPORT_CONTENT_LENGTH}
        </span>
      </div>

      {/* 숨김 처리 체크박스 */}
      <div className='hide-checkbox-container'>
        <button className='checkbox-btn' type='button' onClick={toggleBlind}>
          <Icon
            name={`checkbox-square_${isBlind ? 'on' : 'off'}`}
            width='20'
            height='20'
          />
        </button>
        <p className='hide-checkbox-text b1md'>해당 게시물 숨기기</p>
      </div>
    </ConfirmReportModal>
  );
};
