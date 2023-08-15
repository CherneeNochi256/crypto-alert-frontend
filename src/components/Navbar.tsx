import React, {useEffect, useMemo, useState} from 'react';
import NavbarProfileDropdown from "./UI/navbar/NavbarProfileDropdown";
import NavbarNotificationDropdown from "./UI/navbar/NavbarNotificationDropdown";
import NavbarBurgerDropdown from "./UI/navbar/NavbarBurgerDropdown";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import {useAppSelector} from "../hooks/reduxHooks";
import {selectAuth} from "../features/auth/authSlice";
import {useLocation} from "react-router-dom";
import NavigationItem from "./UI/navbar/NavigationItem";
import Icon from "./UI/Icon";
import NavLink from "./UI/NavLink";
import ApiSuccess from "../models/ApiSuccess";


const CLEAR_NOTIFICATIONS_ENDPOINT = 'coins/seen'

function Navbar() {
  const {user} = useAppSelector(selectAuth);

  const onlyUnseenAlerts = useMemo(() => {
    if (user?.coinAlerts && user.coinAlerts.length > 0) {
      return user.coinAlerts.filter(alert => !alert.seen);
    }
    return [];
  }, [user?.coinAlerts]);

  const axiosPrivate = useAxiosPrivate();

  const location = useLocation()


  const [sticky, setSticky] = useState(false);

  const [notificationToggle, setNotificationToggle] = useState(false)
  const [burgerToggle, setBurgerToggle] = useState(false)
  const [profileToggle, setProfileToggle] = useState(false)

  const [notificationToggleCount, setNotificationToggleCount] = useState(0)

  const [notificationHover, setNotificationHover] = useState(false)
  const [profileHover, setProfileHover] = useState(false)
  const [burgerHover, setBurgerHover] = useState(false)

  useEffect(() => {
    if (notificationToggleCount === 2) {
      const response = axiosPrivate.post<ApiSuccess>(CLEAR_NOTIFICATIONS_ENDPOINT);
    }
  }, [axiosPrivate, notificationToggleCount])

  const toggleBurger = () => {
    setBurgerToggle(!burgerToggle)
    setProfileToggle(false)
    setNotificationToggle(false)
  }
  const toggleNotification = () => {
    setBurgerToggle(false)
    setProfileToggle(false)
    setNotificationToggle(!notificationToggle)
    setNotificationToggleCount(notificationToggleCount + 1)
  }
  const toggleProfile = () => {
    setBurgerToggle(false)
    setProfileToggle(!profileToggle)
    setNotificationToggle(false)
  }

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);


  return (


      <div id={'navbar'} className={`${sticky ? "sticky top-0 bg-my-black z-20" : ""}`}>

        <div className={"container mx-auto"}>
          <div className={"flex-col"}>

            <ul className={"flex justify-between justify-items-center p-5"}>
              <li className={"my-auto text-3xl font-bold cursor-pointer"}>
                <NavLink
                    locationPath={location.pathname}
                    navToId={'home'}
                    navItemName={'Crypto Alerts'}
                />
              </li>

              <li className={"my-auto hidden md:block"}>
                <ul className={"flex space-x-10 "}>
                  <NavigationItem
                      locationPath={location.pathname}
                      navItemName={'Home'}
                      navToId={'home'}
                  ></NavigationItem>
                  <NavigationItem
                      locationPath={location.pathname}
                      navItemName={'Market'}
                      navToId={'market'}
                  ></NavigationItem>
                  <NavigationItem
                      locationPath={location.pathname}
                      navItemName={'Get Started'}
                      navToId={'getStarted'}
                  ></NavigationItem>
                </ul>
              </li>

              <li className={"my-auto flex space-x-1 "}>

                <div
                    className={`relative p-2 my-auto cursor-pointer transition duration-300 ease-in-out hover:scale-125 ${notificationToggle && 'scale-125'}`}
                    onClick={() => toggleNotification()}
                    onMouseEnter={() => setNotificationHover(true)}
                    onMouseLeave={() => setNotificationHover(false)}>
                  <Icon
                      className={''}
                      hasGradient={notificationHover || notificationToggle}
                      sourceSvgHeight={72}
                      sourceSvgWidth={72}
                  >
                    <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="M28.802 58h14.396c-1.504 2.398-4.165 4-7.198 4S30.307 60.398 28.802 58zM58.328 39.781C58.602 40.191 61 43.963 61 50c0 2.209-1.791 4-4 4H15c-2.209 0-4-1.791-4-4 0-6.037 2.398-9.809 2.672-10.219.414-.621.975-1.158 1.672-1.422 3.459-1.314 3.764-8.46 3.98-10.517.607-5.776 3.732-11.143 10.801-13.383C31.28 12.525 33.267 11 36 11c2.738 0 4.728 1.531 5.882 3.471 4.343 1.198 10.329 5.748 10.794 13.371.151 2.483.665 9.081 3.98 10.517C57.355 38.662 57.914 39.16 58.328 39.781z"/>
                  </Icon>
                  {onlyUnseenAlerts && onlyUnseenAlerts.length > 0 &&
                      <div
                          className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                        {onlyUnseenAlerts.length}
                      </div>
                  }
                </div>

                <div
                    className={`flex  justify-center items-center p-2 my-auto cursor-pointer transition duration-300  ease-in-out hover:scale-125 ${profileToggle && 'scale-125'}`}
                    onClick={() => toggleProfile()}
                    onMouseEnter={() => setProfileHover(true)}
                    onMouseLeave={() => setProfileHover(false)}
                >
                  <Icon
                      className={''}
                      hasGradient={profileHover || profileToggle}
                      sourceSvgHeight={512}
                      sourceSvgWidth={448}
                      height={'1em'}
                  >
                    <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
                  </Icon>
                </div>


                <div
                    className={`my-auto md:hidden flex  justify-center items-center p-2  cursor-pointer transition duration-300  ease-in-out hover:scale-125 ${burgerToggle && 'scale-125'}`}
                    onClick={() => toggleBurger()}
                    onMouseEnter={() => setBurgerHover(true)}
                    onMouseLeave={() => setBurgerHover(false)}
                >
                  <Icon
                      className={''}
                      hasGradient={burgerHover || burgerToggle}
                      sourceSvgHeight={512}
                      sourceSvgWidth={448}
                      height={'25px'}
                  >
                    <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                  </Icon>
                </div>


              </li>
            </ul>

            <div className={"relative z-20"}>
              <div className={`absolute top-0 right-0  w-56 ${notificationToggle ? '' : 'hidden'}`}>
                <NavbarNotificationDropdown/>
              </div>
              <div className={`absolute top-0 right-0  w-56 ${profileToggle ? '' : 'hidden'}`}>
                <NavbarProfileDropdown/>
              </div>
              <div className={`absolute  top-0 right-0  ${burgerToggle ? '' : 'hidden'}`}>
                <NavbarBurgerDropdown/>
              </div>
            </div>

          </div>
        </div>
      </div>
  );
}

export default Navbar;