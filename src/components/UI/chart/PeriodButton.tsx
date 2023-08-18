import React from 'react';

interface Props {
  period: string,
  setDaysAmount: (value: string) => void,
  daysAmountValue: string
}

function PeriodButton({period, setDaysAmount, daysAmountValue}: Props) {
  return (
      <div onClick={() => setDaysAmount(daysAmountValue)}
           className={'py-1 px-4 text-white transition-colors duration-150 cursor-pointer focus:shadow-outline hover:bg-gradient-to-tr from-indigo-800 via-purple-800 to-pink-500 rounded'}>{period}
      </div>
  );
}

export default PeriodButton;