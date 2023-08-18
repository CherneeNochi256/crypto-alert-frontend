import React from 'react';
import SidebarTemplate from "./SidebarTemplate";
import {useAppSelector} from "../../../hooks/reduxHooks";
import {selectAuth} from "../../../features/auth/authSlice";
import {CoinAlert} from "../../../models/coin/CoinAlert";
import {Link} from "react-router-dom";

function SidebarAlerts() {

  const {user} = useAppSelector(selectAuth);

  let sortedAlerts = [] as CoinAlert[]
  if (user?.coinAlerts) {
    sortedAlerts = [...user.coinAlerts].sort((a, b) => Date.parse(b.updatedDate) - Date.parse(a.updatedDate))
  }


  return (
      <SidebarTemplate title={'ALERTS'}
                       titlePosition={'right-32'}>

        <div className={''}>

          {
            user?.coinAlerts && user?.coinAlerts.length > 0 && sortedAlerts ?
                <ul className={'flex-col w-full md:w-[384px] '}>
                  {
                    sortedAlerts.map(alert => {
                      return (
                          <li key={alert.id}>
                            <Link
                                to={`/${alert.coinId}`}
                                className=" text-gray-500 font-bold block w-full pl-4 py-2 border-b  border-t border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                              <div className={'text-sm '}>
                                {alert.coinId.toUpperCase()} Intersection {alert.desiredPrice}
                              </div>
                              <div className={'flex space-x-2 text-[12px]'}>
                                <div className={'flex justify-center items-center'}>
                                  <img src={alert.image} width={15} height={15} alt=""/>
                                </div>
                                <div className={'my-auto'}>{alert.coinId.toUpperCase()}</div>
                                <div className={'text-[25px]'}>
                                  {'\u00b7'}
                                </div>
                                <div className={' my-auto'}>
                                  {alert.coinReachedDesiredPrice ?
                                      <div className={'text-red-600'}>
                                        Stopped - Triggered
                                      </div> :
                                      <div className={'text-green-600'}>
                                        Started - In Progress
                                      </div>
                                  }
                                </div>
                              </div>
                            </Link>
                          </li>
                      )
                    })
                  }
                </ul> :
                <div className={'text-center text-gray-600 w-full md:w-[384px]'}>
                  No alerts yet...
                </div>
          }


        </div>


      </SidebarTemplate>
  );
}

export default SidebarAlerts;