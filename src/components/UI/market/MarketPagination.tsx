import React, {useState} from 'react';
import MarketPaginationButton from "./MarketPaginationButton";

function MarketPagination(props: any) {

  const [clicked, setClicked] = useState('1')

  const pages = Array(Math.ceil(props.totalCoins / props.coinsPerPage)).fill(1)

  if (props.id === 'trend') {
    props.setCurrentPage(1)
  }

  return (
      <ul className="flex justify-center mt-10 space-x-2">
        <li>
          <a
              href={'#market'}
              onClick={() => {
                if (props.currentPage !== 1) {
                  const prev = props.currentPage - 1
                  props.setCurrentPage(prev)
                  setClicked(prev.toString())
                }
              }}
              className={`flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100  `}>
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd" fillRule="evenodd"></path>
            </svg>
          </a>
        </li>
        {pages.map((page, index) => {
          return (
              <li key={index}>
                <MarketPaginationButton
                    clicked={clicked}
                    setClicked={setClicked}
                    number={index + 1}
                    setCurrentPage={props.setCurrentPage}/>
              </li>
          )
        })}
        <li>
          <a href={'#market'}
             onClick={() => {
               if (props.currentPage !== pages.length) {
                 const next = props.currentPage + 1
                 props.setCurrentPage(next)
                 setClicked(next.toString())
               }
             }}
             className={`flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100 `}>
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd" fillRule="evenodd"></path>
            </svg>
          </a>
        </li>
      </ul>
  );
}

export default MarketPagination;