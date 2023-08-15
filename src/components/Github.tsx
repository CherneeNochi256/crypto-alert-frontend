import React from 'react';
import FollowButton from "./UI/common/FollowButton";

function Github() {
  return (
      <div className={'py-24'}>
        <h1 className={'text-center text-5xl sm:text-7xl font-bold uppercase'}>
          Check other projects on
          <a className={'text-6xl sm:text-8xl  ml-4 bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-500 bg-clip-text text-transparent'}
             href="https://github.com/CherneeNochi256">
            github</a>
        </h1>
        <p className={'text-center text-xl my-12 font-bold'}>
          There are many interesting projects!
        </p>
        <FollowButton content={'Go to Github'}
                      link={'https://github.com/CherneeNochi256'}
        ></FollowButton>
      </div>
  );
}

export default Github;