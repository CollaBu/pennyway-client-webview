import { ProfileHeader } from '@/features/profile-header';
import { ProfileFeedList } from '@/widgets/profile-feed-list';
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
