import React from 'react';
import MarketCoin from "./MarketCoin";

function MarketTable(props: any) {
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

          props.coinsData.map((coin: any) => {
            return (
                <div key={coin.id}>
                  <MarketCoin
                      id={coin.id}
                      img={coin.image}
                      name={coin.name}
                      price={coin.current_price}
                      change={coin.price_change_percentage_24h}
                      marketCap={coin.market_cap}
                  ></MarketCoin>
                </div>
            )
          })
        }
      </div>
  );
}

export default MarketTable;