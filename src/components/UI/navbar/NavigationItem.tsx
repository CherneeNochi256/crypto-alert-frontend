import React from 'react';
import NavLink from "../NavLink";

interface Props {
  locationPath: string,
  navToId: string,
  navItemName: string
}

const NavigationItem = ({locationPath, navItemName, navToId}: Props) => {
  return (
      <li className={"font-bold hover:bg-gradient-to-r hover:from-indigo-800 hover:via-purple-800 hover:to-pink-500 hover:bg-clip-text hover:text-transparent hover:font-bold cursor-pointer transition duration-300 ease-in-out hover:scale-125"}>
        <NavLink
            locationPath={locationPath}
            navToId={navToId}
            navItemName={navItemName}
        />
      </li>
  );
};

export default NavigationItem;