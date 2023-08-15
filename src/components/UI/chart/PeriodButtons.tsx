import React from 'react';
import PeriodButton from "./PeriodButton";

function PeriodButtons(props: any) {
  return (
      <div className={'h-16 mb-10 w-64 text-[16px] '}>
        <div className={'flex mt-4'}>
          <PeriodButton period={'1D'}/>
          <PeriodButton period={'7D'}/>
          <PeriodButton period={'14D'}/>
          <PeriodButton period={'1M'}/>
          <PeriodButton period={'MAX'}/>
        </div>
      </div>
  );
}

export default PeriodButtons;