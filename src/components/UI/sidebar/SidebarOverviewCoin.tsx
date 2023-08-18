import React from 'react';
import CoinGeckoMarketsCoin from "../../../models/coin/coinGecko/CoinGeckoMarketsCoin";

interface Props {
  coin: CoinGeckoMarketsCoin
}

function SidebarOverviewCoin({coin}: Props) {
  return (
      <div>
        <div className={'w-full flex pl-3 pt-4 border-b'}>
          <div className="w-full shadow-md sm:rounded-lg text-sm">
            <div className="text-left ">
              <div
                  className=" text-my-white flex justify-between  sm:text-sm text-[11px]">

                <div className="w-14 my-auto flex gap-3">
                  <div className={'w-7 h-7'}>
                    <img width={24} height={24} src={coin.image} alt=""/>
                  </div>
                  <div className={'uppercase'}>
                    {coin.symbol.substring(0, 3)}
                  </div>
                </div>

                <div className={'flex gap-4 sm:gap-28 md:gap-8 mr-2'}>
                  <div className={" w-[45px]  sm:w-[60px] my-auto"}>
                    ${coin.current_price}
                  </div>
                  <div
                      className={` w-[40px]  sm:w-[55px] my-auto ${coin.price_change_24h < 0 ? 'text-red-600' : 'text-green-600'}`}>
                    {coin.price_change_24h.toFixed(4)}
                  </div>
                  <div
                      className={`  my-auto ${coin.price_change_percentage_24h < 0 ? 'text-red-600' : 'text-green-600'}`}>
                    {coin.price_change_percentage_24h.toFixed(4)}%
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
  );
}

export default SidebarOverviewCoin;