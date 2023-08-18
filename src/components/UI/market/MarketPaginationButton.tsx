import React from 'react';

interface Props {
  clicked: string
  setClicked: (value: string) => void
  number: number,
  setCurrentPage: (value: number) => void
}

function MarketPaginationButton({number, setCurrentPage, setClicked, clicked}: Props) {
  return (

      <a href={'#market'}
         onClick={() => {
           setCurrentPage(number)
           setClicked(number.toString())
         }}
         className={`w-10 h-10 flex
           text-white transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-gradient-to-tr from-indigo-800 via-purple-800 to-pink-500 ${clicked === number.toString() ? 'bg-gradient-to-tr from-indigo-800 via-purple-800 to-pink-500' : ''}`}>
        <div className={'my-auto mx-auto'}>
          {number}
        </div>
      </a>
  );
}

export default MarketPaginationButton;