import React from 'react';
// @ts-ignore
import btc from '../images/home/btc-logo.png'
// @ts-ignore
import eth from '../images/home/eth-logo.png'
import Coin from "../components/UI/common/Coin";
import {useQueries} from "react-query";
import axios from "axios";
import Loading from "./UI/common/Loading";
import Error from "./UI/common/Error";
import HeaderTemplate from "./UI/HeaderTemplate";
import FollowButton from "./UI/common/FollowButton";

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
        <HeaderTemplate>
          <div className={"flex justify-around mt-24"}>
            <Loading/>
            <Loading/>
            <Loading/>
            <Loading/>
          </div>
        </HeaderTemplate>

    )
  } else if (bitcoin.error || ethereum.error || solana.error || ripple.error) {
    return (
        <>
          <HeaderTemplate>
            <Error/>
          </HeaderTemplate>
        </>
    )
  } else if (bitcoin.data || ethereum.data || solana.data || ripple.data) {
    return (
        <HeaderTemplate>
          <div
              className={"md:grid-rows-1 md:gap-0 md:grid-cols-4 sm:grid-rows-2 sm:grid-cols-2 sm:grid  hidden gap-8 mt-24 "}>
            <Coin
                id={bitcoin.data.id}
                img={bitcoin.data.image.large}
                name={bitcoin.data.name}
                price={bitcoin.data.market_data.current_price.usd}
                change={bitcoin.data.market_data.price_change_percentage_24h}
            ></Coin>
            <Coin
                id={ethereum.data.id}
                img={ethereum.data.image.large}
                name={ethereum.data.name}
                price={ethereum.data.market_data.current_price.usd}
                change={ethereum.data.market_data.price_change_percentage_24h}></Coin>
            <Coin
                id={solana.data.id}
                img={solana.data.image.large}
                name={solana.data.name}
                price={solana.data.market_data.current_price.usd}
                change={solana.data.market_data.price_change_percentage_24h}></Coin>
            <Coin
                id={ripple.data.id}
                img={ripple.data.image.large}
                name={ripple.data.name}
                price={ripple.data.market_data.current_price.usd}
                change={ripple.data.market_data.price_change_percentage_24h}></Coin>
          </div>

          <div className={'sm:hidden'}>
            <FollowButton content={'See coins'}
                          link={'#market'}
            ></FollowButton>
          </div>
        </HeaderTemplate>
    );
  }
  return <></>
}

export default Header;