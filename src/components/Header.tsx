import React from 'react';
// @ts-ignore
import btc from '../images/home/btc-logo.png'
// @ts-ignore
import eth from '../images/home/eth-logo.png'
import HeaderCoin from "./UI/HeaderCoin";
import {useQueries} from "react-query";
import axios from "axios";
import Loading from "./UI/Loading";
import Error from "./UI/Error";

function Header() {

  const [bitcoin, ethereum, solana, ripple] = useQueries(
      [
        {
          queryKey: ['bitcoin'],
          queryFn:
              async () => {
                return await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&market_data=true`).then(response => response.data)
              }
        },
        {
          queryKey: ['ethereum'],
          queryFn:
              async () => {
                return await axios.get(`https://api.coingecko.com/api/v3/coins/ethereum?localization=false&market_data=true`).then(response => response.data)
              }
        },
        {
          queryKey: ['solana'],
          queryFn:
              async () => {
                return await axios.get(`https://api.coingecko.com/api/v3/coins/solana?localization=false&market_data=true`).then(response => response.data)
              }
        },
        {
          queryKey: ['ripple'],
          queryFn:
              async () => {
                return await axios.get(`https://api.coingecko.com/api/v3/coins/ripple?localization=false&market_data=true`).then(response => response.data)
              }
        }
      ]
  )

  if (bitcoin.isLoading || ethereum.isLoading || solana.isLoading || ripple.isLoading) {
    return (
        <>
          <div className={"pt-24 pb-64"}>
            <div className="flex relative">
              <img
                  className={"w-20 h-20 absolute top-4 2xl:left-16 xl:left-8  lg:left-0  2xl:block xl:block lg:block   hidden animate-bounce"}
                  src={btc} alt=""/>
              <div className={"flex-col text-center text-8xl mx-auto "}>
                <p className={"font-bold"}>TRACK AND TRADE</p>
                <p className={"bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-500 bg-clip-text text-transparent font-bold"}>CRYPTO
                  CURRENCIES</p>
              </div>
              <img
                  className={"w-20 h-20 absolute top-4 2xl:right-16 xl:right-8 lg:right-0  2xl:block xl:block lg:block hidden  animate-bounce"}
                  src={eth} alt=""/>
            </div>
            <div className={"flex justify-around mt-24"}>
              <Loading/>
              <Loading/>
              <Loading/>
              <Loading/>
            </div>
          </div>
        </>
    )
  } else if (bitcoin.error || ethereum.error || solana.error || ripple.error) {
    return (
        <>
          <div className={"pt-24 pb-64"}>
            <div className="flex relative">
              <img
                  className={"w-20 h-20 absolute top-4 2xl:left-16 xl:left-8  lg:left-0  2xl:block xl:block lg:block   hidden animate-bounce"}
                  src={btc} alt=""/>
              <div className={"flex-col text-center text-8xl mx-auto "}>
                <p className={"font-bold"}>TRACK AND TRADE</p>
                <p className={"bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-500 bg-clip-text text-transparent font-bold"}>CRYPTO
                  CURRENCIES</p>
              </div>
              <img
                  className={"w-20 h-20 absolute top-4 2xl:right-16 xl:right-8 lg:right-0  2xl:block xl:block lg:block hidden  animate-bounce"}
                  src={eth} alt=""/>
            </div>
            <Error/>
          </div>
        </>
    )
  } else if (bitcoin.data || ethereum.data || solana.data || ripple.data) {
    return (
        <div className={"pt-32 pb-56"}>
          <div className="flex relative">
            <img
                className={"w-20 h-20 absolute top-4 2xl:left-16 xl:left-8  lg:left-0  2xl:block xl:block lg:block   hidden animate-bounce"}
                src={btc} alt=""/>
            <div className={"flex-col text-center sm:text-8xl text-5xl mx-auto "}>
              <p className={"font-bold"}>TRACK AND TRADE</p>
              <p className={"bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-500 bg-clip-text text-transparent font-bold"}>CRYPTO
                CURRENCIES</p>
            </div>
            <img
                className={"w-20 h-20 absolute top-4 2xl:right-16 xl:right-8 lg:right-0  2xl:block xl:block lg:block hidden  animate-bounce"}
                src={eth} alt=""/>
          </div>
          <div
              className={"md:grid-rows-1 md:gap-0 md:grid-cols-4 sm:grid-rows-2 sm:grid-cols-2 sm:grid  hidden gap-8 mt-24 "}>
            <HeaderCoin
                img={bitcoin.data.image.large}
                name={bitcoin.data.name}
                price={bitcoin.data.market_data.current_price.usd}
                change={bitcoin.data.market_data.price_change_percentage_24h}
            ></HeaderCoin>
            <HeaderCoin
                img={ethereum.data.image.large}
                name={ethereum.data.name}
                price={ethereum.data.market_data.current_price.usd}
                change={ethereum.data.market_data.price_change_percentage_24h}></HeaderCoin>
            <HeaderCoin
                img={solana.data.image.large}
                name={solana.data.name}
                price={solana.data.market_data.current_price.usd}
                change={solana.data.market_data.price_change_percentage_24h}></HeaderCoin>
            <HeaderCoin
                img={ripple.data.image.large}
                name={ripple.data.name}
                price={ripple.data.market_data.current_price.usd}
                change={ripple.data.market_data.price_change_percentage_24h}></HeaderCoin>
          </div>

          <a href="#market" className=" sm:hidden mx-auto mt-16 flex justify-center space-x-8  rounded-full p-8 max-w-sm bg-gradient-to-tr from-indigo-800 via-purple-800 to-pink-500 ">
            <p className={"my-auto"}>See coins</p>
            <svg className={"my-auto"} xmlns="http://www.w3.org/2000/svg" fill={"#fff"} height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
          </a>

        </div>
    );
  }
  return <></>
}

export default Header;