import { ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render as testRender } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

function customRender(children: ReactElement, baseEntries?: string[]) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return testRender(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={baseEntries}>{children}</MemoryRouter>
    </QueryClientProvider>,
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
export { customRender as render };
