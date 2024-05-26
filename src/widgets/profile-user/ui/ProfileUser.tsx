import { Icon, NetworkError, PageHeader } from '@/shared/ui';

import { useGetUser } from '../api';
import ProfileChangeIcon from '../assets/profile-change-icon.svg?react';

import { ProfileCount } from './ProfileCount';
import './ProfileUser.scss';

interface ProfileUserProps {
  userId: number;
  isOwner: boolean;
}

export const ProfileUser = ({ userId, isOwner }: ProfileUserProps) => {
  const { data, isLoading, isError, refetchUser } = useGetUser(userId);

  if (isLoading) {
    return <div>스켈레톤 들어갈곳</div>;
  }

  if (isError || !data) {
    return <NetworkError refetch={refetchUser} />;
  }

  const { profileImage, name, feedCount, followerCount, followingCount } =
    data.data.user;

  return (
    <>
      <PageHeader page={name} prevPageLink='/' />
      <section className='profile-user-wrapper'>
        <section className='profile-top-container'>
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
          <h3 className='user-name h3semi'>{name}</h3>
          {isOwner ? (
            <button className='nickname-change-btn b2md'>닉네임 수정</button>
          ) : (
            <button className='user-follow-btn b2md'>팔로우</button>
          )}
        </section>
        <section className='profile-count-container'>
          <ProfileCount number={feedCount} text='게시물' />
          <div className='count-divider' />
          <ProfileCount number={followerCount} text='팔로워' />
          <div className='count-divider' />
          <ProfileCount number={followingCount} text='팔로잉' />
        </section>
      </section>
    </>
  );
};
