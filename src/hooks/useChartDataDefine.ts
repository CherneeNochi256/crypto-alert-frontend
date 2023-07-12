import {useEffect, useState} from "react";
import {ChartCoin, ChartCoinFetched} from "../features/coins/coinsSlice";


export default function useChartDataDefine(chartCoins: ChartCoinFetched) {
  const [charData, setChartData] = useState(new Array())
  useEffect(() => {
    if (chartCoins) {
      setChartData((chartCoins.prices.map((el: Array<number>):ChartCoin => {
        const [timestamp, price] = el
            const date = new Date(timestamp).toLocaleDateString()
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