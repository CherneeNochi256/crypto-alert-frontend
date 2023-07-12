import React from 'react';
import {useQueries} from "react-query";
import axios from "axios";
import {useParams} from "react-router-dom";
import {Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis} from "recharts";
import useChartDataDefine from "../hooks/useChartDataDefine";
// @ts-ignore
import DOMPurify from "dompurify";
// @ts-ignore
import { format } from "d3-format";


const Show = () => {

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
                return await axios.get(`https://api.coingecko.com/api/v3/coins/${params.id}?localization=false&market_data=true`).then(response => response.data)
              }
        }
      ]
  )

  const chartData = useChartDataDefine(chartCoin.data)

  if (chartCoin.isLoading || coinDesc.isLoading) return <> Loading...</>

  else if (chartCoin.error || coinDesc.error) return <>Oops... something went wrong </>

  else if (chartCoin.data && coinDesc.data) {

    const priceUsd = coinDesc.data.market_data.current_price.usd

    let formatValue
    if (priceUsd > 100) formatValue = format(".0f")
    else if (priceUsd > 0.0099) formatValue = format(".3f")
    else formatValue = format(".15f");

    return (
        <>
          <AreaChart
              width={500}
              height={400}
              data={chartData}
              margin={{
                top: 10,
                right: 0,
                left: 100,
                bottom: 0
              }}
          >
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="date"/>
            <YAxis domain={[priceUsd]}
                   tickFormatter={formatValue}/>
            <Tooltip/>
            <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#000"/>
          </AreaChart>


          <>

            <>
              <div className=""><p>
                {coinDesc.data.name}
              </p></div>
              <div className=""><p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                        coinDesc.data.description.en
                    ),
                  }}
              >
              </p></div>
            </>

          </>
        </>
    );
  }

  return <></>

};

export default Show;