import { Link } from 'react-router-dom';

import BackIcon from '@/shared/icon/back-icon.svg?react';
import './PageHeader.scss';

interface PageHeaderProps {
  prevPageLink: string;
  page: string;
}

export default function PageHeader({ prevPageLink, page }: PageHeaderProps) {
  return (
    <div className='pageHeader'>
      <Link to={prevPageLink}>
        <BackIcon />
      </Link>
      <p className='page'>{page}</p>
    </div>
  );
}
