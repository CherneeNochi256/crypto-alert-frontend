import React from 'react';
// @ts-ignore
import bitcoinInHand from '../images/get-started/bitcoin-in-hand.png'
import GetStartedCard from "./UI/GetStartedCard";

function GetStarted() {
  return (
      <div id={'getStarted'} className={'mt-56 pb-32 flex flex-col justify-center font-noto-sans-georgian '}>
        <h1 className={' mx-auto text-7xl sm:text-8xl  font-bold text-center md:flex md:gap-6 uppercase'}>Get
          <div
              className={'bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-500 bg-clip-text text-transparent font-bold'}>Started</div>
        </h1>
        <div
            className={'flex justify-between mt-48 flex-col xl:flex-row gap-10 self-center max-w-screen-md xl:max-w-none'}>
          <div className={'flex flex-col gap-6'}>
            <GetStartedCard
                header={'Register your account'}
                text={'Click on profile icon in navigation bar, register and then log in your account, or you can use demo account.'}
            >
              <svg fill={'#fff'} className={'w-10 h-10 '} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path
                    d="M528 160V416c0 8.8-7.2 16-16 16H320c0-44.2-35.8-80-80-80H176c-44.2 0-80 35.8-80 80H64c-8.8 0-16-7.2-16-16V160H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM272 256a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm104-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376z"/>
              </svg>
            </GetStartedCard>
            <GetStartedCard
                header={'Navigate to Market'}
                text={'Search and click on whatever coin you want.'}
            >
              <svg fill={'#fff'}
                   className={'w-10 h-10 '}
                   xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 512 512">
                <path
                    d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/>
              </svg>
            </GetStartedCard>
            <GetStartedCard
                header={'Check the coin price chart'}
                text={'Check the prices and decide on what price the alert should ring.'}
            >
              <svg xmlns="http://www.w3.org/2000/svg"
                   fill={'#fff'}
                   className={'w-10 h-10 '}
                   viewBox="0 0 448 512">
                <path
                    d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
              </svg>
            </GetStartedCard>
          </div>
          <img src={bitcoinInHand} className={'sm:w-80 sm:h-80 w-60 h-60 self-center'} alt=""/>
          <div className={'flex flex-col gap-6'}>
            <GetStartedCard
                header={'Fill the form below the chart'}
                text={'Write the desired price down to form.'}
            >
              <svg xmlns="http://www.w3.org/2000/svg"
                   fill={'#fff'}
                   className={'w-10 h-10 '}
                   viewBox="0 0 576 512">
                <path
                    d="M339.3 367.1c27.3-3.9 51.9-19.4 67.2-42.9L568.2 74.1c12.6-19.5 9.4-45.3-7.6-61.2S517.7-4.4 499.1 9.6L262.4 187.2c-24 18-38.2 46.1-38.4 76.1L339.3 367.1zm-19.6 25.4l-116-104.4C143.9 290.3 96 339.6 96 400c0 3.9 .2 7.8 .6 11.6C98.4 429.1 86.4 448 68.8 448H64c-17.7 0-32 14.3-32 32s14.3 32 32 32H208c61.9 0 112-50.1 112-112c0-2.5-.1-5-.2-7.5z"/>
              </svg>
            </GetStartedCard>
            <GetStartedCard
                header={'Wait for notification'}
                text={'Notification will be displayed both on website and email, if you registered with your email.'}
            >
              <svg xmlns="http://www.w3.org/2000/svg"
                   fill={'#fff'}
                   className={'w-10 h-10 '}
                   viewBox="0 0 320 512">
                <path
                    d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/>
              </svg>
            </GetStartedCard>
            <GetStartedCard
                header={'Give my project a star on github'}
                text={'I would really appreciate a star on my project'}
            >
              <svg xmlns="http://www.w3.org/2000/svg"
                   fill={'#fff'}
                   className={'w-10 h-10 '}
                   viewBox="0 0 576 512">
                <path
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
              </svg>
            </GetStartedCard>
          </div>
        </div>
      </div>
  );
}

export default GetStarted;