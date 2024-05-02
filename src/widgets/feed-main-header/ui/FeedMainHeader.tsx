import { Link } from 'react-router-dom';

import { Icon } from '@/shared/ui';

import './FeedMainHeader.scss';

export const FeedMainHeader = () => {
  return (
    <header id='feed-main-header'>
      <div className='header-left'>
        <Icon name='pennyway-logo' width='99' height='17.32' />
      </div>
      <nav className='header-right'>
        <Link to='search' className='icon icon-link'>
          <Icon name='search' width='24' height='24' />
        </Link>
        <Link to='writing' className='icon icon-link'>
          <Icon name='writing' width='24' height='24' />
        </Link>
        <Link to='notification' className='icon icon-link'>
          <Icon name='notification' width='24' height='24' />
        </Link>
      </nav>
    </header>
  );
};
