import {useEffect, useState} from "react";




export interface ChartCoinFetched {
  prices: [],

}

export default function useChartDataDefine(chartCoins: ChartCoinFetched) {
  const [charData, setChartData] = useState(new Array())
  useEffect(() => {
    if (chartCoins) {
      setChartData((chartCoins.prices.map((el: Array<number>): { date: string; price: number } => {
                const [timestamp, price] = el
                const date = new Date(timestamp).toISOString()
                return ({
                      date,
                      price
                    }
                )
              })
          )
      )
    }
  }, [chartCoins])
  return charData
}