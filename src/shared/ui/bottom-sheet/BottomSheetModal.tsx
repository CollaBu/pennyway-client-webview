import { Fragment } from 'react/jsx-runtime';

import './BottomSheetModal.scss';
import BasicButton from '../button/BasicButton';

interface Option {
  label: string;
  onClick: () => void;
}

interface BottomSheetModalProps {
  options: Option[];
  onClose: () => void;
}

export default function BottomSheetModal({
  options,
  onClose,
}: BottomSheetModalProps) {
  return (
    <div className='bottomModal'>
      <div className='modalContent'>
        {options.map((option, index) => (
          <Fragment key={index}>
            <button onClick={option.onClick} className='option'>
              {option.label}
            </button>
            {index < options.length - 1 && <hr className='optionDivider' />}
          </Fragment>
        ))}
      </div>
      <BasicButton styleClass='bsm-cancle' onClick={onClose}>
        취소
      </BasicButton>
    </div>
  );
}
