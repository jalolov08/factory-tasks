import { api } from '@api/api';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

interface UseRequest {
  get: <T>(url: string) => Promise<AxiosResponse<T>>;
  post: <T>(
    url: string,
    payload: any,
    headers?: AxiosRequestConfig['headers'],
  ) => Promise<AxiosResponse<T>>;
  patch: <T>(url: string, payload: any) => Promise<AxiosResponse<T>>;
  put: <T>(url: string, payload: any) => Promise<AxiosResponse<T>>;
  remove: <T>(url: string) => Promise<AxiosResponse<T>>;
}
export const useRequest = (): UseRequest => {
  const get = async <T>(url: string, params?: Record<string, any>): Promise<AxiosResponse<T>> => {
    return api.get(url, { params });
  };

  const post = <T>(
    url: string,
    payload: any,
    headers?: AxiosRequestConfig['headers'],
  ): Promise<AxiosResponse<T>> => {
    return api.post(url, payload, { headers });
  };

  const patch = <T>(url: string, payload: any): Promise<AxiosResponse<T>> => {
    return api.patch(url, payload);
  };

  const put = <T>(url: string, payload: FormData): Promise<AxiosResponse<T>> => {
    return api.put(url, payload);
  };

  const remove = <T>(url: string): Promise<AxiosResponse<T>> => {
    return api.delete(url);
  };

  return { get, post, patch, put, remove };
};
