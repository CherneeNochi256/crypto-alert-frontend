import React from 'react';
import SidebarOverviewCoin from "./SidebarOverviewCoin";
import CoinGeckoMarketsCoin from "../../../models/coin/coinGecko/CoinGeckoMarketsCoin";

interface Props {
  data: CoinGeckoMarketsCoin[],
  setCoinId: (value: string) => void
}

function SidebarOverviewTable({data, setCoinId}: Props) {

  return (
      <div className={'w-full'}>
        <div className={'flex pl-3 w-full'}>
          <div className="w-full shadow-md sm:rounded-lg text-sm">
            <div className="text-left ">
              <div
                  className=" w-full text-my-white flex justify-between ">
                <div className=" my-auto">
                  Symbol
                </div>
                <div className={'flex gap-8 sm:gap-36 md:gap-16 mr-2'}>
                  <div className="  my-auto">
                    Last
                  </div>
                  <div className=" my-auto">
                    Chg
                  </div>
                  <div className=" my-auto">
                    Chg%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={'max-h-[350px] overflow-y-scroll border-b-8  border-my-gray scrollbar-hide'}>

          {
            data.map((coin: CoinGeckoMarketsCoin) => {
              return (
                  <div key={coin.id} onClick={() => setCoinId(`${coin.id}`)}>
                    <SidebarOverviewCoin
                        coin={coin}
                    />
                  </div>
              )

            })}
        </div>

      </div>
  );
}

export default SidebarOverviewTable;