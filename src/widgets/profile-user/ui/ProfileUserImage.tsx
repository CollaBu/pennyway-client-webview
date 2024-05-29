import { Icon } from '@/shared/ui';

import ProfileChangeIcon from '../assets/profile-change-icon.svg?react';
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
          <Icon name='no-profile' width='81' height='81' />
        </div>
      )}
      {isOwner && (
        <button className='profile-change-btn'>
          <ProfileChangeIcon />
        </button>
      )}
    </div>
  );
};
