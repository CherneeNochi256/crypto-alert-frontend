import React, {useEffect, useState} from 'react';
import SidebarTemplate from "./SidebarTemplate";

import SidebarOverviewTable, {CoinData} from "./SidebarOverviewTable";
import SidebarOverviewSummary from "./SidebarOverviewSummary";
import Loading from "../common/Loading";
import Error from "../common/Error";
import {MarketCoins} from "../../Sidebar";
import {useQuery} from "react-query";
import axios from "axios";
import {concatSearchedIds} from "../../../utils/Market";

type Props = {
  isLoading: boolean,
  error: unknown,
  data: MarketCoins | undefined
}

function SidebarOverview({isLoading, error, data}: Props) {
  const [coinId, setCoinId] = useState('bitcoin');


  const coinData = useQuery(
      {
        queryKey: ['searchedCoinsData', coinId],
        queryFn:
            async () => {
              return await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false`).then(response => response.data)
            },
        enabled: !!coinId
      }
  )

  const tableData: CoinData = {
    image: '',
    id: 'bitcoin',
    symbol: 'btc',
    current_price: 0.3232,
    price_change_24h: 32.56,
    price_change_percentage_24h: 36
  }

  const coinsData: CoinData[] = [tableData]

  if (isLoading || coinData.isLoading) return (
      <SidebarTemplate title={'OVERVIEW'}
                       titlePosition={'right-24'}
      >
        <div className={'flex-col w-[99%] md:w-[384px] mx-auto rounded-lg shadow justify-center items-center'}>
          <Loading/>
        </div>
      </SidebarTemplate>
  )
  else if (error || coinData.error) return (

      <SidebarTemplate title={'OVERVIEW'}
                       titlePosition={'right-24'}
      >
        <div className={'flex-col w-[99%] md:w-[384px] mx-auto rounded-lg shadow justify-center items-center '}>
          <Error padding={'p-6'}/>
        </div>
      </SidebarTemplate>
  )
  else if (data && coinData.data) {
    console.log(coinData.data)
    return (
        <SidebarTemplate title={'OVERVIEW'}
                         titlePosition={'right-24'}
        >
          <div className={' flex-col w-[99%] md:w-[384px] mx-auto rounded-lg shadow justify-center items-center'}>

            <SidebarOverviewTable
                data={data.data}
                setCoinId={setCoinId}
            />

            <SidebarOverviewSummary
                coinId={coinId}
                coinData={coinData.data}
            />
          </div>
        </SidebarTemplate>
    );
  }
  return <></>
}

export default SidebarOverview;