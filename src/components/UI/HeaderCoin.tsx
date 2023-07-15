import React from 'react';

function HeaderCoin(props:any) {


  return (
      <div className={"mx-auto"}>
        <div className={"flex-col text-center w-40 items-center"}>
          <img className={"w-32 mx-auto mb-4"} src={props.img} alt=""/>
          <div className={"flex justify-around gap-2 "}>
            <div className={"font-bold"}>{props.name}</div>
            <div className={`font-bold text-2xl ${props.change > 0? 'text-green-500':'text-red-500'} `}>{props.change.toFixed(2)}%</div>
          </div>
          <div className={"font-bold text-2xl text-center"}>$ {props.price < 0.05? props.price.toFixed((7)):props.price.toFixed((2))}</div>
        </div>
      </div>
  );
}

export default HeaderCoin;