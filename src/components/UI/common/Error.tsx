import React from 'react';

interface Props {
  padding?: string
}

function Error({padding = 'p-24'}: Props) {
  return (
      <div className={`flex justify-center text-red-600 font-bold text-2xl ${padding}`}>
        Failed to fetch coins, try to reload the page after a minute
      </div>
  );
}

export default Error;