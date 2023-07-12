import React from 'react';
import {TrendingCoin} from "../../features/coins/coinsSlice";
import {Link} from "react-router-dom";

function MarketCoin(props:any) {
  return (
      <div>
       <div className=""><img src={props.img} alt=""/></div>
      </div>
  );
}

export default MarketCoin;