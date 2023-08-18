import React from 'react';
import PeriodButton from "./PeriodButton";

interface Props {
  setDaysAmount: (value: string) => void
}

function PeriodButtons({setDaysAmount}: Props) {
  return (
      <div className={'h-16 mb-10 w-64 text-[16px] '}>
        <div className={'flex mt-4'}>
          <PeriodButton period={'1D'} setDaysAmount={setDaysAmount} daysAmountValue={'1'}/>
          <PeriodButton period={'7D'} setDaysAmount={setDaysAmount} daysAmountValue={'7'}/>
          <PeriodButton period={'14D'} setDaysAmount={setDaysAmount} daysAmountValue={'14'}/>
          <PeriodButton period={'1M'} setDaysAmount={setDaysAmount} daysAmountValue={'30'}/>
          <PeriodButton period={'MAX'} setDaysAmount={setDaysAmount} daysAmountValue={'max'}/>
        </div>
      </div>
  );
}

export default PeriodButtons;