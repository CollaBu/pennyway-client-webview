import { HttpResponse, http } from 'msw';
import { vi, describe, expect, it } from 'vitest';

import { server } from '@/setupTest';
import { render, screen } from '@/shared/tests';

import { FeedMainList } from '..';

const mockingFeedData = [
  {
    id: 1,
    user: { id: 1, profileImage: '', name: '강병준' },
    content: 'Feed Content 1',
    images: [],

    likeCount: 0,
    commentCount: 0,

    isLiked: false,
    isBookmark: false,

    createdAt: '2024-04-16 12:00:00',
    updatedAt: '2024-04-16 12:00:00',
  },
];

describe('피드 메인 페이지에서', () => {
  it('스켈레톤 UI가 화면에 먼저 렌더링된다.', async () => {
    // given
    render(<FeedMainList />);
    const skeletonFeedMainList = document.querySelector(
      '.skeleton-feed-section',
    );

    // then
    expect(skeletonFeedMainList).toBeInTheDocument();
  });

  it('스켈레톤 UI 이후 콘텐츠가 정상적으로 렌더링된다.', async () => {
    // given
    // IntersectionObserver를 mock으로 대체
    const IntersectionObserverMock = vi.fn(() => ({
      disconnect: vi.fn(),
      observe: vi.fn(),
      takeRecords: vi.fn(),
      unobserve: vi.fn(),
    }));

    // IntersectionObserver 글로벌 객체에 추가
    vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);

    server.use(
      http.get('/feeds', async () => {
        return HttpResponse.json(
          {
            code: '2000',
            data: {
              feeds: mockingFeedData,
              currentPageNumber: 1,
              pageSize: 1,
              numberOfElements: 1,
              hasNextPage: false,
            },
          },
          { status: 200 },
        );
      }),
    );
    render(<FeedMainList />);

    const content = await screen.findByText(mockingFeedData[0].content);

    // then
    expect(content).toBeInTheDocument();
    vi.unstubAllGlobals(); // IntersectionObserver 복원
  });
});
