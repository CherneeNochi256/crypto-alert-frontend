import React, {useState} from 'react';
import {SearchedCoin} from "../features/coins/coinsSlice";
import {Link} from "react-router-dom";
import MarketCoin from "./UI/MarketCoin";
import useDebounce from "../hooks/useDebounce";
import {useQueries} from "react-query";
import axios from "axios";
import SearchBar from "./UI/SearchBar";
import {allData, allError, allLoading} from "../utils/Market";

function Market(props: any) {

  const [query, setQuery] = useState('')

  const debouncedSearchTerm = useDebounce(query, 500)

  const [trendingCoins, searchedCoins] = useQueries(
      [
        {
          queryKey: ['trendingCoins'],
          queryFn:
              async () => {
                return await axios.get(`https://api.coingecko.com/api/v3/search/trending`).then(response => response.data)
              }
        },
        {
          queryKey: ['searchedCoins', debouncedSearchTerm],
          queryFn:
              async () => {
                if (debouncedSearchTerm) {
                  return await axios.get(`https://api.coingecko.com/api/v3/search?query=${debouncedSearchTerm}`).then(response => response.data)
                }
              }
        }
      ]
  )

  const trendingCoinsData = useQueries(
      [
        {
          queryKey: ['coin1', trendingCoins.data],
          queryFn:
              async () => {
                return await axios.get(`https://api.coingecko.com/api/v3/coins/${trendingCoins.data.coins[0].item.id}?localization=false&tickers=false`).then(response => response.data)
              },
          enabled: !!trendingCoins.data
        },
        {
          queryKey: ['coin2', trendingCoins.data],
          queryFn:
              async () => {
                return await axios.get(`https://api.coingecko.com/api/v3/coins/${trendingCoins.data.coins[1].item.id}?localization=false&tickers=false`).then(response => response.data)
              },
          enabled: !!trendingCoins.data
        },
        {
          queryKey: ['coin3', trendingCoins.data],
          queryFn:
              async () => {
                return await axios.get(`https://api.coingecko.com/api/v3/coins/${trendingCoins.data.coins[2].item.id}?localization=false&tickers=false`).then(response => response.data)
              },
          enabled: !!trendingCoins.data
        },
        {
          queryKey: ['coin4', trendingCoins.data],
          queryFn:
              async () => {
                return await axios.get(`https://api.coingecko.com/api/v3/coins/${trendingCoins.data.coins[3].item.id}?localization=false&tickers=false`).then(response => response.data)
              },
          enabled: !!trendingCoins.data
        },
        {
          queryKey: ['coin5', trendingCoins.data],
          queryFn:
              async () => {
                return await axios.get(`https://api.coingecko.com/api/v3/coins/${trendingCoins.data.coins[4].item.id}?localization=false&tickers=false`).then(response => response.data)
              },
          enabled: !!trendingCoins.data
        },
        {
          queryKey: ['coin6', trendingCoins.data],
          queryFn:
              async () => {
                return await axios.get(`https://api.coingecko.com/api/v3/coins/${trendingCoins.data.coins[5].item.id}?localization=false&tickers=false`).then(response => response.data)
              },
          enabled: !!trendingCoins.data
        },
        {
          queryKey: ['coin7', trendingCoins.data],
          queryFn:
              async () => {
                return await axios.get(`https://api.coingecko.com/api/v3/coins/${trendingCoins.data.coins[6].item.id}?localization=false&tickers=false`).then(response => response.data)
              },
          enabled: !!trendingCoins.data
        },
      ]
  )


  if (query !== '') {
    if (searchedCoins.isLoading) return <> Loading...</>

    else if (searchedCoins.error) return <>Oops... something went wrong </>

    else if (searchedCoins.data) {
      return (
          <>
            <SearchBar
                query={query}
                setQuery={setQuery}
            ></SearchBar>
            {
              searchedCoins.data.coins.map((coin: SearchedCoin) => {
                return (
                    <Link to={`/${coin.id}`}>
                      {coin.name}
                    </Link>
                )
              })
            }
          </>
      )
    }
  }


  if (allLoading(trendingCoinsData)) return <>is Loading...</>

  else if (allError(trendingCoinsData)) return <>Oops... something went wrong </>

  else if (allData(trendingCoinsData)) {
    return (
        <div>
          <h1 className={"font-3xl"}>Market</h1>

          <SearchBar
              query={query}
              setQuery={setQuery}
          ></SearchBar>

          {
            trendingCoinsData.map((coin) => {
              return (
                  <div
                      className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      key={coin.data.id}>
                    <Link to={`/${coin.data.id}`}>
                      <MarketCoin
                          img={coin.data.image.large}
                          name={coin.data.name}
                          price={coin.data.market_data.current_price.usd}
                          change={coin.data.market_data.price_change_percentage_24h}
                      ></MarketCoin>
                    </Link>
                  </div>
              )
            })
          }
        </div>
    );
  }

  return <></>
}

export default Market;