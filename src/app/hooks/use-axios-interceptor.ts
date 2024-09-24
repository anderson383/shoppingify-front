
import {
  useLayoutEffect, useMemo
} from 'react';
import { axiosInstance } from '../core/config/axiosConfig';

const useAxiosInterceptor = () => {
  const interceptors = useMemo(
    () => ({
      error: async (error: any) => {
        if (error.response.status === 401) {
        }

        return Promise.reject(error);
      },
      request: async (config: any) => {
        const token:any = localStorage.getItem('token')
        if (token) {
          config.headers.Authorization = `Bearer ${ token }`;
        }

        return config;
      },
      response: (response: any) => {
        return response;
      }
    }),
    []
  );

  useLayoutEffect(() => {
    const reqInterceptor = axiosInstance.interceptors.request.use(interceptors.request, interceptors.error);
    const resInterceptor = axiosInstance.interceptors.response.use(interceptors.response, interceptors.error);

    return () => {
      axiosInstance.interceptors.request.eject(reqInterceptor);
      axiosInstance.interceptors.response.eject(resInterceptor);
    };
  }, []);
};

export default useAxiosInterceptor;
