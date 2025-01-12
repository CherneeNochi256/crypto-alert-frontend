import React from 'react';
// @ts-ignore
import btc from '../images/home/btc-logo.png'
// @ts-ignore
import eth from '../images/home/eth-logo.png'
import Coin from "../components/UI/common/Coin";
import {useQuery} from "react-query";
import {coinGeckoApi} from "../api/axios";
import Loading from "./UI/common/Loading";
import Error from "./UI/common/Error";
import HeaderTemplate from "./UI/HeaderTemplate";
import FollowButton from "./UI/common/FollowButton";
import CoinGeckoMarketsCoin from "../models/coin/coinGecko/CoinGeckoMarketsCoin";

function Header() {

  const width = useWindowSize();

  const {data, isLoading, error} = useQuery({
    queryKey: ['headerCoins'],
    queryFn:
        async () => {
          return await coinGeckoApi.get<CoinGeckoMarketsCoin[]>('coins/markets?vs_currency=usd&ids=bitcoin%2Cripple%2Csolana%2Cethereum&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en').then(response => response.data)
        }
  })

  if (isLoading) {  
  return (  
    <HeaderTemplate>  
      <div className={"flex justify-around mt-24"}>  
        {width < 768 ? null : (  
          <>  
            <Loading/>  
            <Loading/>  
            <Loading/>  
            <Loading/>   
          </>  
        )}  
      </div>  
    </HeaderTemplate>  
  );  
} else if (error) {
    return (
        <>
          <HeaderTemplate>
            <Error/>
          </HeaderTemplate>
        </>
    )
  } else if (data) {
    return (
        <HeaderTemplate>
          <div
              className={"md:grid-rows-1 md:gap-0 md:grid-cols-4 sm:grid-rows-2 sm:grid-cols-2 sm:grid  hidden gap-8 mt-24 "}>

            {
              data.map(coin => {
                return (
                    <Coin coin={coin}/>
                )
              })
            }
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
