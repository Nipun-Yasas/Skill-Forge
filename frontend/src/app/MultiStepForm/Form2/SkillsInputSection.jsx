import React from "react";

function SkillsInputSection() {
  return (
    <div className="mt-20 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[41%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow text-lg font-bold tracking-wide text-black max-md:mt-10">
            <label className="self-start">I am good at </label>
            <input
              type="text"
              placeholder="Photoshop,PremierePro,A"
              className="px-11 py-3.5 mt-4 leading-loose whitespace-nowrap bg-white rounded-xl border border-solid border-zinc-500 text-zinc-500 max-md:pl-5"
              defaultValue="Photoshop,PremierePro,A"
            />
            <label className="mt-7 max-md:mr-2.5">
              Tell us your skill level (1-10)
            </label>
            <input
              type="text"
              placeholder="PS:6 , PP:9 , AF:7"
              className="py-3.5 pr-1 pl-11 mt-4 leading-loose bg-white rounded-xl border border-solid border-zinc-500 text-zinc-500 max-md:px-5"
              defaultValue="PS:6 , PP:9 , AF:7"
            />
          </div>
        </div>
        <div className="ml-5 w-[59%] max-md:ml-0 max-md:w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/392381f83cc7886be644f83696cf087817a19e2c?placeholderIfAbsent=true&apiKey=f7293de09f3e44a3ac87ee34c8ec2753"
            alt="Skills illustration"
            className="object-contain mt-14 w-full rounded-none aspect-[3.22] max-md:mt-10"
          />
        </div>
      </div>
    </div>
  );
}

export default SkillsInputSection;
