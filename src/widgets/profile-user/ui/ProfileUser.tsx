import { NetworkError, PageHeader } from '@/shared/ui';

import { useGetUser } from '../api';

import { ProfileCount } from './ProfileCount';
import './ProfileUser.scss';
import { ProfileUserImage } from './ProfileUserImage';
import { SkeletonProfileUser } from './SkeletonProfileUser';

interface ProfileUserProps {
  userId: number;
  isOwner: boolean;
}

export const ProfileUser = ({ userId, isOwner }: ProfileUserProps) => {
  const { data, isLoading, isError, refetchUser } = useGetUser(userId);

  if (isLoading) {
    return (
      <>
        <PageHeader page='' prevPageLink='/' />
        <SkeletonProfileUser />
      </>
    );
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
          <ProfileUserImage
            profileImage={profileImage}
            name={name}
            isOwner={isOwner}
          />
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
