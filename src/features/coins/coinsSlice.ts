import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";

// export const fetchTradingCoins = createAsyncThunk('data/fetchTradingCoins', async () => {
//   const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
//   return response.data;
// });


export interface TrendingCoin {
  item: {
    id: string,
    name: string,
    large: string,
    price_btc: number
  };
}

export interface SearchedCoin {
    id: string,
    name: string,
    large: string,
    price_btc: number
}

export interface ChartCoin {
  date: string,
  price:number
}

export interface ChartCoinFetched {
  prices: [],

}

export interface CoinsState {
chartCoins: ChartCoin[]
}

const initialState: CoinsState = {
  chartCoins: []
}

export const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    updateChartCoins: (state, action) => {
      state.chartCoins = action.payload
    },
  }
})

export const {updateChartCoins} = coinsSlice.actions

export default coinsSlice.reducer