import { Fragment } from 'react/jsx-runtime';

import './BottomSheetModal.scss';
import { ModalOverlay } from './ModalOverlay';

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
    <ModalOverlay onClose={onClose} styleClass='bottom-sheet'>
      <div className='bottom-sheet-modal'>
        <div className='modal-content'>
          {options.map((option, index) => (
            <Fragment key={index}>
              <button
                onClick={option.onClick}
                type='button'
                className='bsm-option h4md'
              >
                {option.label}
              </button>
              {index < options.length - 1 && <hr className='option-divider' />}
            </Fragment>
          ))}
        </div>
        <button className='bsm-cancle h4semi' type='button' onClick={onClose}>
          취소
        </button>
      </div>
    </ModalOverlay>
  );
};
