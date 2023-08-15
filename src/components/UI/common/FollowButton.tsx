import React from 'react';

function FollowButton(props: any) {
  return (
      <a href={props.link}
         className="  mx-auto mt-16 flex justify-center space-x-8  rounded-full p-8 max-w-sm bg-gradient-to-tr from-indigo-800 via-purple-800 to-pink-500 shadow-lg shadow-shadow-color ">
        <p className={"my-auto"}>{props.content}</p>
        <svg className={"my-auto"} xmlns="http://www.w3.org/2000/svg" fill={"#fff"} height="1em" viewBox="0 0 512 512">
          <path
              d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
        </svg>
      </a>
  );
}

export default FollowButton;