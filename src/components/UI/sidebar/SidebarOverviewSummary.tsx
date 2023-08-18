import React from 'react';
import {addWhiteSpaceAfterThreeCharacters} from "../../../utils/MarketUtils";
import CoinGeckoFullCoinInfo from "../../../models/coin/coinGecko/CoinGeckoFullCoinInfo";

interface Props {
  data: CoinGeckoFullCoinInfo
}

function SidebarOverviewSummary({data}: Props) {
  let currentPrice: number

  if (data.market_data.current_price.usd > 0.1) currentPrice = data.market_data.current_price.usd
  else if (data.market_data.current_price.usd > 0.0001) currentPrice = Number(data.market_data.current_price.usd.toFixed(5))
  else currentPrice = Number(data.market_data.current_price.usd.toFixed(7))

  return (
      <div className={'flex-col text-lg py-4 px-2 '}>
        <div className=" my-auto flex gap-3">
          <div className={'w-7 h-7 '}>
            <img src={data.image.small} alt=""/>
          </div>
          <div className={'flex items-center uppercase'}>
            {data.symbol}
          </div>
        </div>
        <div className={'flex gap-2 mt-4'}>
          <div className={`text-3xl flex items-center `}>
            {currentPrice}
          </div>
          <div className={'text-sm flex items-end'}>
            USD
          </div>
          <div
              className={` ml-3 text-lg flex items-end ${data.market_data.price_change_24h > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {data.market_data.price_change_24h.toFixed(4)} ({data.market_data.price_change_percentage_24h}%)
          </div>
        </div>
        <div className={'flex space-x-2'}>
          <div className={'w-2 h-2 bg-green-600 rounded-full self-center'}></div>
          <div className={'text-[12px] text-green-600'}>
            MARKET OPEN
          </div>
        </div>
        <div className={'text-sm mt-4'}>
          KEY STATS
        </div>
        <div className={'flex justify-between'}>
          <div className={'text-gray-500 text-[12px] ml-2'}> VOLUME</div>
          <div
              className={'text-[12px] mr-2'}> {addWhiteSpaceAfterThreeCharacters(data.market_data.total_volume.usd)}$
          </div>
        </div>
        <div className={'flex justify-between'}>
          <div className={'text-gray-500 text-[12px] ml-2'}> PUB INTEREST SCORE</div>
          <div className={'text-[12px] mr-2'}> {data.public_interest_score}</div>
        </div>

        <div className={'text-sm mt-4'}>
          PERFORMANCE
        </div>
        <div className={'flex gap-4 mt-4 ml-4 text-white justify-center'}>
          <div
              className={`w-24 h-12 ${data.market_data.price_change_percentage_7d > 0 ? 'bg-green-900' : 'bg-red-900'} text-lg`}>
            <div className={'text-center'}>
              {data.market_data.price_change_percentage_7d.toFixed(2)}%
            </div>
            <div className={'text-center text-sm text-gray-500'}>
              7D
            </div>
          </div>
          <div
              className={`w-24 h-12 ${data.market_data.price_change_percentage_14d > 0 ? 'bg-green-900' : 'bg-red-900'} text-lg`}>
            <div className={'text-center'}>
              {data.market_data.price_change_percentage_14d.toFixed(2)}%
            </div>
            <div className={'text-center text-sm text-gray-500'}>
              14D
            </div>
          </div>
          <div
              className={`w-24 h-12 ${data.market_data.price_change_percentage_30d > 0 ? 'bg-green-900' : 'bg-red-900'} text-lg`}>
            <div className={'text-center'}>
              {data.market_data.price_change_percentage_30d.toFixed(2)}%
            </div>
            <div className={'text-center text-sm text-gray-500'}>
              1M
            </div>
          </div>
        </div>

        <div className={'flex gap-4 mt-4 ml-4 text-white justify-center'}>
          <div
              className={`w-24 h-12 ${data.market_data.price_change_percentage_60d > 0 ? 'bg-green-900' : 'bg-red-900'} text-lg`}>
            <div className={'text-center'}>
              {data.market_data.price_change_percentage_60d.toFixed(2)}%
            </div>
            <div className={'text-center text-sm text-gray-500'}>
              2M
            </div>
          </div>
          <div
              className={`w-24 h-12 ${data.market_data.price_change_percentage_200d > 0 ? 'bg-green-900' : 'bg-red-900'} text-lg`}>
            <div className={'text-center'}>
              {data.market_data.price_change_percentage_200d.toFixed(2)}%
            </div>
            <div className={'text-center text-sm text-gray-500'}>
              6M
            </div>
          </div>
          <div
              className={`w-24 h-12 ${data.market_data.price_change_percentage_1y > 0 ? 'bg-green-900' : 'bg-red-900'} text-lg`}>
            <div className={'text-center'}>
              {data.market_data.price_change_percentage_1y.toFixed(2)}%
            </div>
            <div className={'text-center text-sm text-gray-500'}>
              1Y
            </div>
          </div>
        </div>

      </div>
  );
}

export default SidebarOverviewSummary;