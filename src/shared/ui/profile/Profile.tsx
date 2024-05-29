import { Link } from 'react-router-dom';

import ProfileImage from './ProfileImage';
import './Profile.scss';

interface ProfileProps {
  profileImage: string;
  name: string;
  content: string;
  userId: number;
  isLink: boolean;
}

export const Profile = ({
  profileImage,
  name,
  content,
  userId,
  isLink,
}: ProfileProps) => {
  return (
    <div className='profile'>
      {isLink ? (
        <Link to={`/users/${userId}`}>
          <ProfileImage profileImage={profileImage} name={name} />
        </Link>
      ) : (
        <ProfileImage profileImage={profileImage} name={name} />
      )}
      <div className='name-section'>
        <h5 className='name b1semi'>{name}</h5>
        <p className='content b3md'>{content}</p>
      </div>
    </div>
  );
};
