import React from 'react';
import {Link} from "react-router-dom";

function MarketCoin(props: any) {
  return (
      <Link to={`/${props.key}`}>
      <div key={props.key} className={"grid grid-cols-4 grid-rows-1 text-left font-normal"}>
        <div className={"px-6 py-4 border-b bg-transparent flex gap-2"}>
            {<img src={props.img} width={60} alt=""/>}
          <div className={"mt-4 md:block hidden"}>{props.name}</div>
        </div>
        <div className={"px-6 py-4 border-b bg-transparent"}>

          <div className={"mt-4  text-2xl text-center"}>
            $ {props.price < 0.05? props.price.toFixed((7)):props.price.toFixed((2))}
          </div>

        </div>
        <div className={"px-6 py-4 border-b bg-transparent"}>

          <div className={`mt-4 font-bold text-2xl ${props.change > 0? 'text-green-500':'text-red-500'} `}>
            {props.change.toFixed(2)}%
          </div>

        </div>
        <div className={"px-6 py-4 border-b bg-transparent"}>

            <div className="mt-4">
              {props.change}
            </div>
        </div>
      </div>
</Link>
  );
}

export default MarketCoin;