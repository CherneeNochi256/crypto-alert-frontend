import React from 'react';
import {useLocation} from "react-router-dom";
import NavbarBurgerDropdownItem from "./NavbarBurgerDropdownItem";

function NavbarBurgerDropdown() {
  const location = useLocation();
  return (
      <div
          className="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-my-black">
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
          <NavbarBurgerDropdownItem
              locationPath={location.pathname}
              navToId={'home'}
              navItemName={'Home'}
          />
          <NavbarBurgerDropdownItem
              locationPath={location.pathname}
              navToId={'market'}
              navItemName={'Market'}
          />
          <NavbarBurgerDropdownItem
              locationPath={location.pathname}
              navToId={'getStarted'}
              navItemName={'Get Started'}
          />
        </ul>
      </div>
  );
}

export default NavbarBurgerDropdown;