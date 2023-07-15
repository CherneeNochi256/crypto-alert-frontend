import React, {useState} from 'react';
import {SearchedCoin} from "../features/coins/coinsSlice";
import {Link} from "react-router-dom";
import MarketCoin from "./UI/MarketCoin";
import useDebounce from "../hooks/useDebounce";
import {useQueries} from "react-query";
import axios from "axios";
import SearchBar from "./UI/SearchBar";
import {allData, allError, allLoading} from "../utils/Market";
import Loading from "./UI/Loading";
import Error from "./UI/Error";
import HeaderCoin from "./UI/HeaderCoin";

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
    if (searchedCoins.isLoading) return <> <Loading/></>

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


  if (allLoading(trendingCoinsData)) {
    return (
        <div id={"market"}>
          <h1 className={"text-5xl font-bold my-5"}>Market</h1>

          <SearchBar
              query={query}
              setQuery={setQuery}
          ></SearchBar>

          <Loading></Loading>
        </div>
    );
  } else if (allError(trendingCoinsData)) {
    return (
        <div id={"market"}>
          <h1 className={"text-5xl font-bold my-5"}>Market</h1>

          <SearchBar
              query={query}
              setQuery={setQuery}
          ></SearchBar>

          <Error/>
        </div>
    );

  } else if (allData(trendingCoinsData)) {
    return (
        <div id={"market"}>
          <h1 className={"text-5xl font-bold my-5"}>Market</h1>

          <SearchBar
              query={query}
              setQuery={setQuery}
          ></SearchBar>

          <div className="relative hidden sm:block overflow-x-auto shadow-md sm:rounded-lg mt-24 font-bold text-2xl">
            <div className="text-left ">
              <div className="  bg-gradient-to-tr from-indigo-800 via-purple-800 to-pink-500 text-my-white grid grid-cols-4 grid-rows-1">
                <div  className="px-6 py-3 my-auto">
                  Coin
                </div>
                <div  className="px-6 py-3 my-auto" >
                  Price
                </div>
                <div  className="px-6 py-3 my-auto">
                 24h Change
                </div>
                <div  className="px-6 py-3 my-auto">
                  Market Cap
                </div>
              </div>
            </div>
            {
              trendingCoinsData.map((coin) => {
                return (

                    <MarketCoin
                        key={coin.data.id}
                        img={coin.data.image.large}
                        name={coin.data.name}
                        price={coin.data.market_data.current_price.usd}
                        change={coin.data.market_data.price_change_percentage_24h}
                    ></MarketCoin>
                )
              })
            }
          </div>

          <div className={"sm:hidden flex flex-col mt-24 gap-12"}>
            {
              trendingCoinsData.map((coin) => {
                return (

                    <HeaderCoin
                        key={coin.data.id}
                        img={coin.data.image.large}
                        name={coin.data.name}
                        price={coin.data.market_data.current_price.usd}
                        change={coin.data.market_data.price_change_percentage_24h}
                    ></HeaderCoin>
                )
              })
            }
          </div>

        </div>
    );
  }

  return <></>
}

export default Market;