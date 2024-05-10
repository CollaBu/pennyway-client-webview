import { HttpResponse, delay } from 'msw';

import { errorMessage } from '../consts/error';

/** 0 <= 응답 시간 <= 4초 */
const delayTime = Math.random() * 4001;

export async function createHttpSuccessResponse<T>(data: T) {
  await delay(delayTime);

  return HttpResponse.json(
    {
      code: '2000',
      data,
    },
    { status: 200 },
  );
}

export async function createHttpErrorResponse(code: keyof typeof errorMessage) {
  await delay(delayTime);

  return HttpResponse.json(
    {
      code,
      message: errorMessage[code],
    },
    { status: 200 },
  );
}
