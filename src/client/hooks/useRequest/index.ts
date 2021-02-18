/**
 * @fileoverview
 *
 * Основной файл для работы с запросами.
 * Выкидывает наружу 4 основных реквест метода get, post, put, delete.
 * Выкидывает базовый wrapper-method над FetchAPI, который первые четыре используют.
 *   В теории не должно случится ситуации когда его потребуется использовать, за исключением необходимсти
 *   переопределения отправляемых дефолтных опций (см DEFAULT_PROPS).
 *
 * Как правильно использовать:
 * const { request, get, post, put, delete } = useRequest(BASE_API_SERVER_URL)
 * get('/qwer', data, options)
 *  .then((r: RequestResponse) => console.log(r))
 *  .catch((e: Error) => {
 *    const error = JSON.parse(e.message) as RequestError;
      window.console.log(error.status, error.message);
 *  })
 *
 * Как видно - на основе этого хука можно писать другие хуки более специфичные с точки зрения роутинга
 *   одна из таких реализаций - useAuthApi
 */

import { useCallback } from 'react';
import { RequestData, RequestHandler, RequestResponse } from './types';

const DEFAULT_OPTS: RequestInit = {
  credentials: 'include',
  headers: {
    'content-type': 'application/json',
  },
};

/*
  Fabric that creates request functions depending on method, because signature are the same.
 */
function createRequester(
  request: RequestHandler,
  method: string,
  url: string,
  data: RequestData,
  options: RequestInit,
): RequestResponse {
  if (data) {
    options.body = data instanceof FormData ? data : JSON.stringify(data);
  }
  return request(url, { method, ...options });
}

/**
 * Hook that allows to use requests.
 * @param {string} baseURL - Base URL for api server.
 */
export default function useRequest(baseURL: string) {
  const request = useCallback(async (url: string, options: RequestInit) => {
    const response = await fetch(`${baseURL}${url}`, { ...DEFAULT_OPTS, ...options });
    /*
      We are using .text() here, because .json() is just JSON.parse over .text()
        and since yandex api service not unified (some times returns string, sometimes - json)
        we are doing this kind of trick
     */
    const text = await response.text();
    let data;
    try {
      // If we get string here (something like "OK") JSON.parse will throw an error
      data = JSON.parse(text) as Record<string, unknown>;
    } catch (e) {
      data = text;
    }

    if (!response.ok) {
      /*
        Another trick to pass all things we need - status and message in a serialized object, because
        we need to throw an error in non-2xx cases, and it should be a string.
       */
      const errorString = JSON.stringify({
        status: response.status,
        message: data,
      });
      throw new Error(errorString);
    }

    return data;
  }, [baseURL]);

  const get = useCallback(
    (
      url: string,
      data: RequestData = null,
      options: RequestInit = {},
    ) => createRequester(request, 'GET', url, data, options),
    [request],
  );

  const post = useCallback(
    (
      url: string,
      data: RequestData = null,
      options: RequestInit = {},
    ) => createRequester(request, 'POST', url, data, options),
    [request],
  );

  const put = useCallback(
    (
      url: string,
      data: RequestData = null,
      options: RequestInit = {},
    ) => createRequester(request, 'PUT', url, data, options),
    [request],
  );

  const del = useCallback(
    (
      url: string,
      data: RequestData = null,
      options: RequestInit = {},
    ) => createRequester(request, 'DELETE', url, data, options),
    [request],
  );

  return { request, get, post, put, del };
}
