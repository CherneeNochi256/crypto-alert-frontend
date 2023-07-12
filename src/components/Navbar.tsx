import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// @ts-ignore

function Navbar() {
  return (
      <div>
        <ul className={"flex justify-between justify-items-center p-5"}>
          <li className={"my-auto text-3xl font-bold"}>Crypto Alert</li>
          <li className={"my-auto"}>
            <ul className={"flex space-x-10 "}>
              <li className={"font-bold"}>Home</li>
              <li className={"font-bold"}>Market</li>
              <li className={"font-bold"}>Start</li>
            </ul>
          </li>
          <li className={"my-auto flex space-x-5"}>
            <svg className={"my-auto"} fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 72 72" width="30px" height="30px"><path d="M28.802 58h14.396c-1.504 2.398-4.165 4-7.198 4S30.307 60.398 28.802 58zM58.328 39.781C58.602 40.191 61 43.963 61 50c0 2.209-1.791 4-4 4H15c-2.209 0-4-1.791-4-4 0-6.037 2.398-9.809 2.672-10.219.414-.621.975-1.158 1.672-1.422 3.459-1.314 3.764-8.46 3.98-10.517.607-5.776 3.732-11.143 10.801-13.383C31.28 12.525 33.267 11 36 11c2.738 0 4.728 1.531 5.882 3.471 4.343 1.198 10.329 5.748 10.794 13.371.151 2.483.665 9.081 3.98 10.517C57.355 38.662 57.914 39.16 58.328 39.781z"/></svg>
            <svg className={"my-auto"} xmlns="http://www.w3.org/2000/svg" fill={"#fff"} height="1em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
          </li>
        </ul>
      </div>
  );
}

export default Navbar;