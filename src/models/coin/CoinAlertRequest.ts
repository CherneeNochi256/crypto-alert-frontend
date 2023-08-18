export default interface CoinAlertRequest {
  coinId: string,
  startPrice: number,
  desiredPrice: number,
  sendOnEmail: boolean,
  image: string
}