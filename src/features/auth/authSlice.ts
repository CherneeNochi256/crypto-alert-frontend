import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from '../../store'
import User from "../../models/User";
import {CoinAlert} from "../../models/coin/CoinAlert";


export interface AuthState {
  user: User | undefined,
  accessToken: string | undefined
}

// Define the initial state using that type
const initialState: AuthState = {
  user: undefined,
  accessToken: undefined
}

export const authSlide = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action:PayloadAction<User | undefined>) => {
      state.user = action.payload
    },
    setAccessToken: (state, action:PayloadAction<string | undefined>) => {
      state.accessToken = action.payload
    },
    addCoinAlert: (state, action:PayloadAction<CoinAlert> ) =>{
      state.user?.coinAlerts.unshift(action.payload)
    }
  }
})

export const {setUser, setAccessToken,addCoinAlert} = authSlide.actions

export const selectAuth = (state: RootState) => state.auth

export default authSlide.reducer