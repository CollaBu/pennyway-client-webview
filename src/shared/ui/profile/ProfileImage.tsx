import { Icon } from '..';
import './ProfileImage.scss';

interface ProfileImageProps {
  profileImage: string;
  name: string;
}

const ProfileImage = ({ profileImage, name }: ProfileImageProps) => {
  return profileImage ? (
    <img
      className='profile-image'
      src={profileImage}
      alt={`${name} profile image`}
    />
  ) : (
    <div className='no-proile-background'>
      <Icon name='no-profile' width='32' height='32' />
    </div>
  );
};
export default ProfileImage;
