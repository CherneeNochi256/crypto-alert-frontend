export interface CoinAlert {
  id: number,
  coinId: string,
  desiredPrice: number,
  coinReachedDesiredPrice: boolean,
  seen: boolean,
  image: string,
  updatedDate: string
}