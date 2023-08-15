import {forEach} from "lodash";
import {CoinAlert} from "../models/coin/CoinAlert";


export const allLoading = (requests: Array<any>): boolean => {
  let result = false
  forEach(requests, request => {
    if (request.isLoading) result = true
  })
  return result
}

export const allError = (requests: Array<any>): boolean => {
  let result = false
  forEach(requests, request => {
    if (request.error) result = true
  })
  return result
}
export const allData = (requests: Array<any>): boolean => {
  let result = true
  forEach(requests, request => {
    if (!request.data) result = false
  })
  return result
}

export function addWhiteSpaceAfterThreeCharacters(string: number): string {
  return string.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

}

export function concatTrendingIds(array: any): string {
  let result = ''


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

export function concatSearchedIds(array: any): string {
  let result = ''


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

export function concatSidebarCoinAlertsIds(array: CoinAlert[]): string {
  let result = ''


  for (let i = 0; i < array.length; i++) {
    let curEl = array[i]
    if (i === array.length - 1) {
      result += curEl.coinId
      break
    }
    result += curEl.coinId + '%2C%20'
  }

  return result
}