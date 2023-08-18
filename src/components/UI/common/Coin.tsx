import React from 'react';
import {Link} from "react-router-dom";
import CoinGeckoMarketsCoin from "../../../models/coin/coinGecko/CoinGeckoMarketsCoin";

interface Props {
  coin: CoinGeckoMarketsCoin
}

function Coin({coin}: Props) {
  const price = coin.current_price
  const change = coin.price_change_percentage_24h
  const name = coin.name


  return (
      <div className={"mx-auto "}>
        <Link to={`/${coin.id}`}>
          <div className={"flex-col text-center w-40 items-center"}>
            <img className={"w-32 mx-auto mb-4"} src={coin.image} alt=""/>
            <div className={"flex justify-around gap-2 "}>
              <div
                  className={"font-bold"}>{name.length > 10 ? name.substring(0, 10) + '...' : name}</div>
              <div
                  className={`font-bold text-2xl ${change && change > 0 ? 'text-green-500' : 'text-red-500'} `}>{change ? change.toFixed(2) : '0'}%
              </div>
            </div>
            <div
                className={"font-bold text-2xl text-center"}>$ {price < 0.05 ? price.toFixed((7)) : price.toFixed((2))}</div>
          </div>
        </Link>
      </div>
  );
}

export default Coin;