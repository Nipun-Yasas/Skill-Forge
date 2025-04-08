import React from "react";

const UserInfo = () => {
  return (
    <div className="flex flex-1 gap-4">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3d0e788bbae2a5677d2005c2690cbc2e51f4e27?placeholderIfAbsent=true&apiKey=f7293de09f3e44a3ac87ee34c8ec2753"
        alt="User avatar"
        className="object-contain overflow-hidden shrink-0 w-10 rounded-full aspect-square"
      />
      <div className="flex flex-col my-auto">
        <h3 className="text-sm tracking-wider text-black">AizhanMaratovna</h3>
        <time className="self-start mt-1.5 text-xs tracking-wide text-zinc-500">
          2 days ago
        </time>
      </div>
    </div>
  );
};

export default UserInfo;
