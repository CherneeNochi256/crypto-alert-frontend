export default interface CoinGeckoFullCoinInfo {
  id: string,
  name:string
  image:{
    large:string,
    small:string
  },
  market_data:{
    price_change_percentage_24h:number,
    current_price:{
      usd:number
    }
  }
}