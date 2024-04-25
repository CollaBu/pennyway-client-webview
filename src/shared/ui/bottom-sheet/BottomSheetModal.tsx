import { Fragment } from 'react/jsx-runtime';
import './BottomSheetModal.scss';

interface Option {
  label: string;
  onClick: () => void;
}

interface BottomSheetModalProps {
  options: Option[];
}

export default function BottomSheetModal({ options }: BottomSheetModalProps) {
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
      <button className='cancleButton'>취소</button>
    </div>
  );
}
