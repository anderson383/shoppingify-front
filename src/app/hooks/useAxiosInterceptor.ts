import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import {axiosInstance} from '../core/config/axiosConfig';

export const useAxiosInterceptor = () => {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(0);
  const inc = useCallback(() => setCounter((counterInt) => counterInt + 1), [setCounter]);
  const dec = useCallback(() => setCounter((counterInt) => counterInt - 1), [setCounter]);

  const interceptors = useMemo(
    () => ({
      request: (config:any) => {
        const { url } = config;
        inc();

        return config;
      },
      response: (response:any) => {
        const { url } = response.config;
          dec();
        return response;
      },
      error: (error:any) => {
        const { url } = error.config;
          dec();

        return Promise.reject(error);
      },
    }),
    [inc, dec]
  );

  useEffect(() => {
    const reqInterceptor = axiosInstance.interceptors.request.use(interceptors.request, interceptors.error);
    const resInterceptor = axiosInstance.interceptors.response.use(interceptors.response, interceptors.error);



    return () => {
      axiosInstance.interceptors.request.eject(reqInterceptor);
      axiosInstance.interceptors.response.eject(resInterceptor);
    };
  }, [interceptors]);

  return [counter > 0, inc, dec];
};

