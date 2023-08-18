import React, {PropsWithChildren} from 'react';
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import Sidebar from "../../Sidebar";

interface Props {
  width: number,
  toggledMenu: boolean,
  setToggledMenu: (arg: boolean) => void
}

const ShowTemplate = ({width, toggledMenu, setToggledMenu, children}: PropsWithChildren<Props>) => {
  if (width < 768) {
    return (
        <div className={'flex'}>
          <div
              className={'bg-gradient-to-t from-my-black from-30%  to-my-purple to-90% text-my-white text-xl w-full'}>
            <Navbar></Navbar>

            <div className={'container pt-40 '}>
              {children}
            </div>
            <Footer/>
          </div>
          {
            toggledMenu ?
                <Sidebar bar={'overview'}
                         setToggledMenu={setToggledMenu}/> :
                <div
                    className={'bg-gradient-to-r fixed from-indigo-800 via-purple-800 to-pink-500  bottom-12 right-8 z-50 w-20 h-20  rounded-full text-center md:hidden block'}
                    onClick={() => setToggledMenu(!toggledMenu)}>
                  <div className={'w-full h-full flex'}>
                    <svg fill={'#fff'}
                         clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2"
                         width={'45px'}
                         height={'45px'} className={'block m-auto'} viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="m20 20h-15.25c-.414 0-.75.336-.75.75s.336.75.75.75h15.75c.53 0 1-.47 1-1v-15.75c0-.414-.336-.75-.75-.75s-.75.336-.75.75zm-1-17c0-.478-.379-1-1-1h-15c-.62 0-1 .519-1 1v15c0 .621.52 1 1 1h15c.478 0 1-.379 1-1zm-15.5.5h14v14h-14zm6.25 6.25h-3c-.414 0-.75.336-.75.75s.336.75.75.75h3v3c0 .414.336.75.75.75s.75-.336.75-.75v-3h3c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-3v-3c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
                          fillRule="nonzero"/>
                    </svg>
                  </div>
                </div>
          }
        </div>
    );
  } else return (
      <div className={'flex'}>
        <div
            className={'bg-gradient-to-t from-my-black from-30%  to-my-purple to-90% text-my-white text-xl w-full'}>
          <Navbar></Navbar>

          <div className={'container pt-40 min-h-[80vh]'}>
            {children}
          </div>
          <Footer/>
        </div>
        <Sidebar setToggledMenu={setToggledMenu}/>
      </div>
  );

};

export default ShowTemplate;