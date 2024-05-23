import { ProfileFeedList } from '@/widgets/profile-feed-list';
import { ProfileHeader } from '@/widgets/profile-header';
import { ProfileUser } from '@/widgets/profile-user';

export const ProfileMainPage = () => {
  return (
    <main>
      <ProfileHeader name='2weeksone' />
      <ProfileUser />
      <ProfileFeedList />
    </main>
  );
};
