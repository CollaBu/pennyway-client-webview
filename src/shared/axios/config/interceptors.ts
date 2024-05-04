import {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
  isAxiosError,
} from 'axios';

import {
  logApiErrorOnDev,
  logApiRequestOnDev,
  logApiResponseOnDev,
} from '../dir/log';

export function onRequest(
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig {
  logApiRequestOnDev(config);

  return config;
}

export async function onResponse(
  response: AxiosResponse,
): Promise<AxiosResponse> {
  logApiResponseOnDev(response);

  return response;
}

export async function onError(error: AxiosError | Error) {
  if (isAxiosError(error)) {
    logApiErrorOnDev(error);
  }

  return Promise.reject(error);
}
