import { useInput, useToggle } from '@/shared/hooks';
import { Icon } from '@/shared/ui';

import { MAX_REPORT_CONTENT_LENGTH } from '../consts';
import { useReportCategories, getCategoryName } from '../model';

import { ConfirmReportModal } from './ConfirmReportModal';
import './FeedReportsForm.scss';

interface FeedReportsFormProps {
  onClose: () => void;
}

export const FeedReportsForm: React.FC<FeedReportsFormProps> = ({
  onClose,
}) => {
  const { categories, handleClickCategory } = useReportCategories();
  const [content, handleInputContent] = useInput();
  const [isBlind, toggleBlind] = useToggle(false);

  return (
    <ConfirmReportModal
      onExecute={() => {}} // API 연동 후 수정
      onExecuteIsDisabled={false} // API 연동 후 수정
      onClose={onClose}
    >
      {/* 신고 카테고리 */}
      <ul className='reports-list'>
        {[...categories].map(([id, checked]) => (
          <li key={id} className='report-item'>
            <button
              className='checkbox-btn'
              type='button'
              onClick={() => handleClickCategory(id)}
            >
              <Icon
                name={checked ? 'checkbox-circle_on' : 'checkbox-circle_off'}
                width='20'
                height='20'
              />
            </button>
            <p className='item-name b1md'>{getCategoryName(id)}</p>
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
            name={isBlind ? 'checkbox-square_on' : 'checkbox-square_off'}
            width='20'
            height='20'
          />
        </button>
        <p className='hide-checkbox-text b1md'>해당 게시물 숨기기</p>
      </div>
    </ConfirmReportModal>
  );
};
