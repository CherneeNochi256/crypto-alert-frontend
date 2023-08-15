import React from 'react';
import {useQuery} from "react-query";
import axios from "axios";
import NewsCard from "./NewsCard";

import SidebarTemplate from "./SidebarTemplate";
import Error from "../common/Error";

function SidebarNews(props: any) {

  const {data, isLoading, error} = useQuery(
      {
        queryKey: ['news'],
        queryFn:
            async () => {
              return await axios.get(`https://newsdata.io/api/1/news?apikey=pub_2647097c5a2a7428673fe9ce1c3c61c9a435b&q=crypto&language=en `)
            }
      }
  );


  const arrayOnlyForIteration = new Array(8).fill(1, 0, 8)


  if (isLoading) return (
      <SidebarTemplate title={'NEWS'}
                       titlePosition={'right-40'}>
        <div className={''}>
          {
            arrayOnlyForIteration.slice(0, 4).map((el: any, index) => {
              return (
                  <div role="status" className=" mr-16 w-[75%] mx-auto  p-6 max-w-sm animate-pulse">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                    <span className="sr-only">Loading...</span>
                  </div>

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
  else if (data && data.data.results) {
    return (
        <SidebarTemplate title={'NEWS'}
                         titlePosition={'right-40'}>
          <div className={''}>
            {arrayOnlyForIteration.map((el: any, index) => {
              return (
                  <div key={index}>
                    <NewsCard newsData={data.data.results[index]}/>
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