import {forEach} from "lodash";


export const allLoading = (requests:Array<any>):boolean => {
  let result = false
  forEach(requests, request => {
    if (request.isLoading) result = true
  })
  return result
}

export const allError = (requests:Array<any>):boolean => {
  let result = false
  forEach(requests, request => {
    if (request.error) result = true
  })
  return result
}
export const allData = (requests:Array<any>):boolean => {
  let result = true
  forEach(requests, request => {
    if (!request.data) result = false
  })
  return result
}