import { useParams } from 'react-router-dom';

import { ProfileUser } from '@/widgets/profile-user';

/**
 * @todo userPK값 가져와서 판별하도록 구현
 * @todo ProfileFeed Api 구현 후, ProfileFeedList 컴포넌트 연결
 */

export const ProfileMainPage = () => {
  const { userId } = useParams<{ userId: string }>();
  const formattedUserId = Number(userId);

  const owner = formattedUserId === 1 ? true : false;

  return (
    <main>
      <ProfileUser userId={formattedUserId} isOwner={owner} />
    </main>
  );
};
