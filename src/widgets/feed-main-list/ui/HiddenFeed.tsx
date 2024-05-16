import React from 'react';

import { Icon } from '@/shared/ui';
import './HiddenFeed.scss';

const HiddenFeed: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className='feed-hidden-wrapper'>
      <div className='feed-hidden-container'>
        <Icon name='check_mint' width='24' height='24' />
        <p className='hidden-reason-msg b2md'>{message}</p>
        <button className='hidden-cancel-btn b2md'>취소</button>
      </div>
    </div>
  );
};

export default HiddenFeed;
