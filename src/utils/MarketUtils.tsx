import CoinGeckoTrendingCoin from "../models/coin/coinGecko/CoinGeckoTrendingCoin";
import CoinGeckoSearchCoin from "../models/coin/coinGecko/CoinGeckoSearchCoin";


export function addWhiteSpaceAfterThreeCharacters(string: number): string {
  return string.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

}

export function concatTrendingIds(array: CoinGeckoTrendingCoin[] | undefined): string {
  let result = ''
  if (!array) return result


  for (let i = 0; i < array.length; i++) {
    let curEl = array[i]
    if (i === array.length - 1) {
      result += curEl.item.id
      break
    }
    result += curEl.item.id + '%2C%20'
  }

  return result
}

export function concatSearchedIds(array: CoinGeckoSearchCoin[] | undefined): string {
  let result = ''
  if (!array) return result


  for (let i = 0; i < array.length; i++) {
    let curEl = array[i]
    if (i === array.length - 1) {
      result += curEl.id
      break
    }
    result += curEl.id + '%2C%20'
  }

  return result
}