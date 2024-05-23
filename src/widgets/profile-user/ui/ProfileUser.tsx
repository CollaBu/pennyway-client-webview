import { Icon } from '@/shared/ui';

import './ProfileUser.scss';
import { ProfileCount } from './ProfileCount';

export const ProfileUser = () => {
  const profileImage = 'https://avatars.githubusercontent.com/u/101088491?v=4';

  return (
    <section className='profile-user-wrapper'>
      <section className='profile-top-container'>
        <div className='profile-image-box'>
          {profileImage ? (
            <img
              className='profile-image'
              src={profileImage}
              alt={`붕어빵 profile image`}
            />
          ) : (
            <div className='no-proile-background'>
              <Icon name='no-profile' width='81' height='81' />
            </div>
          )}
          <button className='profile-change-btn'>
            <Icon name='profile-change' height='24' width='24' />
          </button>
        </div>
        <h3 className='user-name h3semi'>붕어빵</h3>
        <button className='user-follow-btn b2md'>닉네임 수정</button>
      </section>
      <section className='profile-count-container'>
        <ProfileCount number={17} text='게시물' />
        <div className='count-divider' />
        <ProfileCount number={20} text='팔로워' />
        <div className='count-divider' />
        <ProfileCount number={20} text='팔로잉' />
      </section>
    </section>
  );
};
