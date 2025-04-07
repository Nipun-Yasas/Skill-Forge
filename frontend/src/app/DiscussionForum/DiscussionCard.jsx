import React from "react";
import UserInfo from "./UserInfo";
import EngagementMetrics from "./EngagementMetrics";

const DiscussionCard = () => {
  return (
    <article className="flex flex-col px-14 py-8 mt-5 w-full border-gray-100 border-solid bg-white bg-opacity-10 border-[5px] rounded-[31px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 w-full max-md:max-w-full">
        <UserInfo />
        <EngagementMetrics />
      </div>

      <h2 className="self-start mt-7 text-sm font-bold tracking-wider text-black max-md:max-w-full">
        I want to study Svelte JS Framework. What is the best resourse should I
        use?
      </h2>

      <p className="self-start mt-2.5 text-sm font-light tracking-wider leading-6 text-black max-md:max-w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
        aliquet maecenas ut sit nulla
      </p>

      <div className="flex flex-wrap gap-5 justify-between items-start mt-4 w-full text-xs font-semibold text-white max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bed346bfe28e7864397de7553718a7e44c36623d?placeholderIfAbsent=true&apiKey=f7293de09f3e44a3ac87ee34c8ec2753"
          alt="Tags"
          className="object-contain overflow-hidden shrink-0 aspect-square w-[92px]"
        />
        <button className="gap-2.5 w-30 h-10 py-1 pr-4 pl-4 bg-sky-500 rounded-md min-h-6">
          Read more
        </button>
      </div>
    </article>
  );
};

export default DiscussionCard;
