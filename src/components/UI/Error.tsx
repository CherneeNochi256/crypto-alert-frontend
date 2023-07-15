import React from 'react';

function Error(props:any) {
  return (
      <div className="flex justify-center p-24  text-red-600 font-bold text-2xl">
        Failed to fetch coins, try to reload the page after a minute
      </div>
  );
}

export default Error;