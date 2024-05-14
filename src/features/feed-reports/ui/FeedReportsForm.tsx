import { Icon } from '@/shared/ui';

import { REPORTS } from '../consts';
import { useCheckbox, useInputReports } from '../model';

import { ConfirmReportModal } from './ConfirmReportModal';
import './FeedReportsForm.scss';

interface FeedReportsFormProps {
  onClose: () => void;
}

export const FeedReportsForm: React.FC<FeedReportsFormProps> = ({
  onClose,
}) => {
  const { checkedItemMap, handleClickItem } = useCheckbox();
  const { content, contentLength, handleInputContent } = useInputReports();

  return (
    <ConfirmReportModal
      onExecute={() => {}} // API 연동 후 수정
      onExecuteIsDisabled={false} // API 연동 후 수정
      onClose={onClose}
    >
      <>
        <ul className='reports-list'>
          {REPORTS.map((item) => (
            <li key={item.id} className='report-item'>
              <button
                className='checkbox-btn'
                type='button'
                onClick={() => handleClickItem(item.id)}
              >
                <Icon
                  name={checkedItemMap.get(item.id) ? 'checkon' : 'checkoff'}
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
          />
          <span className='textarea-text-count b2md'>{contentLength}/100</span>
        </div>
      </>
    </ConfirmReportModal>
  );
};
