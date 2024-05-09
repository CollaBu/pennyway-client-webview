import { FetchFeeds } from '@/shared/consts';

export interface FeedsQueryData {
  queryParams: number[];
  pages: FetchFeeds[];
}
