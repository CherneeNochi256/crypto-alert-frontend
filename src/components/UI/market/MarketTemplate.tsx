import React, {PropsWithChildren} from 'react';
import SearchBar from "../common/SearchBar";

interface Props {
  query: string
  setQuery: (value: string) => void
}

function MarketTemplate({query, setQuery, children}: PropsWithChildren<Props>) {
  return (
      <div id={"market"} className={''}>
        <h1 className={"text-5xl font-bold py-5"}>Market</h1>

        <SearchBar
            query={query}
            setQuery={setQuery}
        ></SearchBar>

        {children}
      </div>
  );
}

export default MarketTemplate;