import React, {useState} from 'react';
import NavbarProfileDropdown from "./UI/NavbarProfileDropdown";
import NavbarNotificationDropdown from "./UI/NavbarNotificationDropdown";
import NavbarBurgerDropdown from "./UI/NavbarBurgerDropdown";

function Navbar() {


  const [sticky, setSticky] = useState(false);
  const [notificationToggle, setNotificationToggle] = useState(false)
  const [burgerToggle, setBurgerToggle] = useState(false)
  const [profileToggle, setProfileToggle] = useState(false)

  const toggleBurger = () => {
    setBurgerToggle(!burgerToggle)
    setProfileToggle(false)
    setNotificationToggle(false)
  }
  const toggleNotification = () => {
    setBurgerToggle(false)
    setProfileToggle(false)
    setNotificationToggle(!notificationToggle)
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


      <div className={`${sticky ? "sticky top-0 bg-my-black z-50" : ""}`}>

        <div className={"container mx-auto"}>
          <div className={"flex-col"}>

            <ul className={"flex justify-between justify-items-center p-5"}>
              <li className={"my-auto text-3xl font-bold"}>Crypto Alert</li>

              <li className={"my-auto hidden md:block"}>
                <ul className={"flex space-x-10 "}>
                  <li className={"font-bold"}>Home</li>
                  <li className={"font-bold"}>Market</li>
                  <li className={"font-bold"}>Start</li>
                </ul>
              </li>

              <li className={"my-auto flex space-x-5"}>
                <svg onClick={() => toggleNotification()}
                     className={"my-auto"}
                     fill="#FFFFFF"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 72 72"
                     width="30px"
                     height="30px">
                  <path
                      d="M28.802 58h14.396c-1.504 2.398-4.165 4-7.198 4S30.307 60.398 28.802 58zM58.328 39.781C58.602 40.191 61 43.963 61 50c0 2.209-1.791 4-4 4H15c-2.209 0-4-1.791-4-4 0-6.037 2.398-9.809 2.672-10.219.414-.621.975-1.158 1.672-1.422 3.459-1.314 3.764-8.46 3.98-10.517.607-5.776 3.732-11.143 10.801-13.383C31.28 12.525 33.267 11 36 11c2.738 0 4.728 1.531 5.882 3.471 4.343 1.198 10.329 5.748 10.794 13.371.151 2.483.665 9.081 3.98 10.517C57.355 38.662 57.914 39.16 58.328 39.781z"/>
                </svg>
                <svg onClick={() => toggleProfile()}
                     className={"my-auto"}
                     xmlns="http://www.w3.org/2000/svg"
                     fill={"#fff"}
                     height="1em"
                     viewBox="0 0 448 512">
                  <path
                      d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
                </svg>

                <svg onClick={() => toggleBurger()}
                     xmlns="http://www.w3.org/2000/svg"
                     className={"my-auto md:hidden"}
                     fill={"#fff"}
                     height="25px"
                     viewBox="0 0 512 512"
                >
                  <path
                      d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                </svg>
              </li>
            </ul>

            <div className={"relative z-20"}>
              <div className={`absolute top-0 right-0  rounded w-56 ${notificationToggle ? '' : 'hidden'}`}>
                <NavbarNotificationDropdown></NavbarNotificationDropdown>
              </div>
              <div className={`absolute top-0 right-0  w-56 ${profileToggle ? '' : 'hidden'}`}>
                <ul className={"flex-col  mx-auto"}>
                  <li className={"flex justify-end"}>
                    <NavbarProfileDropdown></NavbarProfileDropdown>
                  </li>
                </ul>
              </div>
              <div className={`absolute  top-0 right-0  ${burgerToggle ? '' : 'hidden'}`}>
                <NavbarBurgerDropdown></NavbarBurgerDropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Navbar;