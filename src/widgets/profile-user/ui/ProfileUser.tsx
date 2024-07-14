import { NetworkError, PageHeader } from '@/shared/ui';
import { formatCount } from '@/shared/utils';

import { useGetUser, useGetRelationshipStatus } from '../api';

import { ProfileCount } from './ProfileCount';
import './ProfileUser.scss';
import { ProfileFollowButton } from './ProfileFollowButton';
import { ProfileUserImage } from './ProfileUserImage';
import { SkeletonProfileButton } from './SkeletonProfileButton';
import { SkeletonProfileUser } from './SkeletonProfileUser';

interface ProfileUserProps {
  userId: number;
  isOwner: boolean;
}

export const ProfileUser = ({ userId, isOwner }: ProfileUserProps) => {
  const { data, isLoading, isError, refetchUser } = useGetUser(userId);
  const {
    relationshipStatusData,
    relationshipLoading,
    relationshipError,
    refetchRelationshipStatus,
  } = useGetRelationshipStatus(userId);

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
  if (relationshipError) {
    return <NetworkError refetch={refetchRelationshipStatus} />;
  }

  const {
    profileImage,
    name,
    username,
    locked,
    feedCount,
    followerCount,
    followingCount,
  } = data.data.user;

  const relationshipStatus = relationshipStatusData?.data.relationshipStatus;

  return (
    <>
      <PageHeader page={name} prevPageLink='/' />
      <section className='profile-user-wrapper'>
        <section className='profile-top-container'>
          <ProfileUserImage
            profileImage={profileImage}
            name={username}
            isOwner={isOwner}
          />
          <h3 className='user-name h3semi'>{username}</h3>
          {relationshipLoading ? (
            <SkeletonProfileButton />
          ) : relationshipStatus === 'self' ? (
            <button className='nickname-change-btn b2md'>닉네임 수정</button>
          ) : (
            <ProfileFollowButton
              userId={userId}
              locked={locked}
              relationshipStatus={relationshipStatus}
            />
          )}
        </section>
        <section className='profile-count-container'>
          <ProfileCount number={formatCount(feedCount)} text='게시물' />
          <div className='count-divider' />
          <ProfileCount number={formatCount(followerCount)} text='팔로워' />
          <div className='count-divider' />
          <ProfileCount number={formatCount(followingCount)} text='팔로잉' />
        </section>
      </section>
    </>
  );
};
