import { FeedMainHeader } from '@/widgets/feed-main-header';
import { FeedMainList } from '@/widgets/feed-main-list';
import './FeedMainPage.scss';

export const FeedMainPage = () => {
  return (
    <main className='feed-main-page'>
      <FeedMainHeader />
      <FeedMainList />
    </main>
  );
};
