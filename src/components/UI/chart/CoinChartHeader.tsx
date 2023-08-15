import React from 'react';

function CoinChartHeader(props: any) {
  return (
      <div className={'flex-col flex space-y-5 sm:flex-row justify-between items-center text-5xl'}>
        <h4 className={'w-28 '}><img src={props.coinDesc.data.image.large} alt=""/></h4>
        <div className={'flex items-center gap-5'}>
          <h4>{(props.chartData[props.chartData.length - 1].price).toFixed(2)} $</h4>
          <div className={'flex flex-col justify-center font-thin gap-1 text-[20px]'}>
            <p className={`${props.change > 0 ? 'text-green-600' : 'text-red-600'}`}>% {props.change.toFixed(2)}</p>
            <p className={'text-sm'}>24h Change</p>
          </div>
        </div>
      </div>
  );
}

export default CoinChartHeader;