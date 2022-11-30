import { AxiosRequestConfig } from 'axios';
declare module 'axios' {
  export interface TesResponse<T> {
    result: {
      code: number;
      msg?: string;
    };
    data?: T;
  }

  export interface AxiosInstance {
    post<T = any, R = TesResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
  }
}
