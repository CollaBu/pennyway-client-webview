import { Fragment } from 'react/jsx-runtime';

import './BottomSheetModal.scss';
import { BasicButton } from '../button/index';

interface Option {
  label: string;
  onClick: () => void;
}

interface BottomSheetModalProps {
  options: Option[];
  onClose: () => void;
}

export const BottomSheetModal = ({
  options,
  onClose,
}: BottomSheetModalProps) => {
  return (
    <div className='bottom-sheet-modal'>
      <div className='modal-content'>
        {options.map((option, index) => (
          <Fragment key={index}>
            <button onClick={option.onClick} className='option'>
              {option.label}
            </button>
            {index < options.length - 1 && <hr className='option-divider' />}
          </Fragment>
        ))}
      </div>
      <BasicButton styleClass='bsm-cancle' onClick={onClose}>
        취소
      </BasicButton>
    </div>
  );
};
