import React from "react";

const Divider = ({ text }) => {
  return (
    <div className="flex gap-4 items-center mb-5 w-full">
      <div className="flex-1 h-px bg-black" />
      <div className="text-xl text-black">{text}</div>
      <div className="flex-1 h-px bg-black" />
    </div>
  );
};

export default Divider;
