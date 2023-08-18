import React from 'react';

interface Props {
  toggleForm: (action: string) => void
}

const Overlay = ({toggleForm}: Props) => {
  return (
      <div
          className={"fixed w-full h-full top-0 right-0 bg-black opacity-50"}
          onClick={() => toggleForm("closeModal")}
      >

      </div>
  );
};

export default Overlay;