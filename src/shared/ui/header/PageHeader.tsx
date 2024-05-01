import { Link } from 'react-router-dom';

import { Icon } from '..';

import './PageHeader.scss';

interface PageHeaderProps {
  prevPageLink: string;
  page: string;
}

export const PageHeader = ({ prevPageLink, page }: PageHeaderProps) => {
  return (
    <div className='page-header'>
      <Link to={prevPageLink}>
        <Icon name='back' width='44' height='44' />
      </Link>
      <p className='page'>{page}</p>
    </div>
  );
};
