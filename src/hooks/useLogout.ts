import {axiosPrivate} from "../api/axios";
import {useAppDispatch} from "./reduxHooks";
import {setAccessToken, setUser} from "../features/auth/authSlice";


const LOGOUT_ENDPOINT = 'auth/logout'
const useLogout = () => {
  const dispatch = useAppDispatch();

  return async () => {
    dispatch(setAccessToken(undefined))
    dispatch(setUser(undefined))
    try {
      await axiosPrivate(LOGOUT_ENDPOINT);
    } catch (err) {
      console.error(err);
    }
  };
}

export default useLogout