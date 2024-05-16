import { useToggle } from '@/shared/hooks';
import { Icon } from '@/shared/ui';

import { KebabMenu } from './KebabMenu';

export const FeedKebabButton: React.FC<{ feedId: number }> = ({ feedId }) => {
  const [isVisibilityKebabMenu, toggleVisibility] = useToggle(false);

  return (
    <>
      <button className='icon kebab-icon-btn' onClick={toggleVisibility}>
        <Icon name='kebab-menu' width='20' height='20' />
      </button>
      {isVisibilityKebabMenu && (
        <KebabMenu feedId={feedId} onClose={toggleVisibility} />
      )}
    </>
  );
};
