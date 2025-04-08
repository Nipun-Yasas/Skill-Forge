import React from "react";

const FilterTabs = () => {
  return (
    <div className="overflow-hidden px-2.5 mt-0 text-sm tracking-wider capitalize whitespace-nowrap min-h-[25px] text-zinc-500">
      <nav className="flex overflow-hidden gap-2.5 items-start px-1.5 min-h-[25px]">
        <button className="flex overflow-hidden gap-1.5 items-center px-2.5 py-1.5 text-white bg-cyan-500 rounded-[100px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc9ade3af8a282c4d9bef2274070365d937c7369?placeholderIfAbsent=true&apiKey=f7293de09f3e44a3ac87ee34c8ec2753"
            alt="New icon"
            className="object-contain overflow-hidden shrink-0 self-stretch my-auto w-3 aspect-square"
          />
          <span className="self-stretch my-auto">New</span>
        </button>

        <button className="flex overflow-hidden gap-1.5 items-center px-2.5 py-1.5 bg-sky-200 rounded-[100px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d690259d3bbffb61b6a9430035e1706f5b3c61e?placeholderIfAbsent=true&apiKey=f7293de09f3e44a3ac87ee34c8ec2753"
            alt="Top icon"
            className="object-contain overflow-hidden shrink-0 self-stretch my-auto w-3 aspect-square"
          />
          <span className="self-stretch my-auto">Top</span>
        </button>

        <button className="flex overflow-hidden gap-1.5 items-center px-2.5 py-1.5 bg-sky-200 rounded-[100px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/329375194112e4e84820b2303abfd2a4337b8324?placeholderIfAbsent=true&apiKey=f7293de09f3e44a3ac87ee34c8ec2753"
            alt="Hot icon"
            className="object-contain overflow-hidden shrink-0 self-stretch my-auto w-3 aspect-square"
          />
          <span className="self-stretch my-auto">Hot</span>
        </button>

        <button className="flex overflow-hidden gap-1.5 items-center px-2.5 py-1.5 bg-sky-200 rounded-[100px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f37e16668a64ceb8b732d75cf38511c246878973?placeholderIfAbsent=true&apiKey=f7293de09f3e44a3ac87ee34c8ec2753"
            alt="Closed icon"
            className="object-contain overflow-hidden shrink-0 self-stretch my-auto w-3 aspect-square"
          />
          <span className="self-stretch my-auto">Closed</span>
        </button>
      </nav>
    </div>
  );
};

export default FilterTabs;
