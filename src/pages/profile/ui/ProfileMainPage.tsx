import { useParams } from 'react-router-dom';

import { ProfileFeedList } from '@/widgets/profile-feed-list';
import { ProfileUser } from '@/widgets/profile-user';

/**
 * @todo  userPK값 가져와서 본인인지 판별하도록 수정
 */

export const ProfileMainPage = () => {
  const { userId } = useParams<{ userId: string }>();
  const formattedUserId = Number(userId);

  const owner = formattedUserId === 1 ? true : false;

  return (
    <main>
      <ProfileUser userId={formattedUserId} isOwner={owner} />
      <ProfileFeedList />
    </main>
  );
};
