import React from 'react';
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Market from "../components/Market";

const Home = () => {

      return <>
        <div className={"bg-gradient-to-t from-my-black from-30%  to-my-purple to-90%" +
            " text-my-white" +
            " text-xl"}>
          <Navbar></Navbar>
          <div className={"container mx-auto"}>
            <Header></Header>
            <Market></Market>
          </div>
        </div>
      </>

    }
;

export default Home;