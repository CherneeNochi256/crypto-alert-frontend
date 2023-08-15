import React from 'react';
import {Link} from "react-router-dom";

function Coin(props: any) {


  return (
      <div className={"mx-auto "}>
        <Link to={`/${props.id}`}>
          <div className={"flex-col text-center w-40 items-center"}>
            <img className={"w-32 mx-auto mb-4"} src={props.img} alt=""/>
            <div className={"flex justify-around gap-2 "}>
              <div
                  className={"font-bold"}>{props.name.length > 10 ? props.name.substring(0, 10) + '...' : props.name}</div>
              <div
                  className={`font-bold text-2xl ${props.change && props.change > 0 ? 'text-green-500' : 'text-red-500'} `}>{props.change ? props.change.toFixed(2) : '0'}%
              </div>
            </div>
            <div
                className={"font-bold text-2xl text-center"}>$ {props.price < 0.05 ? props.price.toFixed((7)) : props.price.toFixed((2))}</div>
          </div>
        </Link>
      </div>
  );
}

export default Coin;