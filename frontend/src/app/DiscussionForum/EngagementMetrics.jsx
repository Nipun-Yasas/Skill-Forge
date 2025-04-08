import React from "react";

const EngagementMetrics = () => {
  return (
    <div className="flex flex-1 gap-3.5 items-center self-start mt-1.5 text-sm tracking-wide text-black whitespace-nowrap">
      <div className="flex gap-1 self-stretch my-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e59d77ee7fbaed69ceeeff92ab4c5b7fad5aa846?placeholderIfAbsent=true&apiKey=f7293de09f3e44a3ac87ee34c8ec2753"
          alt="Views icon"
          className="object-contain overflow-hidden shrink-0 aspect-square w-[15px]"
        />
        <span>125</span>
      </div>
      <div className="flex gap-1 self-stretch my-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/281c964aea204d1c44add82ee3a31d7d28244c9c?placeholderIfAbsent=true&apiKey=f7293de09f3e44a3ac87ee34c8ec2753"
          alt="Comments icon"
          className="object-contain overflow-hidden shrink-0 aspect-square w-[15px]"
        />
        <span>15</span>
      </div>
      <div className="flex gap-1 self-stretch my-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a407287487a6689f749b4d0ac68c2475a6e8471e?placeholderIfAbsent=true&apiKey=f7293de09f3e44a3ac87ee34c8ec2753"
          alt="Likes icon"
          className="object-contain overflow-hidden shrink-0 aspect-square w-[15px]"
        />
        <span>155</span>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6252cccc4865cdb7a02f91ad0b2062da1f6fede?placeholderIfAbsent=true&apiKey=f7293de09f3e44a3ac87ee34c8ec2753"
        alt="More options"
        className="object-contain overflow-hidden shrink-0 self-stretch w-6 aspect-square"
      />
    </div>
  );
};

export default EngagementMetrics;
