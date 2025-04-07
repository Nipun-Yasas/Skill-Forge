import React from "react";

function ContinueButton() {
  return (
    <button className="flex flex-wrap gap-6 justify-center items-center self-center px-64 mt-16 ml-7 max-w-full text-xl text-white whitespace-nowrap bg-sky-600 rounded-xl h-[45px] leading-[122px] w-[641px] max-md:px-5 max-md:mt-10">
      <span className="self-stretch my-auto">Continue</span>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/59fc540a8257175f451e46cea204ba4ae5c15547?placeholderIfAbsent=true&apiKey=f7293de09f3e44a3ac87ee34c8ec2753"
        alt="Continue arrow"
        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
      />
    </button>
  );
}

export default ContinueButton;
