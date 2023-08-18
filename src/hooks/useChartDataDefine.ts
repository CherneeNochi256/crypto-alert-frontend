import {useEffect, useState} from "react";
import ChartDataPoint from "../models/coin/ChartDataPoint";


export default function useChartDataDefine(prices: Array<number[]> | undefined) {
  const [charData, setChartData] = useState([] as Array<ChartDataPoint>)
  useEffect(() => {
    if (prices) {
      setChartData((prices.map(el => {
                const timestamp = el[0]
                const price = el[1]
                const date = new Date(timestamp).toISOString()
                const chartDataPoint: ChartDataPoint = {
                  date,
                  price
                }
                return chartDataPoint
              })
          )
      )
    }
  }, [prices])
  return charData
}