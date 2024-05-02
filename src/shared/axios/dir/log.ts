/* eslint-disable no-console */

import {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

import { getCurrentDate } from '@/shared/utils';

export function logApiRequestOnDev(config: InternalAxiosRequestConfig) {
  if (import.meta.env.DEV) {
    const { method, url, data } = config;

    console.groupCollapsed(`🛫 [API 요청] ${method?.toUpperCase()} ${url}`);
    console.log(`현재 시각: ${getCurrentDate()}`);
    console.log(`요청 데이터: ${JSON.stringify(data, null, 2) || 'X'}`);
    console.groupEnd();
  }
}

export function logApiResponseOnDev(response: AxiosResponse) {
  if (import.meta.env.DEV) {
    const { status, statusText, config } = response;
    const { method, url } = config;
    const { code, data } = response.data;

    console.groupCollapsed(`🛬 [API 응답] ${method?.toUpperCase()} ${url}`);
    console.log(`현재 시각: ${getCurrentDate()}`);
    console.log(`HTTP 응답 코드: ${status} ${statusText}`);
    console.log(`서버 응답 코드: ${code}`);
    console.log(`서버 응답 데이터: ${JSON.stringify(data, null, 2)}`);
    console.groupEnd();
  }
}

export function logApiErrorOnDev(error: AxiosError) {
  if (import.meta.env.DEV) {
    const { code } = error;
    const { method, url } = error.config as AxiosRequestConfig;

    console.groupCollapsed(`🚨 [API 에러] ${method?.toUpperCase()} ${url}`);
    console.log(`현재 시각: ${getCurrentDate()}`);
    console.log(`에러 코드: ${code}`);
    console.log(`에러명: ${error.message}`);
    console.groupEnd();
  }
}
