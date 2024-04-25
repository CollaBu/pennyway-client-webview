import { Fragment } from 'react/jsx-runtime';
import './BottomModal.scss';

interface Option {
  label: string;
  onClick: () => void;
}

interface BottomModalProps {
  options: Option[];
}

export default function BottomModal({ options }: BottomModalProps) {
  return (
    <div className='dropupModal'>
      <div className='modalContent'>
        {options.map((option, index) => (
          <Fragment key={index}>
            <button onClick={option.onClick} className='modalOption'>
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
