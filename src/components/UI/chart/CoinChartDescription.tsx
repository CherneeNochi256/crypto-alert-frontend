import React from 'react';
// @ts-ignore
import DOMPurify from "dompurify";

function CoinChartDescription(props: any) {
  return (
      <div className="w-full h-48 mb-48 overflow-y-scroll scrollbar-hide">
        <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                  props.coinDesc.data.description.en
              ),
            }}
        >
        </p>
      </div>
  );
}

export default CoinChartDescription;