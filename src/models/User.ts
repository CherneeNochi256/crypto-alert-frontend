import {CoinAlert} from "./coin/CoinAlert";


export default interface User {

  id: number,
  username: string,
  email: string,
  emailConfirmed: boolean
  coinAlerts: CoinAlert[]

}