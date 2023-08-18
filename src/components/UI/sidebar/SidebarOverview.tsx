import React, {useState} from 'react';
import SidebarTemplate from "./SidebarTemplate";

import SidebarOverviewTable from "./SidebarOverviewTable";
import SidebarOverviewSummary from "./SidebarOverviewSummary";
import Loading from "../common/Loading";
import Error from "../common/Error";
import {useQuery} from "react-query";
import {coinGeckoApi} from "../../../api/axios";
import CoinGeckoFullCoinInfo from "../../../models/coin/coinGecko/CoinGeckoFullCoinInfo";
import CoinGeckoMarketsCoin from "../../../models/coin/coinGecko/CoinGeckoMarketsCoin";


function SidebarOverview() {
  const [coinId, setCoinId] = useState('bitcoin');


  const markets = useQuery(
      {
        queryKey: ['coinList'],
        queryFn:
            async () => {
              return await coinGeckoApi.get<CoinGeckoMarketsCoin[]>(`coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`).then(res => res.data)
            }
      }
  );

  const currentCoin = useQuery(
      {
        queryKey: ['fullCurrentCoinInfo', coinId],
        queryFn:
            async () => {
              return await coinGeckoApi.get<CoinGeckoFullCoinInfo>(`coins/${coinId}?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false`).then(response => response.data)
            },
        enabled: !!coinId
      }
  )


  if (markets.isLoading || currentCoin.isLoading) return (
      <SidebarTemplate title={'OVERVIEW'}
                       titlePosition={'right-24'}
      >
        <div className={'flex-col w-[99%] md:w-[384px] mx-auto rounded-lg shadow justify-center items-center'}>
          <Loading/>
        </div>
      </SidebarTemplate>
  )
  else if (markets.error || currentCoin.error) return (

      <SidebarTemplate title={'OVERVIEW'}
                       titlePosition={'right-24'}
      >
        <div className={'flex-col w-[99%] md:w-[384px] mx-auto rounded-lg shadow justify-center items-center '}>
          <Error padding={'p-6'}/>
        </div>
      </SidebarTemplate>
  )
  else if (markets.data && currentCoin.data) {
    return (
        <SidebarTemplate title={'OVERVIEW'}
                         titlePosition={'right-24'}
        >
          <div className={' flex-col w-[99%] md:w-[384px] mx-auto rounded-lg shadow justify-center items-center'}>

            <SidebarOverviewTable
                data={markets.data}
                setCoinId={setCoinId}
            />

            <SidebarOverviewSummary
                data={currentCoin.data}
            />
          </div>
        </SidebarTemplate>
    );
  }
  return <></>
}

export default SidebarOverview;