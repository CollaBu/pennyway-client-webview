import { FeedsQueryData } from '@/shared/consts';

export function updateBookmarkStatusInFeeds(
  previousQueryData: FeedsQueryData,
  feedId: number,
) {
  const { pages: previousPages } = previousQueryData;

  return {
    ...previousQueryData,
    pages: previousPages.map((pageData) => {
      const { data } = pageData;
      const updateFeeds = data.feeds.map((feed) =>
        feed.id === feedId
          ? {
              ...feed,
              isBookmarked: !feed.isBookmarked,
            }
          : feed,
      );
      const updatedData = { ...data, feeds: updateFeeds };

      return { ...pageData, data: updatedData };
    }),
  };
}
