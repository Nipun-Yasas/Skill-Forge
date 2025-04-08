import React from "react";

function RequestedSkillsSection() {
  return (
    <div className="mt-40 mr-4 w-full max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col text-lg tracking-wide max-md:mt-10">
            <label className="self-start font-bold text-black">
              What you are expecting from us ?
            </label>
            <input
              type="text"
              placeholder="SpringBoot,NextJS,Tailwind CSS"
              className="px-9 py-3.5 mt-4 leading-loose bg-white rounded-xl border border-solid border-zinc-500 text-zinc-500 max-md:px-5"
              defaultValue="SpringBoot,NextJS,Tailwind CSS"
            />
          </div>
        </div>
        <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex grow gap-5 justify-between mt-2.5 max-md:mt-10">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0f30616f6a12a71a2043f48cfa1d0db816cb69d?placeholderIfAbsent=true&apiKey=f7293de09f3e44a3ac87ee34c8ec2753"
              alt="Technology logo 1"
              className="object-contain shrink-0 self-start aspect-square w-[90px]"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1da58e26f71f362aafa75f66c1d10d22777cd8c5?placeholderIfAbsent=true&apiKey=f7293de09f3e44a3ac87ee34c8ec2753"
              alt="Technology logo 2"
              className="object-contain shrink-0 my-auto max-w-full aspect-[1.64] w-[108px]"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/447cb285c47408c1800a3989f2ad1d078be089aa?placeholderIfAbsent=true&apiKey=f7293de09f3e44a3ac87ee34c8ec2753"
              alt="Technology logo 3"
              className="object-contain shrink-0 aspect-square w-[92px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestedSkillsSection;
