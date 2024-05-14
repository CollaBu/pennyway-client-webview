import { useInput, useToggle } from '@/shared/hooks';
import { Icon } from '@/shared/ui';

import { MAX_REPORT_CONTENT_LENGTH, REPORT_CATEOGRIES } from '../consts';
import { useCheckboxReportCategories } from '../model';

import { ConfirmReportModal } from './ConfirmReportModal';
import './FeedReportsForm.scss';

interface FeedReportsFormProps {
  onClose: () => void;
}

export const FeedReportsForm: React.FC<FeedReportsFormProps> = ({
  onClose,
}) => {
  const { categories, handleClickCategory } = useCheckboxReportCategories();
  const [content, handleInputContent] = useInput();
  const [isBlind, toggleBlind] = useToggle(false);

  return (
    <ConfirmReportModal
      onExecute={() => {}} // API 연동 후 수정
      onExecuteIsDisabled={false} // API 연동 후 수정
      onClose={onClose}
    >
      <>
        <ul className='reports-list'>
          {REPORT_CATEOGRIES.map((item) => (
            <li key={item.id} className='report-item'>
              <button
                className='checkbox-btn'
                type='button'
                onClick={() => handleClickCategory(item.id)}
              >
                <Icon
                  name={
                    categories.get(item.id)
                      ? 'checkbox-circle_on'
                      : 'checkbox-circle_off'
                  }
                  width='20'
                  height='20'
                />
              </button>
              <p className='item-name b1md'>{item.name}</p>
            </li>
          ))}
        </ul>

        <div className='report-textarea-container'>
          <textarea
            className='report-textarea b1md'
            spellCheck={false}
            value={content}
            onChange={handleInputContent}
            maxLength={MAX_REPORT_CONTENT_LENGTH}
          />
          <span className='textarea-text-count b2md'>{content.length}/100</span>
        </div>

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
      </>
    </ConfirmReportModal>
  );
};
