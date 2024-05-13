import { Icon } from '@/shared/ui';

import { REPORTS } from '../consts';
import { useCheckbox } from '../model';

import { ConfirmReportModal } from './ConfirmReportModal';
import './FeedReportsForm.scss';

interface FeedReportsFormProps {
  onClose: () => void;
}

export const FeedReportsForm: React.FC<FeedReportsFormProps> = ({
  onClose,
}) => {
  const { checkedItemMap, handleClickItem } = useCheckbox();

  return (
    <ConfirmReportModal
      onExecute={() => {}} // API 연동 후 수정
      onExecuteIsDisabled={false} // API 연동 후 수정
      onClose={onClose}
    >
      <section className='reports-section'>
        <ul className='reports-list'>
          {REPORTS.map((item) => (
            <li key={item.id} className='report-item b1md'>
              <button type='button' onClick={() => handleClickItem(item.id)}>
                <Icon
                  name={checkedItemMap.get(item.id) ? 'checkon' : 'checkoff'}
                  width='20'
                  height='20'
                />
              </button>
              <p className='item-name'>{item.name}</p>
            </li>
          ))}
        </ul>
      </section>
    </ConfirmReportModal>
  );
};
