import { HttpResponse, delay } from 'msw';

import { errorMessage } from '../consts/error';

export async function createHttpSuccessResponse<T>(data: T) {
  await delay();

  return HttpResponse.json(
    {
      code: '2000',
      data,
    },
    { status: 200 },
  );
}

export async function createHttpErrorResponse(code: keyof typeof errorMessage) {
  await delay();

  return HttpResponse.json(
    {
      code,
      message: errorMessage[code],
    },
    { status: 200 },
  );
}
