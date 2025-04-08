import React from "react";

function ProgressIndicator({ number }) {
  return (
    <div className="flex flex-col whitespace-nowrap">
      <span className="self-center text-2xl font-medium leading-4 text-white">
        {number}
      </span>
      <div className="flex shrink-0 mt-1.5 w-11 h-11 rounded-full bg-blue-950 bg-opacity-80" />
    </div>
  );
}

export default ProgressIndicator;
