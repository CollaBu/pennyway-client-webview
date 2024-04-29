import './Profile.scss';
import { ProfileImage } from './ProfileImage';
import { ProfileImageProps } from './types';

interface ProfileProps extends ProfileImageProps {
  name: string;
  content: string;
}

export const Profile = ({ profileImage, name, content }: ProfileProps) => {
  const profileImg = profileImage === '' ? 'defalut-img' : profileImage;

  return (
    <div className='profile'>
      <ProfileImage profileImage={profileImg} />
      <div className='name-section'>
        <h5 className='name b1semi'>{name}</h5>
        <p className='content b3md'>{content}</p>
      </div>
    </div>
  );
};
