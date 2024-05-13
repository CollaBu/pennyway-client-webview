import { Icon } from '@/shared/ui';

import { useVisibilityKebabMenu } from '../model';

import { KebabMenu } from './KebabMenu';

export const FeedKebabButton = () => {
  const { isVisibilityKebabMenu, toggleVisibility } = useVisibilityKebabMenu();

  return (
    <>
      <button className='icon kebab-icon-btn' onClick={toggleVisibility}>
        <Icon name='kebab-menu' width='20' height='20' />
      </button>
      {isVisibilityKebabMenu && <KebabMenu />}
    </>
  );
};
