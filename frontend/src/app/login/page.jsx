"use client";
import React from "react";
import BackgroundShapes from "./BackgroundShapes";
import LoginForm from "./LoginForm";

const page = () => {
  return (
    <main className="flex overflow-hidden relative justify-center items-center p-5 sm:p-10 bg-white min-h-screen">
      <BackgroundShapes />
      <section className="flex relative w-full border-gray-100 backdrop-blur-md bg-white bg-opacity-10 border-2 sm:border-[5.09px] h-auto sm:h-[818px] max-w-[95%] sm:max-w-[1202px] rounded-lg sm:rounded-[30px] flex-col sm:flex-row mx-5">
        <div className="flex relative justify-center items-center bg-cyan-500 h-[300px] sm:h-[400px] md:h-[740px] rounded-lg sm:rounded-[30.54px] w-full sm:w-[559px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2277e6031ec1ed1427d6231004785e4e7546e686"
            alt="Login illustration"
            className="w-[200px] h-[250px] sm:w-[300px] sm:h-[350px] md:w-[433px] md:h-[645px] object-contain"
          />
        </div>
        <LoginForm />
      </section>
    </main>
  );
};

export default page;
