import React from 'react';
import {useQuery} from "react-query";
import NewsCard from "./NewsCard";

import SidebarTemplate from "./SidebarTemplate";
import Error from "../common/Error";
import {coinsNewsApi} from "../../../api/axios";
import LoadingTemplate from "../common/LoadingTemplate";
import CoinNewsResponse from "../../../models/coin/CoinNewsResponse";

function SidebarNews() {

  const {data, isLoading, error} = useQuery(
      {
        queryKey: ['news'],
        queryFn:
            async () => {
              return await coinsNewsApi.get<CoinNewsResponse>(`news?apikey=pub_2647097c5a2a7428673fe9ce1c3c61c9a435b&q=crypto&language=en `).then(res => res.data)
            }
      }
  );


  const arrayOnlyForIteration = [1, 1, 1, 1, 1, 1, 1, 1]


  if (isLoading) return (
      <SidebarTemplate title={'NEWS'}
                       titlePosition={'right-40'}>
        <div className={''}>
          {
            arrayOnlyForIteration.slice(0, 4).map((el: any, index) => {
              return (
                  <LoadingTemplate/>

              )
            })}
        </div>
      </SidebarTemplate>
  )
  else if (error) return (
      <SidebarTemplate title={'NEWS'}
                       titlePosition={'right-40'}>
        <div className={'flex-col w-[80%] md:w-[385px] mx-auto rounded-lg shadow justify-center items-center '}>
          <Error padding={'p-6'}/>
        </div>
      </SidebarTemplate>


  )
  else if (data && data.results) {
    return (
        <SidebarTemplate title={'NEWS'}
                         titlePosition={'right-40'}>
          <div className={''}>
            {arrayOnlyForIteration.map((el: any, index) => {
              return (
                  <div key={index}>
                    <NewsCard articleData={data.results[index]}/>
                  </div>
              )
            })}
          </div>
        </SidebarTemplate>
    );

  }
  return <></>
}

export default SidebarNews;