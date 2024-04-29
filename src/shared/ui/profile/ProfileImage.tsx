import { ProfileImageProps } from './types';
import './Profile.scss';

export const ProfileImage = ({ profileImage }: ProfileImageProps) => {
  return <img src={profileImage} className='profile-image' />;
};
