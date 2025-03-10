import React from 'react';
import {Link as ReactScrollLink} from "react-scroll/modules";
import {Link} from "react-router-dom";

interface Props {
  locationPath: string,
  navToId: string,
  navItemName: string
}

const NavLink = ({locationPath, navToId, navItemName}: Props) => {
  return (
      <div>
        {
          locationPath === '/' ?
              <ReactScrollLink
                  activeClass="active"
                  to={navToId}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className={'w-full block'}
              >
                {navItemName}
              </ReactScrollLink> :
              <Link to={`/?scrollTo=${navToId}`} className={'w-full block'}>
                {navItemName}
              </Link>
        }
      </div>
  );
};

export default NavLink;
