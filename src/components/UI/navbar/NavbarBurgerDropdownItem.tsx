import React from 'react';
import NavLink from "../NavLink";

interface Props{
  locationPath: string,
  navToId:string,
  navItemName:string
}

const NavbarBurgerDropdownItem = ({locationPath,navToId,navItemName}:Props) => {
  return (
      <li>
        <div
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
          <NavLink
              locationPath={locationPath}
              navToId={navToId}
              navItemName={navItemName}
          />
        </div>
      </li>
  );
};

export default NavbarBurgerDropdownItem;