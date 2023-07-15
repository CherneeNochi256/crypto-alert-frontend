import React from 'react';

function NavbarBurgerDropdown(props:any) {
  return (
      <div
          className="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-my-black">
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
          <li>
            <a href="#"
               className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home</a>
          </li>
          <li>
            <a href="#"
               className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Market</a>
          </li>
          <li>
            <a href="#"
               className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Start</a>
          </li>
        </ul>
      </div>
  );
}

export default NavbarBurgerDropdown;