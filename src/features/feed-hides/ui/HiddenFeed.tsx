import { HiddenType, getHiddenMessageByType } from '@/entitites/feed';
import { Icon } from '@/shared/ui';

import './HiddenFeed.scss';
import { useHideCancel } from '../api';

interface HiddenFeedProps {
  feedId: number;
  type: HiddenType;
}

export const HiddenFeed: React.FC<HiddenFeedProps> = ({ feedId, type }) => {
  const { hideCancelFeed, isPending } = useHideCancel(feedId);
  const { reasonMsg, cancleMsg } = getHiddenMessageByType(type);

  return (
    <div className='feed-hidden-wrapper'>
      <div className='feed-hidden-container'>
        <div className='feed-hidden-checkmark'>
          <div className='cover' />
          <Icon name='check_mint' width='12' height='9' />
        </div>
        <p className='hidden-reason-msg b2md'>{reasonMsg}</p>
        <button
          className='hidden-cancel-btn b2md'
          onClick={() => hideCancelFeed()}
          disabled={isPending}
        >
          {cancleMsg}
        </button>
      </div>
    </div>
  );
};
