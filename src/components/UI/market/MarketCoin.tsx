import React from 'react';
import {Link} from "react-router-dom";
import {addWhiteSpaceAfterThreeCharacters} from '../../../utils/MarketUtils'
import CoinGeckoMarketsCoin from "../../../models/coin/coinGecko/CoinGeckoMarketsCoin";

interface Props {
  coin: CoinGeckoMarketsCoin
}

function MarketCoin({coin}: Props) {
  const price = coin.current_price
  const change = coin.price_change_percentage_24h
  const name = coin.name


  return (
      <Link to={`/${coin.id}`}>
        <div className={"grid grid-cols-4 grid-rows-1 text-left font-normal"}>
          <div className={"px-6 py-4 border-b bg-transparent flex gap-2"}>
            {<img src={coin.image} width={60} alt=""/>}
            <div className={"mt-4 md:block hidden "}>{name.length > 10 ? name.substring(0, 10) + '...' : name}</div>
          </div>
          <div className={"px-6 py-4 border-b bg-transparent"}>

            <div className={"mt-4  text-2xl text-left"}>
              $ {price < 0.05 ? price.toFixed((7)) : price.toFixed((2))}
            </div>

          </div>
          <div className={"px-6 py-4 border-b bg-transparent"}>

            <div
                className={`mt-4 font-bold text-2xl ${change && change > 0 ? 'text-green-500' : 'text-red-500'} `}>
              {change ? change.toFixed(2) : 'No data'}%
            </div>

          </div>
          <div className={"px-6 py-4 border-b bg-transparent"}>

            <div className="mt-4">
              $ {addWhiteSpaceAfterThreeCharacters(coin.market_cap)}
            </div>
          </div>
        </div>
      </Link>
  );
}

export default MarketCoin;