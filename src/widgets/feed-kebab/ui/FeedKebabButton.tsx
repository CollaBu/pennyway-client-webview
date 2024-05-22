import { Icon } from '@/shared/ui';

import { useFeedKebabStore, onClickFeedKebab } from '../store';

import { KebabMenu } from './KebabMenu';

export const FeedKebabButton: React.FC<{ feedId: number }> = ({ feedId }) => {
  const { openedFeedId, isOpen, close } = useFeedKebabStore();

  return (
    <>
      <button
        className='icon kebab-icon-btn'
        onClick={() => onClickFeedKebab(feedId)}
      >
        <Icon name='kebab-menu' width='20' height='20' />
      </button>
      {openedFeedId === feedId && isOpen && (
        <KebabMenu feedId={feedId} onClose={() => close()} />
      )}
    </>
  );
};
