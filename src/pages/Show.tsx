import React, {useState} from 'react';
import {useQueries, useQuery} from "react-query";
import {useParams} from "react-router-dom";
import useChartDataDefine from "../hooks/useChartDataDefine";
import Error from "../components/UI/common/Error";
import Loading from "../components/UI/common/Loading";
import CoinChart from "../components/UI/chart/CoinChart";
import PeriodButtons from "../components/UI/chart/PeriodButtons";
import AlertForm from "../components/AlertForm";
import CoinChartHeader from "../components/UI/chart/CoinChartHeader";
import CoinChartDescription from "../components/UI/chart/CoinChartDescription";
import useWindowSize from "../hooks/useWindowSize";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import CoinGeckoFullCoinInfo from "../models/coin/coinGecko/CoinGeckoFullCoinInfo";
import {useSelector} from "react-redux";
import {selectAuth} from "../features/auth/authSlice";
import ShowTemplate from "../components/UI/show/ShowTemplate";
import {coinGeckoApi} from "../api/axios";
import CoinGeckoMarketChartResponse from "../models/coin/coinGecko/CoinGeckoMarketChartResponse";
import ChartDataPoint from "../models/coin/ChartDataPoint";


const Show = () => {
  const axiosPrivate = useAxiosPrivate();

//trigger token refresh on page reload
  const currentUserData = useQuery(
      {
        queryKey: ['currentUser'],
        queryFn:
            async () => {
              await axiosPrivate.get("users/currentUser")
            }
      }
  )

  const {user} = useSelector(selectAuth);

  const [toggledMenu, setToggledMenu] = useState(false);
  const [daysAmount, setDaysAmount] = useState('7')

  const width = useWindowSize();

  const params = useParams()

  const [chartCoin, coinDesc] = useQueries(
      [
        {
          queryKey: ['chartCoin', daysAmount],
          queryFn:
              async () => {
                return await coinGeckoApi.get<CoinGeckoMarketChartResponse>(`coins/${params.id}/market_chart?vs_currency=usd&days=${daysAmount}`).then(response => response.data)
              },
          enabled: !!daysAmount
        },
        {
          queryKey: ['coinDesc'],
          queryFn:
              async () => {
                return await coinGeckoApi.get<CoinGeckoFullCoinInfo>(`coins/${params.id}?localization=false&market_data=true`).then(response => response.data)
              }
        }
      ]
  )

  const chartData: ChartDataPoint[] = useChartDataDefine(chartCoin?.data?.prices)

  if (chartCoin.isLoading || coinDesc.isLoading) {
    return (
        <ShowTemplate
            width={width}
            toggledMenu={toggledMenu}
            setToggledMenu={setToggledMenu}
        >
          <Loading padding={'p-48'}/>
        </ShowTemplate>
    )
  } else if (chartCoin.error || coinDesc.error) {
    return (
        <ShowTemplate
            width={width}
            toggledMenu={toggledMenu}
            setToggledMenu={setToggledMenu}
        >
          <Error padding={'p-48'}/>
        </ShowTemplate>
    )
  } else if (chartCoin.data && coinDesc.data && chartData[chartData.length - 1]) {

    return (
        <ShowTemplate
            width={width}
            toggledMenu={toggledMenu}
            setToggledMenu={setToggledMenu}
        >
          <CoinChartHeader
              coinDesc={coinDesc.data}
              chartData={chartData}
          />
          <div className={'flex flex-col pt-24'}>
            <div className={'w-[99%] h-[500px]'}>
              <CoinChart
                  chartData={chartData}
                  currentPrice={Math.round(coinDesc.data.market_data.current_price.usd)}
              />
            </div>
            <PeriodButtons setDaysAmount={setDaysAmount}/>

            <CoinChartDescription coinDesc={coinDesc}/>

            {user ?
                <AlertForm coinDesc={coinDesc.data}/> :
                <div className={'text-4xl text-red-600 pb-12'}>
                  You need to log in to create an alert...
                </div>
            }
          </div>
        </ShowTemplate>
    )
  }


  return <></>

};

export default Show;
