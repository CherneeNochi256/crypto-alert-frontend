import React from 'react';
import Coin from "../common/Coin";

function MobileMarketTable(props: any) {
  return (
      <div className={"sm:hidden flex flex-col mt-24 gap-12 "}>
        {
          props.coinsData.map((coin: any) => {
            return (
                <div className={"mx-auto"} key={coin.id}>
                  <Coin
                      id={coin.id}
                      img={coin.image}
                      name={coin.name}
                      price={coin.current_price}
                      change={coin.price_change_percentage_24h}
                  ></Coin>
                </div>
            )
          })
        }
      </div>
  );
}

export default MobileMarketTable;