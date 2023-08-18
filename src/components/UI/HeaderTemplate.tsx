import React, {PropsWithChildren} from 'react';
// @ts-ignore
import btc from "../../images/home/btc-logo.png";
// @ts-ignore
import eth from "../../images/home/eth-logo.png";

function HeaderTemplate({children}: PropsWithChildren) {
  return (
      <div className={"pt-32 pb-56 "}>
        <div className="flex relative">
          <img
              className={"w-20 h-20 absolute top-4 2xl:left-16 xl:left-8  lg:left-0   lg:block   hidden animate-bounce"}
              src={btc} alt=""/>
          <div className={"flex-col text-center text-5xl sm:text-8xl mx-auto "}>
            <p className={"font-bold"}>GET ALERTS ON</p>
            <p className={"bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-500 bg-clip-text text-transparent font-bold"}>CRYPTO
              CURRENCIES</p>
          </div>
          <img
              className={"w-20 h-20 absolute top-4 2xl:right-16 xl:right-8 lg:right-0  lg:block  hidden  animate-bounce"}
              src={eth} alt=""/>
        </div>
        {children}
      </div>
  );
}

export default HeaderTemplate;