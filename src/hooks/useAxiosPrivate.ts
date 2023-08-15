import useUpdateAccessToken from "./useUpdateAccessToken";
import {useEffect, useRef} from "react";
import {axiosPrivate} from "../api/axios";
import {useAppDispatch, useAppSelector} from "./reduxHooks";
import {selectAuth, setUser} from "../features/auth/authSlice";
import User from "../models/User";

const useAxiosPrivate = () => {
  const updateAccessToken = useUpdateAccessToken();
  const {accessToken} = useAppSelector(selectAuth);
  const dispatch = useAppDispatch()
  const refIsOnlyOneRefetch = useRef(false);


  useEffect(() => {

    const requestIntercept = axiosPrivate.interceptors.request.use(
        config => {
          if (!config.headers['Authorization']) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
          }
          return config;
        }, (error) => Promise.reject(error)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
        response => {
          refIsOnlyOneRefetch.current = false
          return response
        },
        async (error) => {
          const prevRequest = error?.config;
          if (error?.response?.status === 403 && !prevRequest?.sent  && !refIsOnlyOneRefetch.current) {
            prevRequest.sent = true;
            refIsOnlyOneRefetch.current = true
            const newAccessToken = await updateAccessToken();//for some reason redux isn't fast enough to update state and then use this state immediately after this, so i use local variable with new token, await keyword didn't help like it did in login and register forms
            prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
            const currentUserData = await axiosPrivate.get<User>('http://localhost:8080/api/v1/users/currentUser');
            await dispatch(setUser(currentUserData.data))
            return axiosPrivate(prevRequest);
          }
          return Promise.reject(error);
        }
    );



    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    }
  }, [accessToken, dispatch, updateAccessToken])

  return axiosPrivate;
}

export default useAxiosPrivate;