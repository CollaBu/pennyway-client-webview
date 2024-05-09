import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render as testRender } from '@testing-library/react';
import { PropsWithChildren, ReactElement } from 'react';
import { MemoryRouter } from 'react-router-dom';

const generateQueryClient = () => {
  const queryClientOptions = {
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  };

  return new QueryClient(queryClientOptions);
};

// hooks를 사용하는 컴포넌트를 테스트할 때 필요한 wrapper를 생성하는 함수
// from https://tkdodo.eu/blog/testing-react-query#for-custom-hooks
export const createQueryClientWrapper = () => {
  const queryClient = generateQueryClient();
  return ({ children }: PropsWithChildren) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

// custom render 함수
// reference: https://testing-library.com/docs/react-testing-library/setup#custom-render
const customRender = (children: ReactElement, baseEntries?: string[]) => {
  const queryClient = generateQueryClient();

  return testRender(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={baseEntries}>{children}</MemoryRouter>
    </QueryClientProvider>,
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
export { customRender as render };
