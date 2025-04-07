"use client";
import * as React from "react";
import StepIndicator from "./StepIndicator";
import FormField from "./FormField";
import BackgroundElements from "./BackgroundElements";

function InputDesign() {
  return (
    <main className="flex overflow-hidden relative justify-center items-center mx-auto w-full max-w-none min-h-screen bg-white max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <section className="relative p-10 border-solid backdrop-blur-[25px] bg-white bg-opacity-10 border-[5px] border-slate-100 max-w-[1179px] rounded-[30px] w-[90%] z-[1] max-md:p-8 max-md:w-[95%] max-sm:p-5">
        <StepIndicator />

        <div className="mx-auto my-0 max-w-[600px] max-md:max-w-full">
          <FormField
            label="How many hours you can teach ? (Approximately)"
            value="3 Hours / Per Day"
          />

          <FormField
            label="Teaching Mode"
            value="Individual / Group"
          />

          <FormField
            label="Learning Mode"
            value="Physical"
          />

          <button
            className="flex gap-2.5 justify-center items-center px-8 py-4 mt-16 text-xl text-white bg-sky-600 rounded-xl cursor-pointer w-full max-sm:px-6 max-sm:py-3 max-sm:text-lg"
            aria-label="Finish form submission"
          >
            <span>Finish</span>
            <i className="ti ti-arrow-right text-2xl" aria-hidden="true" />
          </button>
        </div>
      </section>

      <BackgroundElements />

      {/* Font imports */}
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@500&family=Inter:wght@400&family=Uber+Move+Text:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </main>
  );
}

export default InputDesign;
