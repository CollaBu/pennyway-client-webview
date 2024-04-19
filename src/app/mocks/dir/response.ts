import { HttpResponse } from 'msw';

import { errorMessage } from '../consts/error';

export function createHttpSuccessResponse<T>(data: T) {
  return HttpResponse.json(
    {
      code: '2000',
      data,
    },
    { status: 200 },
  );
}

export function createHttpErrorResponse(code: keyof typeof errorMessage) {
  return HttpResponse.json(
    {
      code,
      message: errorMessage[code],
    },
    { status: 200 },
  );
}
