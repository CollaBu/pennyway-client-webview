import { Icon } from '@/shared/ui';

import NoProfileIcon from '../assets/no-profile-icon.svg?react';
import './ProfileUserImage.scss';

interface ProfileUserImageProps {
  profileImage: string;
  name: string;
  isOwner: boolean;
}

export const ProfileUserImage = ({
  profileImage,
  name,
  isOwner,
}: ProfileUserImageProps) => {
  return (
    <div className='profile-image-box'>
      {profileImage ? (
        <img
          className='profile-image'
          src={profileImage}
          alt={`${name} profile image`}
        />
      ) : (
        <div className='no-proile-background'>
          <NoProfileIcon />
        </div>
      )}
      {isOwner && (
        <button className='profile-change-btn'>
          <Icon name='profile-change' width='24' height='24' />
        </button>
      )}
    </div>
  );
};
