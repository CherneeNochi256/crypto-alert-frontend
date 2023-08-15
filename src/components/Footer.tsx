import React from 'react';
import {Link, useLocation} from "react-router-dom";
import NavLink from "./UI/NavLink";
import FooterNavItem from "./UI/footer/FooterNavItem";

function Footer() {
  const location = useLocation();

  return (

      <footer className=" rounded-lg shadow bg-my-brown text-my-white z-50 px-3">
        <div className="w-full max-w-full p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center mb-4 sm:mb-0">
              <span className="self-center text-2xl font-semibold whitespace-nowrap cursor-pointer">
                <NavLink
                    locationPath={location.pathname}
                    navToId={'home'}
                    navItemName={'Crypto Alerts'}
                />
              </span>
            </div>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0">
              <FooterNavItem
                  locationPath={location.pathname}
                  navToId={'home'}
                  navItemName={'Home'}
              />
              <FooterNavItem
                  locationPath={location.pathname}
                  navToId={'getStarted'}
                  navItemName={'Get Started'}
              />
              <FooterNavItem
                  locationPath={location.pathname}
                  navToId={'market'}
                  navItemName={'Market'}
              />
              <li>
                <Link to="https://github.com/CherneeNochi256" className="hover:underline">Github</Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a
              href="#home" className="hover:underline">Crypto Alert</a>. All Rights Reserved.</span>
        </div>
      </footer>


  );
}

export default Footer;