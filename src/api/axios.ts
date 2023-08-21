import axios from "axios";

// const BASE_URL = 'http://localhost:8080/api/v1/' for dev
const BASE_URL = 'https://crypto-alerts-backend.onrender.com/api/v1/'
const COIN_GECKO_BASE_URL = 'https://api.coingecko.com/api/v3/'
const COIN_NEWS_BASE_URL = 'https://newsdata.io/api/1/'

export default axios.create({
  baseURL: BASE_URL,
  headers: {'Content-Type': 'application/json'},
  withCredentials: true
});


export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {'Content-Type': 'application/json'},
  withCredentials: true
});

export const coinGeckoApi = axios.create(
    {
      baseURL: COIN_GECKO_BASE_URL
    }
)

export const coinsNewsApi = axios.create((
    {
      baseURL: COIN_NEWS_BASE_URL
    }
))