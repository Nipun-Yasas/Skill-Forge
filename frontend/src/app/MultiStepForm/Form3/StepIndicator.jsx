import React from "react";

const StepIndicator = () => {
  return (
    <div className="flex justify-center mb-16">
      <div className="flex gap-5 items-center max-sm:gap-2.5">
        <div className="flex justify-center items-center w-11 h-11 text-2xl font-medium rounded-full bg-blue-950 opacity-[0.81] text-white max-sm:w-9 max-sm:h-9 max-sm:text-xl">
          1
        </div>
        <div
          className="h-1.5 bg-indigo-600 rounded-[203px] w-[98px] max-md:w-[60px] max-sm:w-10"
          role="separator"
          aria-hidden="true"
        />
        <div className="flex justify-center items-center w-11 h-11 text-2xl font-medium rounded-full bg-blue-950 opacity-[0.81] text-white max-sm:w-9 max-sm:h-9 max-sm:text-xl">
          2
        </div>
        <div
          className="h-1.5 bg-indigo-600 rounded-[203px] w-[98px] max-md:w-[60px] max-sm:w-10"
          role="separator"
          aria-hidden="true"
        />
        <div className="flex justify-center items-center w-11 h-11 text-2xl font-medium rounded-full bg-blue-950 opacity-[0.81] text-white max-sm:w-9 max-sm:h-9 max-sm:text-xl">
          3
        </div>
      </div>
    </div>
  );
};

export default StepIndicator;
