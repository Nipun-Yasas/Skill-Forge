"use client";
import React from "react";
import ProgressIndicator from "./ProgressIndicator";
import SkillsInputSection from "./SkillsInputSection";
import RequestedSkillsSection from "./RequestedSkillsSection";
import ContinueButton from "./ContinueButton";

function OfferingSkillsAndRequestedSkills() {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-start py-32 bg-white max-md:py-24 max-md:pr-5">
      <div className="w-full max-w-[1309px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[23%] max-md:ml-0 max-md:w-full">
            <div className="flex shrink-0 mt-48 mr-0 max-w-full rounded-full bg-cyan-500 bg-opacity-10 h-[506px] w-[355px] max-md:mt-10" />
          </div>
          <div className="ml-5 w-[77%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start px-20 pt-14 pb-8 w-full border-gray-100 border-solid bg-white bg-opacity-10 border-[5px] rounded-[31px] max-md:px-5 max-md:max-w-full">
              <div className="flex flex-col max-w-full w-[900px]">
                <div className="flex gap-10 max-w-full text-2xl font-medium leading-4 text-white w-[816px]">
                  <h2 className="grow shrink self-end mt-10 text-3xl leading-4 text-black w-[373px]">
                    Offering and Requted Skills
                  </h2>
                  <ProgressIndicator number={1} />
                  <ProgressIndicator number={2} />
                  <ProgressIndicator number={3} />
                </div>

                <SkillsInputSection />

                <RequestedSkillsSection />

                <ContinueButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OfferingSkillsAndRequestedSkills;
