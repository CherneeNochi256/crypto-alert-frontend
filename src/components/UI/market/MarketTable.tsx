import React from 'react';
import MarketCoin from "./MarketCoin";
import CoinGeckoMarketsCoin from "../../../models/coin/coinGecko/CoinGeckoMarketsCoin";

interface Props {
  coinsData: CoinGeckoMarketsCoin[]
}

function MarketTable({coinsData}: Props) {
  return (
      <div className="relative hidden sm:block overflow-x-auto shadow-md sm:rounded-lg mt-24 font-bold text-2xl">
        <div className="text-left ">
          <div
              className="  bg-gradient-to-tr from-indigo-800 via-purple-800 to-pink-500 text-my-white grid grid-cols-4 grid-rows-1">
            <div className="px-6 py-3 my-auto">
              Coin
            </div>
            <div className="px-6 py-3 my-auto">
              Price
            </div>
            <div className="px-6 py-3 my-auto">
              24h Change
            </div>
            <div className="px-6 py-3 my-auto">
              Market Cap
            </div>
          </div>
        </div>
        {

          coinsData.map((coin: CoinGeckoMarketsCoin) => {
            return (
                <div key={coin.id}>
                  <MarketCoin coin={coin}/>
                </div>
            )
          })
        }
      </div>
  );
}

export default MarketTable;