import React, {useEffect, useMemo, useState} from 'react';
import NavbarNotificationItem from "./NavbarNotificationItem";
import {useAppSelector} from "../../../hooks/reduxHooks";
import {selectAuth} from "../../../features/auth/authSlice";
import {CoinAlert} from "../../../models/coin/CoinAlert";

function NavbarNotificationDropdown() {
  const {user} = useAppSelector(selectAuth);
  const onlyUnseenAlerts = useMemo(() => {
    if (user?.coinAlerts && user.coinAlerts.length > 0) {
      return user.coinAlerts.filter(alert => !alert.seen);
    }
    return [];
  }, [user?.coinAlerts]);

  return (
      <div
          className="z-20  w-full max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-my-black dark:divide-gray-700"
      >
        <div
            className="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
          Notifications
        </div>
        <div className="divide-y divide-gray-100 dark:divide-gray-700">
          {onlyUnseenAlerts && onlyUnseenAlerts.length > 0 ?
              onlyUnseenAlerts.map(alert => {
                return (
                    <div key={alert.id}>
                      <NavbarNotificationItem alert={alert}></NavbarNotificationItem>
                    </div>
                )
              }) :
              <div className={'p-4 text-gray-600 text-sm'}>
                You don't have notifications
              </div>
          }
        </div>
        {onlyUnseenAlerts && onlyUnseenAlerts.length > 0 ?
            <a href="#"
               className="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
              <div className="inline-flex items-center ">
                <svg className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                  <path
                      d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
                </svg>
                View all
              </div>
            </a> :
            <></>
        }
      </div>
  );
}

export default NavbarNotificationDropdown;