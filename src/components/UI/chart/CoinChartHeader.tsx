import React from 'react';
import CoinGeckoFullCoinInfo from "../../../models/coin/coinGecko/CoinGeckoFullCoinInfo";
import ChartDataPoint from "../../../models/coin/ChartDataPoint";

interface Props {
  coinDesc: CoinGeckoFullCoinInfo
  chartData: ChartDataPoint[]
}

function CoinChartHeader({coinDesc, chartData}: Props) {
  const change = coinDesc.market_data.price_change_percentage_24h
  return (
      <div className={'flex-col flex space-y-5 sm:flex-row justify-between items-center text-5xl'}>
        <h4 className={'w-28 '}><img src={coinDesc.image.large} alt=""/></h4>
        <div className={'flex items-center gap-5'}>
          <h4>{(chartData[chartData.length - 1].price).toFixed(2)} $</h4>
          <div className={'flex flex-col justify-center font-thin gap-1 text-[20px]'}>
            <p className={`${change > 0 ? 'text-green-600' : 'text-red-600'}`}>% {change.toFixed(2)}</p>
            <p className={'text-sm'}>24h Change</p>
          </div>
        </div>
      </div>
  );
}

export default CoinChartHeader;