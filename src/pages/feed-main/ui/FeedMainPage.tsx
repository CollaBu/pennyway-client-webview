import { useEffect } from 'react';

import { useFeedKebabStore } from '@/widgets/feed-kebab';
import { FeedMainHeader } from '@/widgets/feed-main-header';
import { FeedMainList } from '@/widgets/feed-main-list';
import './FeedMainPage.scss';

export const FeedMainPage = () => {
  useEffect(() => {
    return () => {
      useFeedKebabStore.getState().closeKebab();
    };
  }, []);

  return (
    <main className='feed-main-page'>
      <FeedMainHeader />
      <FeedMainList />
    </main>
  );
};
