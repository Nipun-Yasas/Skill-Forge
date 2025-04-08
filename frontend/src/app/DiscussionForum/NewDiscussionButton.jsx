import React from "react";

const NewDiscussionButton = () => {
  return (
    <button className="flex gap-2.5 px-3 py-2 text-base text-center text-white bg-sky-500 rounded-lg max-md:px-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/17b16368a334788d228ac60be57181587586f723?placeholderIfAbsent=true&apiKey=f7293de09f3e44a3ac87ee34c8ec2753"
        alt="New discussion icon"
        className="object-contain overflow-hidden shrink-0 w-3.5 aspect-square"
      />
      <span className="basis-auto">New Discussion</span>
    </button>
  );
};

export default NewDiscussionButton;
