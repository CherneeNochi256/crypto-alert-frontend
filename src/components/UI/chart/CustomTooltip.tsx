import React from 'react';
import {format, parseISO} from "date-fns";

function CustomTooltip(props: any) {

  if (props.active) {
    const date = parseISO(props.label)
    const priceUsd = props.payload[0].value
    return (
        <div
            className={'rounded bg-my-black text-my-white p-4 bg-gradient-to-tr from-indigo-800 via-purple-800 to-pink-500   shadow-lg shadow-my-black text-center'}>
          <div className={'text-center text-lg font-bold'}>
            {toFixed(priceUsd)}
          </div>
          <div>
            <p className={'text-center'}>
              {format(date, `d MMM, \`yy`)}
            </p>
            <p className={'text-center'}>
              {format(date, `HH:mm, eee`)}
            </p>
          </div>
        </div>
    );
  }
  return null
}

export default CustomTooltip;

function toFixed(priceUsd: number) {
  if (priceUsd > 100) return `$ ${priceUsd.toFixed(0)}`
  else if (priceUsd > 0.0099) return `$ ${priceUsd.toFixed(7)}`
  else return `$ ${priceUsd.toFixed(12)}`
}