import React from 'react';
// @ts-ignore
import btc from '../images/home/btc-logo.png'
// @ts-ignore
import eth from '../images/home/eth-logo.png'
import HeaderCoin from "./UI/HeaderCoin";
import {useQueries} from "react-query";
import axios from "axios";

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
    return <>Loading...</>
  } else if (bitcoin.error || ethereum.error || solana.error || ripple.error) {
    return <>Oops... Something went wrong"</>
  } else if (bitcoin.data || ethereum.data || solana.data || ripple.data) {
    return (
        <div className={"mt-24 mb-64"}>
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
        </div>
    );
  }
  return <></>
}

export default Header;