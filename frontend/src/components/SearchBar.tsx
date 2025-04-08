import * as React from "react";

export function SearchBar() {
  return (
    <div className="flex gap-5 p-2.5 text-sm font-medium tracking-wider bg-white rounded-xl border border-solid border-black border-opacity-30">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7850070bd49b602308c9de4ce6e47ff73fde3b0d?placeholderIfAbsent=true&apiKey=fd0c2c04ade54c2997bae3153b14309c"
        alt="Search"
        className="object-contain shrink-0 w-6 aspect-square"
      />
      <input
        type="text"
        placeholder="Search Name"
        className="flex-auto my-auto w-[262px] bg-transparent outline-none"
      />
    </div>
  );
}
