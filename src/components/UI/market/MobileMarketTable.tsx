import React from 'react';
import Coin from "../common/Coin";
import CoinGeckoMarketsCoin from "../../../models/coin/coinGecko/CoinGeckoMarketsCoin";

interface Props {
  coinsData: CoinGeckoMarketsCoin[]
}

function MobileMarketTable({coinsData}: Props) {
  return (
      <div className={"sm:hidden flex flex-col mt-24 gap-12 "}>
        {
          coinsData.map((coin: CoinGeckoMarketsCoin) => {
            return (
                <div className={"mx-auto"} key={coin.id}>
                  <Coin
                      coin={coin}
                  />
                </div>
            )
          })
        }
      </div>
  );
}

export default MobileMarketTable;