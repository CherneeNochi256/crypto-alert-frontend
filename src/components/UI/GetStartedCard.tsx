import React from 'react';

function GetStartedCard(props: any) {
  return (
      <div
          className="flex   border rounded-lg shadow flex-row w-full xl:max-w-[390px] dark:border-my-gray dark:bg-my-brown ">
        <div
            className={'bg-gradient-to-t from-indigo-800 via-purple-800 to-pink-500 min-w-[80px] h-20 rounded-2xl flex justify-center items-center mt-4 ml-6 mr-6'}>
          {props.children}
        </div>
        <div className="flex flex-col justify-between p-4 leading-normal w-full xl:max-w-[240px]">
          <h5 className="mb-2 text-xl sm:text-3xl font-bold tracking-tight dark:text-my-white uppercase">{props.header}</h5>
          <p className="mb-3 text-[15px] sm:text-[18px] dark:text-my-white">{props.text}</p>
        </div>
      </div>
  );
}

export default GetStartedCard;