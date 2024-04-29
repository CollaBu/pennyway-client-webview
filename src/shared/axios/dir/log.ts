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

    const title = `${method?.toUpperCase()} ${url}`;

    console.group(`🛫 [API 요청] ${title}`);
    console.log(`현재 시간: ${getCurrentDate()}`);
    console.log(`요청 데이터: ${JSON.stringify(data, null, 2) || 'X'}`);
    console.groupEnd();
  }
}

export function logApiResponseOnDev(response: AxiosResponse) {
  if (import.meta.env.DEV) {
    const { status, statusText, config } = response;
    const { method, url } = config;
    const { code, data } = response.data;

    const title = `${method?.toUpperCase()} ${url}`;
    const httpStatus = `${status} ${statusText}`;

    console.group(`🛬 [API 응답] ${title}`);
    console.log(`현재 시간: ${getCurrentDate()}`);
    console.log(`HTTP 응답 코드: ${httpStatus}`);
    console.log(`서버 응답 코드: ${code}`);
    console.log(`서버 응답 데이터: ${JSON.stringify(data, null, 2)}`);
    console.groupEnd();
  }
}

export function logApiErrorOnDev(error: AxiosError) {
  if (import.meta.env.DEV) {
    const { code } = error;
    const { method, url } = error.config as AxiosRequestConfig;

    const title = `${method?.toUpperCase()} ${url}`;

    console.group(`🚨 [API 에러] ${title}`);
    console.log(`현재 시간: ${getCurrentDate()}`);
    console.log(`에러 코드: ${code}`);
    console.log(`에러명: ${error.message}`);
    console.groupEnd();
  }
}
