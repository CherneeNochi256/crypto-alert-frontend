import React from 'react';

function NewsCard(props: any) {
  function extractDomain(url: string) {
    const parsedUrl = new URL(url);
    return parsedUrl.origin;
  }

  return (
      <div className={''}>
        <div
            className="md:max-w-sm w-[95%] mx-auto p-6 rounded-lg shadow hover:bg-gray-800  ">
          <div className={' flex text-[11px] font-thin space-x-2'}>
            <div>
              {new Date().getHours() - props.newsData.pubDate.substring(11, 13)} hours ago
            </div>
            <div>
              {'\u00b7'}
            </div>
            <a href={extractDomain(props.newsData.link)}
               className={'text-[11px] font-thin  text-end mb-4 block hover:underline'}>
              {props.newsData.source_id}
            </a>
          </div>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{props.newsData.title}</h5>
          <p className="mb-3 font-normal text-[14px] text-gray-700 dark:text-gray-400">
            {props.newsData.content.substring(0, 100)}...
          </p>
          <div className={'flex items-end justify-between'}>
            <a href={props.newsData.link}
               className="inline-flex items-center px-3 py-2 bg-gradient-to-tr from-indigo-800 via-purple-800 to-pink-500 shadow-lg rounded-2xl">
              Read more
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
  );
}

export default NewsCard;