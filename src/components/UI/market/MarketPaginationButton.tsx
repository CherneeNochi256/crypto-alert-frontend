import React from 'react';

function MarketPaginationButton(props: any) {
  return (

      <a href={'#market'}
         onClick={() => {
           props.setCurrentPage(props.number)
           props.setClicked(props.number.toString())
         }}
         className={`w-10 h-10 flex
           text-white transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-gradient-to-tr from-indigo-800 via-purple-800 to-pink-500 ${props.clicked === props.number.toString() ? 'bg-gradient-to-tr from-indigo-800 via-purple-800 to-pink-500' : ''}`}>
        <div className={'my-auto mx-auto'}>
          {props.number}
        </div>
      </a>
  );
}

export default MarketPaginationButton;