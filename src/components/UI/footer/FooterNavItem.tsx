import React from 'react';
import NavLink from "../NavLink";

interface Props {
  locationPath: string,
  navToId: string,
  navItemName: string
}

const FooterNavItem = ({locationPath, navToId, navItemName}: Props) => {
  return (
      <li>
        <div className="mr-4 hover:underline md:mr-6 cursor-pointer">
          <NavLink
              locationPath={locationPath}
              navToId={navToId}
              navItemName={navItemName}
          />
        </div>
      </li>
  );
};

export default FooterNavItem;