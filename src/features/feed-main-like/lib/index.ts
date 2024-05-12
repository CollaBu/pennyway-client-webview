import { FeedsQueryData } from '@/shared/consts';

export function updateLikeStatusInFeeds(
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
              likeCount: feed.isLiked ? feed.likeCount - 1 : feed.likeCount + 1,
              isLiked: !feed.isLiked,
            }
          : feed,
      );
      const updatedData = { ...data, feeds: updateFeeds };

      return { ...pageData, data: updatedData };
    }),
  };
}
