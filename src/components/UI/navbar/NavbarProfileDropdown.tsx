import React, {useState} from 'react';
import {useAppSelector} from "../../../hooks/reduxHooks";
import {selectAuth} from "../../../features/auth/authSlice";
import RegisterForm from "../../RegisterForm";
import Overlay from "../../Overlay";
import LoginForm from "../../LoginForm";
import useLogout from "../../../hooks/useLogout";


function NavbarProfileDropdown() {

  const {user} = useAppSelector(selectAuth);
  const logout = useLogout();
  const [isRegistrationForm, setIsRegistrationForm] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true)

  function toggleForm(action: string) {
    if (action === 'signIn') {
      setIsLoginForm(false)
      setIsRegistrationForm(true)
    } else if (action === "logIn") {
      setIsLoginForm(true)
      setIsRegistrationForm(false)
    } else {
      setIsRegistrationForm(false)
      setIsLoginForm(false)
    }

  }

  if (user) {
    return (
        <div
            className="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-my-black dark:divide-gray-600">
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>{user.username}</div>
            <div className="font-medium truncate">{user.email}</div>
          </div>
          <div className="py-2">
            <div
                onClick={() => logout()}
                className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
              Logout
            </div>
          </div>
        </div>
    );

  } else {
    return (
        <div
            className="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-my-black dark:divide-gray-600">
          <div
              onClick={() => toggleForm('signIn')}
              className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
            Sign in
          </div>
          <div
              onClick={() => toggleForm('logIn')}
              className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
            Log in
          </div>
          {
            isRegistrationForm ?
                <div>
                  <RegisterForm toggleForm={toggleForm}/>
                  <Overlay toggleForm={toggleForm}/>
                </div>
                : <></>
          }
          {
            isLoginForm ?
                <div>
                  <LoginForm toggleForm={toggleForm}/>
                  <Overlay toggleForm={toggleForm}/>
                </div>
                : <></>
          }
        </div>
    )
  }

}

export default NavbarProfileDropdown;