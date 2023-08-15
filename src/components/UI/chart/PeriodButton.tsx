import React from 'react';

function PeriodButton(props: any) {
  return (
      <div
          className={'py-1 px-4 text-white transition-colors duration-150 rounded focus:shadow-outline hover:bg-gradient-to-tr from-indigo-800 via-purple-800 to-pink-500 rounded'}>{props.period}
      </div>
  );
}

export default PeriodButton;