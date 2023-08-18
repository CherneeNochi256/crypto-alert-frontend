import React, {PropsWithChildren} from 'react';

interface Props {
  title: string,
  titlePosition: string
}

function SidebarTemplate({title, titlePosition, children}: PropsWithChildren<Props>) {
  return (
      <div
          className={' h-full fixed 2xl:sticky right-12  w-[calc(100%-3rem)]  md:w-96 bg-sidebar-black border-l border-my-gray'}>
        <h4 className={`text-center mt-4 md:mt-0 md:fixed top-4 ${titlePosition} text-5xl  md:text-6xl `}>{title}</h4>
        <div
            className={`overflow-y-scroll top-40 h-[80vh] fixed right-12 md:w-auto w-[calc(100%-3rem)] scrollbar-hide`}>
          {children}
        </div>
      </div>
  );
}

export default SidebarTemplate;