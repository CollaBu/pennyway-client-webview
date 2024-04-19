import { HttpResponse } from 'msw';

import { errorMessage } from '../consts/error';

export function createHttpErrorResponse(code: keyof typeof errorMessage) {
  return HttpResponse.json(
    {
      code,
      message: errorMessage[code],
    },
    { status: 200 },
  );
}
