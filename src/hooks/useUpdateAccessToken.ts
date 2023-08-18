import {axiosPrivate} from "../api/axios";
import {setAccessToken} from "../features/auth/authSlice";
import ApiError from "../models/ApiError";
import {useAppDispatch} from "./reduxHooks";

const REFRESH_ACCESS_TOKEN_ENDPOINT = 'auth/refresh-token'

const useUpdateAccessToken = () => {
  const dispatch = useAppDispatch();


  return async () => {
    try {
      const response = await axiosPrivate.get<string>(REFRESH_ACCESS_TOKEN_ENDPOINT);
      await dispatch(setAccessToken(response.data));
      return response.data
    } catch (error: unknown) {

      const updateError = error as ApiError;

      console.log(updateError.response.data.message)
    }
  }
};

export default useUpdateAccessToken;