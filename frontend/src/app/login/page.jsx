"use client";
import React from "react";
import BackgroundShapes from "./BackgroundShapes";
import LoginForm from "./LoginForm";
import { ImageSection } from "./ImageSection";

const page = () => {
  return (
    <main className="flex overflow-hidden relative justify-center items-center p-5 sm:p-10 bg-white min-h-screen">
      <BackgroundShapes />
      <main className="relative p-10 h-auto border-gray-100 backdrop-blur-[53px] bg-white/13 border-[5px] rounded-[30px] w-[80%] max-w-[1202px] max-md:w-[90%] max-sm:p-5 max-sm:w-[95%]" suppressHydrationWarning={true}>
            <div className="flex gap-10 max-md:flex-col max-md:items-center">
              <ImageSection />
              <LoginForm/>
            </div>
          </main>
    </main>
  );
};

export default page;
