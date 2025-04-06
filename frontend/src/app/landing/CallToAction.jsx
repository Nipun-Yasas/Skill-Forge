import React from "react";

const CallToAction = () => {
  return (
    <section id="cta"  className="px-20 pt-32 pb-0.5 w-full bg-[#CAF0F8] max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[56%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
            <h2 className="self-start text-5xl font-bold leading-[59px] text-sky-950 max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">
              Start Learning Today with SkillForge!
            </h2>
            <div className="flex flex-col pl-1.5 mt-11 max-md:mt-10 max-md:max-w-full">
              <p className="text-lg leading-8 text-neutral-600 max-md:max-w-full">
                <strong className="block text-2xl">
                  Unlock new skills, connect with peers, and grow together!
                </strong>
                At SkillForge, learning is a two-way street. Whether you want to learn
                a new skill or share your expertise, our platform makes it easy, fun,
                and accessible.
              </p>
              <button className="self-start px-16 py-6 mt-11 text-base leading-4 text-center text-white uppercase bg-sky-600 rounded-md shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10">
                Join Now
              </button>
            </div>
          </div>
        </div>
        <div className="ml-5 w-[44%] max-md:ml-0 max-md:w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b7a1f4bd68cf10835a9b73db713d144936d39e7?placeholderIfAbsent=true"
            alt="Call to action illustration"
            className="object-contain grow mt-20 w-full aspect-[0.83] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
