import { Icon } from '@/shared/ui';

import './HiddenFeed.scss';
import { useHideCancel } from '../api';

interface HiddenFeedProps {
  feedId: number;
  message: string;
}

export const HiddenFeed: React.FC<HiddenFeedProps> = ({ feedId, message }) => {
  const { hideCancelFeed, isPending } = useHideCancel(feedId);

  return (
    <div className='feed-hidden-wrapper'>
      <div className='feed-hidden-container'>
        <Icon name='check_mint' width='24' height='24' />
        <p className='hidden-reason-msg b2md'>{message}</p>
        <button
          className='hidden-cancel-btn b2md'
          onClick={() => hideCancelFeed()}
          disabled={isPending}
        >
          취소
        </button>
      </div>
    </div>
  );
};
