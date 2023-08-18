import React from 'react';
import {CoinAlert} from "../../../models/coin/CoinAlert";
import moment from "moment";

interface Props {
  alert: CoinAlert
}

function NavbarNotificationItem({alert}: Props) {
  return (
      <a href="#" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
        <div className="flex-shrink-0">
          <img
              className="rounded-full w-11 h-11"
              src={alert.image}
              alt={''}
          />
        </div>
        <div className="w-full pl-3">
          <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
            <span
                className="font-semibold text-gray-900 dark:text-white">{alert.coinId.toUpperCase().toUpperCase()}
            </span> has reached your desired price!
            (
            <span
                className="font-semibold text-gray-900 dark:text-white">{alert.desiredPrice}
            </span>
            )
          </div>
          <div className="text-xs text-blue-600 dark:text-blue-500">{moment(alert.updatedDate).fromNow()}</div>
        </div>
      </a>
  );
}

export default NavbarNotificationItem;