import { useToggle } from '@/shared/hooks';
import './KebabMenu.scss';

interface KebabMenuProps {
  onClose: () => void;
}

export const KebabMenu: React.FC<KebabMenuProps> = ({ onClose }) => {
  const [isVisibilityReportsForm, toggleVisibilityReportsForm] =
    useToggle(false);

  return (
    <>
      <ul className='kebab-menu-list'>
        <li className='kebab-menu-item'>
          <button className='item-btn b2md'>게시물 숨기기</button>
        </li>
        <li className='kebab-menu-item'>
          <button
            className='item-btn b2md'
            onClick={toggleVisibilityReportsForm}
          >
            신고하기
          </button>
        </li>
      </ul>
      {isVisibilityReportsForm && <p onClick={onClose}>신고</p>}
    </>
  );
};
