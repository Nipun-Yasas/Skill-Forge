"use client";
import React from "react";
import BackgroundShapes from "./BackgroundShapes";
import LoginForm from "./LoginForm";

const page = () => {
  return (
    <main className="flex overflow-hidden relative justify-center items-center p-10 bg-white min-h-[screen]">
      <BackgroundShapes />
      <section className="flex relative w-full border-gray-100 backdrop-blur-[[25.45px]] bg-white bg-opacity-10 border-[5.09px] h-[818px] max-w-[1202px] rounded-[30px] max-md:flex-col max-md:mx-5 max-md:h-auto">
        <div className="flex relative justify-center items-center bg-cyan-500 h-[740px] rounded-[30.54px] w-[559px] max-md:w-full max-md:h-[400px] max-sm:h-[300px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2277e6031ec1ed1427d6231004785e4e7546e686"
            alt="Login illustration"
            className="w-[433px] h-[645px] object-contain max-lg:w-[300px] max-lg:h-[350px] max-sm:w-[200px] max-sm:h-[250px]"
          />
        </div>
        <LoginForm />
      </section>
    </main>
  );
};

export default page;
