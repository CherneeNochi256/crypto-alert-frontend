import React from 'react';
import SearchBar from "../common/SearchBar";

function MarketTemplate(props: any) {
  return (
      <div id={"market"} className={''}>
        <h1 className={"text-5xl font-bold py-5"}>Market</h1>

        <SearchBar
            query={props.query}
            setQuery={props.setQuery}
        ></SearchBar>

        {props.children}
      </div>
  );
}

export default MarketTemplate;