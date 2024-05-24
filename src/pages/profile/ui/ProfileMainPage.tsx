import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ProfileFeedList } from '@/widgets/profile-feed-list';
import { ProfileUser } from '@/widgets/profile-user';

/**
 * @todo  userPK값 가져와서 본인인지 판별하도록 수정
 */

export const ProfileMainPage = () => {
  const { userId } = useParams<{ userId: string }>();
  const formattedUserId = Number(userId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (formattedUserId === 1) {
    return (
      <main>
        <ProfileUser userId={formattedUserId} isOwner />
        <ProfileFeedList />
      </main>
    );
  }

  return (
    <main>
      <ProfileUser userId={formattedUserId} isOwner={false} />
      <ProfileFeedList />
    </main>
  );
};
