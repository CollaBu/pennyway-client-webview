import { cancleHiddenFeed } from '@/entitites/feed';
import { Icon } from '@/shared/ui';

import './HiddenFeed.scss';

interface HiddenFeedProps {
  feedId: number;
  message: string;
}

const HiddenFeed: React.FC<HiddenFeedProps> = ({ feedId, message }) => {
  return (
    <div className='feed-hidden-wrapper'>
      <div className='feed-hidden-container'>
        <Icon name='check_mint' width='24' height='24' />
        <p className='hidden-reason-msg b2md'>{message}</p>
        <button
          className='hidden-cancel-btn b2md'
          onClick={() => cancleHiddenFeed(feedId)}
        >
          취소
        </button>
      </div>
    </div>
  );
};

export default HiddenFeed;
