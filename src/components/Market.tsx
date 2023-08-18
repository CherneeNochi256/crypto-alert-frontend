import React, {useState} from 'react';
import useDebounce from "../hooks/useDebounce";
import {useQueries, useQuery} from "react-query";
import {coinGeckoApi} from "../api/axios";
import {concatSearchedIds, concatTrendingIds} from "../utils/MarketUtils";
import Loading from "./UI/common/Loading";
import Error from "./UI/common/Error";
import MarketTable from "./UI/market/MarketTable";
import MobileMarketTable from "./UI/market/MobileMarketTable";
import MarketTemplate from "./UI/market/MarketTemplate";
import MarketPagination from "./UI/market/MarketPagination";
import CoinGeckoTrendingCoinsResponse from "../models/coin/coinGecko/CoinGeckoTrendingCoinsResponse";
import CoinGeckoSearchCoinsResponse from "../models/coin/coinGecko/CoinGeckoSearchCoinsResponse";
import CoinGeckoMarketsCoin from "../models/coin/coinGecko/CoinGeckoMarketsCoin";

function Market() {

  const [query, setQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [coinsPerPage, setCoinsPerPage] = useState(8)

  const debouncedSearchTerm = useDebounce(query, 500)

  const [trendingCoins, searchedCoins] = useQueries(
      [
        {
          queryKey: ['trendingCoins'],
          queryFn:
              async () => {
                return await coinGeckoApi.get<CoinGeckoTrendingCoinsResponse>(`search/trending`).then(response => response.data)
              }
        },
        {
          queryKey: ['searchedCoins', debouncedSearchTerm],
          queryFn:
              async () => {
                if (debouncedSearchTerm) {
                  return await coinGeckoApi.get<CoinGeckoSearchCoinsResponse>(`search?query=${debouncedSearchTerm}`).then(response => response.data)
                }
              }
        }
      ]
  )

  // two upper request doesn't provide all necessary data, so I need to make two more fetches based on their info, with info that I need

  const trendingCoinsData = useQuery(
      {
        queryKey: ['trendingCoinsData', trendingCoins.data],
        queryFn:
            async () => {
              return await coinGeckoApi.get<CoinGeckoMarketsCoin[]>(`coins/markets?vs_currency=usd&ids=${concatTrendingIds(trendingCoins.data?.coins)}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`).then(response => response.data)
            },
        enabled: !!trendingCoins.data
      }
  )

  const searchedCoinsData = useQuery(
      {
        queryKey: ['searchedCoinsData', searchedCoins.data],
        queryFn:
            async () => {
              return await coinGeckoApi.get<CoinGeckoMarketsCoin[]>(`coins/markets?vs_currency=usd&ids=${concatSearchedIds(searchedCoins.data?.coins)}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`).then(response => response.data)
            },
        enabled: !!searchedCoins.data
      }
  )


  if (query !== '' && searchedCoins.data) {
    if (searchedCoinsData.isLoading) {
      return (
          <MarketTemplate
              query={query}
              setQuery={setQuery}
          >
            <Loading></Loading>
          </MarketTemplate>
      );

    } else if (searchedCoinsData.error) {
      return (
          <MarketTemplate
              query={query}
              setQuery={setQuery}>
            <Error/>
          </MarketTemplate>
      );

    } else if (searchedCoinsData.data) {
      const lastCoinIndex = currentPage * coinsPerPage
      const firstCoinIndex = lastCoinIndex - coinsPerPage
      const currentSearchedCoinsData = searchedCoinsData.data.slice(firstCoinIndex, lastCoinIndex)

      return (
          <MarketTemplate
              query={query}
              setQuery={setQuery}>
            <MarketTable coinsData={currentSearchedCoinsData}/>
            <MobileMarketTable coinsData={currentSearchedCoinsData}/>
            <MarketPagination
                id={'search'}
                totalCoins={searchedCoinsData.data.length}
                currentPage={currentPage}
                coinsPerPage={coinsPerPage}
                setCurrentPage={setCurrentPage}
            />
          </MarketTemplate>
      );

    }
  }


  if (trendingCoinsData.isLoading) {
    return (
        <MarketTemplate query={query} setQuery={setQuery}>
          <Loading></Loading>
        </MarketTemplate>
    );
  } else if (trendingCoinsData.error) {
    return (
        <MarketTemplate query={query} setQuery={setQuery}>
          <Error/>
        </MarketTemplate>
    );

  } else if (trendingCoinsData.data) {
    const lastCoinIndex = currentPage * coinsPerPage
    const firstCoinIndex = lastCoinIndex - coinsPerPage
    const currentTrendingCoinsData = trendingCoinsData.data.slice(firstCoinIndex, lastCoinIndex)

    return (
        <MarketTemplate query={query} setQuery={setQuery}>
          <MarketTable coinsData={currentTrendingCoinsData}/>
          <MobileMarketTable coinsData={currentTrendingCoinsData}/>
          <MarketPagination
              id={'trend'}
              totalCoins={trendingCoinsData.data.length}
              currentPage={currentPage}
              coinsPerPage={coinsPerPage}
              setCurrentPage={setCurrentPage}
          />
        </MarketTemplate>
    );
  }

  return <></>
}

export default Market;