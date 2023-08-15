import React, {useState} from 'react';
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Market from "../components/Market";
import GetStarted from "../components/GetStarted";
import Github from "../components/Github";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import useWindowSize from "../hooks/useWindowSize";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import {useQuery} from "react-query";
import {useLocation} from "react-router-dom";
import useParamsForNavigation from "../hooks/useParamsForNavigation";
import User from "../models/User";

const Home = () => {
      const axiosPrivate = useAxiosPrivate();

      const [toggledMenu, setToggledMenu] = useState(false);

      const width = useWindowSize();

      const location = useLocation();
      useParamsForNavigation(location)

//trigger token refresh on page reload
      const currentUserData = useQuery(
          {
            queryKey: ['currentUser'],
            queryFn:
                async () => {
                  await axiosPrivate.get<User>("http://localhost:8080/api/v1/users/currentUser")
                }
          }
      )


      //when size of the screen bigger that md that do not show toggledMenu, otherwise show and on click show sidebar

      if (width < 768) {
        return <div id={'home'}
                    className={'flex w-full'}
        >
          <div
              className={" bg-gradient-to-t from-my-black from-30%  to-my-purple to-90% text-my-white text-xl w-full relative"}>
            <Navbar></Navbar>
            <div className={"container mx-auto  "}>
              <Header></Header>
              <Market></Market>
              <GetStarted></GetStarted>
              <Github></Github>
            </div>
            <Footer></Footer>
          </div>
          {
            toggledMenu ?
                <Sidebar bar={'overview'}
                         setToggledMenu={setToggledMenu}/> :
                <div
                    className={'bg-gradient-to-r fixed from-indigo-800 via-purple-800 to-pink-500  bottom-12 right-8 z-50 w-20 h-20  rounded-full text-center md:hidden block cursor-pointer'}
                    onClick={() => setToggledMenu(!toggledMenu)}>
                  <div className={'w-full h-full flex'}>
                    <svg fill={'#fff'}
                         clipRule="evenodd"
                         fillRule="evenodd"
                         strokeLinejoin="round"
                         strokeMiterlimit="2"
                         width={'45px'}
                         height={'45px'}
                         className={'block m-auto'}
                         viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="m20 20h-15.25c-.414 0-.75.336-.75.75s.336.75.75.75h15.75c.53 0 1-.47 1-1v-15.75c0-.414-.336-.75-.75-.75s-.75.336-.75.75zm-1-17c0-.478-.379-1-1-1h-15c-.62 0-1 .519-1 1v15c0 .621.52 1 1 1h15c.478 0 1-.379 1-1zm-15.5.5h14v14h-14zm6.25 6.25h-3c-.414 0-.75.336-.75.75s.336.75.75.75h3v3c0 .414.336.75.75.75s.75-.336.75-.75v-3h3c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-3v-3c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
                          fillRule="nonzero"/>
                    </svg>
                  </div>
                </div>
          }

        </div>

      } else return <div
          id={'home'}
          className={'flex w-full'}
      >
        <div
            className={" bg-gradient-to-t from-my-black from-30%  to-my-purple to-90% text-my-white text-xl w-full relative"}>
          <Navbar></Navbar>
          <div className={"container mx-auto "}>
            <Header></Header>
            <Market></Market>
            <GetStarted></GetStarted>
            <Github></Github>
          </div>
          <Footer></Footer>
        </div>

        <Sidebar setToggledMenu={setToggledMenu}/>

      </div>

    }
;

export default Home;