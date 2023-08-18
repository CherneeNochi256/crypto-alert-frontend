import React from 'react';
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {format, parseISO} from "date-fns";
import CustomTooltip from "./CustomTooltip";
import ChartDataPoint from "../../../models/coin/ChartDataPoint";

interface Props {
  chartData: ChartDataPoint[]
  currentPrice: number
}

function CoinChart({chartData, currentPrice}: Props) {
  return (

      <ResponsiveContainer className={'row-span-2 '} width="100%">
        <AreaChart
            data={chartData}
            className={'text-sm '}
        >
          <defs>
            <linearGradient id={'color'} x1={'0'} y1={'0'} x2={'0'} y2={'1'}>
              <stop offset={'0%'} stopColor={'#7d2cbb'} stopOpacity={0.4}/>
              <stop offset={'75%'} stopColor={'#7d2cbb'} stopOpacity={0.1}/>
            </linearGradient>
          </defs>
          <CartesianGrid opacity={0.1} vertical={false}/>
          <XAxis dataKey="date"
                 tickLine={false}
                 tickFormatter={dateISO => {
                   const date = parseISO(dateISO)
                   if ((date.getDate() % 2) === 0 && ((date.getHours() === 12) || (date.getHours() === 13) || (date.getHours() === 14) || (date.getHours() === 15) || (date.getHours() === 16))) {
                     return format(date, 'MMM, d')
                   }
                   return ''
                 }}
                 tickCount={8}
                 axisLine={false}

          />

          <YAxis domain={[currentPrice]}
                 tickFormatter={(priceUsd) => {

                   if (priceUsd > 0.0) return `$${priceUsd.toFixed(2)}`
                   else if (priceUsd > 0.0099) return `$${priceUsd.toFixed(5)}`
                   else return `$${priceUsd.toFixed(10)}`
                 }}
                 tickLine={false}
                 tickCount={8}
                 axisLine={false}
                 orientation={'right'}
                 fill={'0'}/>

          <Tooltip content={<CustomTooltip/>}/>
          <Area type="monotone" dataKey="price" stroke="#7d2cbb" fill="url(#color)"/>
        </AreaChart>
      </ResponsiveContainer>
  );
}

export default CoinChart;