import { Link } from 'react-router-dom';

import BackIcon from '@/shared/ui/icon/assets/back_icon.svg?react';
import './PageHeader.scss';

interface PageHeaderProps {
  prevPageLink: string;
  page: string;
}

export const PageHeader = ({ prevPageLink, page }: PageHeaderProps) => {
  return (
    <div className='page-header'>
      <Link to={prevPageLink}>
        <BackIcon />
      </Link>
      <p className='page'>{page}</p>
    </div>
  );
};
