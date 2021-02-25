import { Nullable } from '../../types';

/*
  Type describes the result of request (see below) function,
 */
export type RequestResponse = Promise<Record<string, unknown> | Record<string, unknown>[] | string>;

/*
  Type describes error that would be thrown in case of non-2xx statuses.
 */
export type RequestError = {
  status: number,
  message: string
};

/*
  Type describes the function that wraps FetchAPI logic.
  Signature similar to fetch, but return value is promise that would be resolved to string or json.
  Throws errors in case of non 2xx response statuses with { status, message } signature.
    message probably(may be not unified behaviour in yandex API service) would be always { reason: string }.
 */
export type RequestHandler = (url: string, options: RequestInit) => RequestResponse;

/*
  Type describes data, that can be passed with a request.
 */
export type RequestData = Nullable<Record<string, unknown> | FormData>;
