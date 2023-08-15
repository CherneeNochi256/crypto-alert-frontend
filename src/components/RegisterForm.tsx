import React, {useEffect, useRef, useState} from 'react';
import axios from '../api/axios'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import User from "../models/User";
import {setAccessToken, setUser} from "../features/auth/authSlice";
import ApiError from "../models/ApiError";
import {useAppDispatch} from "../hooks/reduxHooks";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import {useQuery} from "react-query";
import Loading from "./UI/common/Loading";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const REGISTER_URL = 'auth/register';
const CURRENT_USER_URL = 'users/currentUser';

interface Props {
  toggleForm: (action: string) => void
}

const RegisterForm = ({toggleForm}: Props) => {

  const registrationRequestData = useQuery(
      {
        queryKey: ['registration'],
        queryFn:
            async () => {
              return await axios.post<string>(REGISTER_URL,
                  JSON.stringify({
                    username: username,
                    email: email,
                    password: password
                  })
              )
            },
        enabled: false,
        retry: false

      }
  )

  const axiosPrivate = useAxiosPrivate();

  const dispatch = useAppDispatch();

  const userRef = useRef(null);
  const errRef = useRef(null);

  const [username, setUsername] = useState('');
  const [isValidName, setIsValidName] = useState(false);

  const [email, setEmail] = useState('');
  const [isEmailValid, setEmailValid] = useState(false);

  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const [confirmationPassword, setConfirmationPassword] = useState('');
  const [isConfirmationPasswordValid, setIsConfirmationPasswordValid] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // @ts-ignore
    userRef.current?.focus();
  }, [])

  useEffect(() => {
    setIsValidName(USER_REGEX.test(username));
  }, [username])

  useEffect(() => {
    setEmailValid(EMAIL_REGEX.test(email));
  }, [email])

  useEffect(() => {
    setIsPasswordValid(PWD_REGEX.test(password));
    setIsConfirmationPasswordValid(password === confirmationPassword);
  }, [password, confirmationPassword])

  useEffect(() => {
    setErrorMessage('');
  }, [username, password, confirmationPassword])

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const isUsernameValid = USER_REGEX.test(username);
    const isPasswordValid = PWD_REGEX.test(password);
    if (!isUsernameValid || !isPasswordValid) {
      setErrorMessage("Invalid Entry");
      return;
    }

    try {

      const authResponse = await registrationRequestData.refetch();
      if (authResponse.error) {
        const registrationError = authResponse.error as ApiError;
        setErrorMessage(registrationError.response.data.message)
        // @ts-ignore
        errRef.current?.focus();
        return
      }

      await dispatch(setAccessToken(authResponse.data?.data))//doesn't work without await, state can't be updated in time so in the next request it sends undefined

      const currentUserData = await axiosPrivate.get<User>(CURRENT_USER_URL);

      dispatch(setUser(currentUserData.data))

    } catch (error: unknown) {

      const registrationError = error as ApiError;
      setErrorMessage(registrationError.response.data.message)
    }
    // @ts-ignore
    errRef.current?.focus();
  }


  return (
      <section
          className={' fixed top-[20%] right-[37%] z-20  rounded-lg shadow bg-gray-700  w-full max-w-md  px-6 py-6 lg:px-8 max-h-[600px] overflow-y-scroll scrollbar-hide'}>
        <button type="button"
                onClick={() => toggleForm('closeModal')}
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="authentication-modal">
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
               viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
        <p ref={errRef}
           className={errorMessage ? "block bg-red-600 text-white opacity-50 rounded-2xl p-2 mb-2" : "hidden"}
           aria-live="assertive">
          {errorMessage}
        </p>
        <h1 className={'mb-4 text-xl font-medium  text-white'}>Registration</h1>
        {
          registrationRequestData.isFetching || registrationRequestData.isLoading ?
              <Loading/> :
              <form onSubmit={handleSubmit} className={'space-y-6'}>
                <label htmlFor="username" className={'block mb-2 text-sm font-medium  text-white'}>
                  Username:
                </label>
                <input
                    className={'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'}
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    required
                    aria-invalid={isValidName ? "false" : "true"}
                    aria-describedby="uidnote"
                />
                <p id="uidnote" className={username && !isValidName ? "block text-red-600" : "hidden"}>
                  <FontAwesomeIcon icon={faInfoCircle} className={'pr-2'}/>
                  4 to 24 characters.<br/>
                  Must begin with a letter.<br/>
                  Letters, numbers, underscores, hyphens allowed.
                </p>

                <label htmlFor="username" className={'block mb-2 text-sm font-medium  text-white'}>
                  Email:
                </label>
                <input
                    className={'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'}
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    aria-invalid={isValidName ? "false" : "true"}
                    aria-describedby="uidnote"
                />
                <p id="uidnote" className={email && !isEmailValid ? "block text-red-600" : "hidden"}>
                  <FontAwesomeIcon icon={faInfoCircle} className={'pr-2'}/>
                  This is not a valid email.
                </p>


                <label htmlFor="password" className={'block mb-2 text-sm font-medium text-white'}>
                  Password:
                </label>
                <input
                    className={'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'}
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                    aria-invalid={isPasswordValid ? "false" : "true"}
                    aria-describedby="pwdnote"
                />
                <p id="pwdnote" className={!isPasswordValid && password ? "block text-red-600 " : "hidden"}>
                  <FontAwesomeIcon icon={faInfoCircle} className={'pr-2'}/>
                  8 to 24 characters.<br/>
                  Must include uppercase and lowercase letters, a number and a special character.<br/>
                  Allowed special characters: <span aria-label="exclamation mark">!</span> <span
                    aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span
                    aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                </p>


                <label htmlFor="confirm_pwd" className={'block mb-2 text-sm font-medium text-white'}>
                  Confirm Password:
                </label>
                <input
                    className={'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'}
                    type="password"
                    id="confirm_pwd"
                    onChange={(e) => setConfirmationPassword(e.target.value)}
                    value={confirmationPassword}
                    required
                    aria-invalid={isConfirmationPasswordValid ? "false" : "true"}
                    aria-describedby="confirmnote"
                />
                <p id="confirmnote"
                   className={confirmationPassword && !isConfirmationPasswordValid ? "block text-red-600" : "hidden"}>
                  <FontAwesomeIcon icon={faInfoCircle} className={'pr-2'}/>
                  Must match the first password input field.
                </p>

                <button type="submit"
                        disabled={!isValidName || !isPasswordValid || !isConfirmationPasswordValid || !isEmailValid}
                        className="rounded-full p-2 w-full text-white bg-gradient-to-tr from-indigo-800 via-purple-800 to-pink-500 shadow-lg shadow-shadow-color ">
                  Register
                </button>
              </form>
        }
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300 mt-2">
          Already registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Sign in</a>
        </div>
      </section>

  )

}

export default RegisterForm;