import { FeedMainHeader, FeedMainList } from '@/widgets';

import './FeedMainPage.scss';

export const FeedMainPage = () => {
  return (
    <main className='feed-main'>
      <FeedMainHeader />
      <FeedMainList />
    </main>
  );
};
