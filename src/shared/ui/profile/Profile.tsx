import { Link } from 'react-router-dom';

import { Icon } from '..';
import './Profile.scss';

interface ProfileProps {
  profileImage: string;
  name: string;
  content: string;
}

/**
 * @todo 임시로 구현된 Link, 추후 적절한 user로 이동하도록 수정
 */

export const Profile = ({ profileImage, name, content }: ProfileProps) => {
  return (
    <div className='profile'>
      <Link to={'/user'}>
        {profileImage ? (
          <img
            className='profile-image'
            src={profileImage}
            alt={`${name} profile image`}
          />
        ) : (
          <div className='no-proile-background'>
            <Icon name='no-profile' width='32' height='32' />
          </div>
        )}
      </Link>
      <div className='name-section'>
        <h5 className='name b1semi'>{name}</h5>
        <p className='content b3md'>{content}</p>
      </div>
    </div>
  );
};
