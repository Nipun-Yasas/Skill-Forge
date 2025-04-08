"use client";
import * as React from "react";
import ProgressIndicator from "./ProgressIndicator";
import FormField from "./FormField";
import ContinueButton from "./ContinueButton";

function InputDesign() {
  return (
    <section className="flex flex-col items-center p-6 bg-gray-50 min-h-[screen]">
      <article className="p-12 w-full rounded-3xl backdrop-blur-[[25.45px]] bg-white bg-opacity-10 border-[5px] border-slate-100 max-w-[1179px] max-md:p-8 max-sm:p-6">
        <h1 className="mb-12 text-3xl max-sm:mb-8">Basic Info</h1>

        <div className="flex justify-center mb-16 max-sm:mb-12">
          <ProgressIndicator currentStep={1} totalSteps={3} />
        </div>

        <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
          <FormField label="Name" value="Andrea Oshadi" />

          <FormField label="Birthdate" value="21/07/2003" />

          <FormField label="City" value="Colombo" />

          <FormField label="Mobile" value="+94 77 538 2928" />

          <FormField label="University" value="University of Moratuwa" />

          <FormField label="Profile Pciture" value="Upload It Here" />
        </div>

        <div className="mt-12 max-sm:mt-8">
          <ContinueButton />
        </div>
      </article>
    </section>
  );
}

export default InputDesign;
