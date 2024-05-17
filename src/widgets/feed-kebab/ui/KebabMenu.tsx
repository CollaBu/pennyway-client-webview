import { HideButton } from '@/features/feed-hides';
import { FeedReportsForm } from '@/features/feed-reports';
import { useToggle } from '@/shared/hooks';

import './KebabMenu.scss';

interface KebabMenuProps {
  feedId: number;
  onClose: () => void;
}

export const KebabMenu: React.FC<KebabMenuProps> = ({ feedId, onClose }) => {
  const [isVisibilityReportsForm, toggleVisibilityReportsForm] =
    useToggle(false);

  return (
    <>
      <ul className='kebab-menu-list'>
        <li className='kebab-menu-item'>
          <HideButton feedId={feedId} onClose={onClose} />
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
      {isVisibilityReportsForm && (
        <FeedReportsForm feedId={feedId} onClose={onClose} />
      )}
    </>
  );
};
