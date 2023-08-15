import React, {useState} from 'react';
import {useQueries, useQuery} from "react-query";
import axios from "axios";
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
import CoinGeckoFullCoinInfo from "../models/coin/CoinGeckoFullCoinInfo";
import {useSelector} from "react-redux";
import {selectAuth} from "../features/auth/authSlice";
import ShowTemplate from "../components/UI/show/ShowTemplate";


const Show = () => {
  const axiosPrivate = useAxiosPrivate();

//trigger token refresh on page reload
  const currentUserData = useQuery(
      {
        queryKey: ['currentUser'],
        queryFn:
            async () => {
              await axiosPrivate.get("http://localhost:8080/api/v1/users/currentUser")
            }
      }
  )

  const {user} = useSelector(selectAuth);


  const [toggledMenu, setToggledMenu] = useState(false);
  const width = useWindowSize();

  const params = useParams()

  const [chartCoin, coinDesc] = useQueries(
      [
        {
          queryKey: ['chartCoins'],
          queryFn:
              async () => {
                return await axios.get(`https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=usd&days=7`).then(response => response.data)
              }
        },
        {
          queryKey: ['coinDesc'],
          queryFn:
              async () => {
                return await axios.get<CoinGeckoFullCoinInfo>(`https://api.coingecko.com/api/v3/coins/${params.id}?localization=false&market_data=true`).then(response => response.data)
              }
        }
      ]
  )

  const chartData = useChartDataDefine(chartCoin.data)

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
    const change = coinDesc.data.market_data.price_change_percentage_24h

    return (
        <ShowTemplate
            width={width}
            toggledMenu={toggledMenu}
            setToggledMenu={setToggledMenu}
        >
          <CoinChartHeader
              coinDesc={coinDesc}
              chartData={chartData}
              change={change}
          />
          <div className={'flex flex-col pt-24'}>
            <div className={'w-[99%] h-[500px]'}>
              <CoinChart
                  chartData={chartData}
                  currentPrice={Math.round(coinDesc.data.market_data.current_price.usd)}
              />
            </div>
            <PeriodButtons/>

            <CoinChartDescription coinDesc={coinDesc}/>

            {user ?
                <AlertForm coinDesc={coinDesc.data}/> :
                <div> Log In to create an alert</div>
            }
          </div>
        </ShowTemplate>
    )
  }


  return <></>

};

export default Show;
