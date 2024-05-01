import { Link } from 'react-router-dom';

import NotificationIcon from '@/shared/ui/icon/assets/notification_icon.svg?react';
import PennywayLogo from '@/shared/ui/icon/assets/pennyway_logo_icon.svg?react';
import SearchIcon from '@/shared/ui/icon/assets/search_icon.svg?react';
import WritingIcon from '@/shared/ui/icon/assets/writing_icon.svg?react';

import './FeedMainHeader.scss';

export const FeedMainHeader = () => {
  return (
    <header id='feed-main-header'>
      <div className='header-left'>
        <PennywayLogo />
      </div>
      <nav className='header-right'>
        <Link to='search' className='icon-link'>
          <SearchIcon />
        </Link>
        <Link to='writing' className='icon-link'>
          <WritingIcon />
        </Link>
        <Link to='notification' className='icon-link'>
          <NotificationIcon />
        </Link>
      </nav>
    </header>
  );
};
