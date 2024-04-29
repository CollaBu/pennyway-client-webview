import { Fragment } from 'react/jsx-runtime';

import { BasicButton } from '../button/index';

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
              <BasicButton onClick={option.onClick} styleClass='bsm-option'>
                {option.label}
              </BasicButton>
              {index < options.length - 1 && <hr className='option-divider' />}
            </Fragment>
          ))}
        </div>
        <BasicButton styleClass='bsm-cancle' onClick={onClose}>
          취소
        </BasicButton>
      </div>
    </ModalOverlay>
  );
};
