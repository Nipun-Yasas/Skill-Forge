"use client";
import { BackgroundShapes } from "./BackgroundShapes";
import { RegistrationFormCard } from "./RegistrationFormCard";

function page(){
  return (
    <div id="signUp" className="flex overflow-hidden relative justify-center items-center p-10 bg-white min-h-[screen]">
      <BackgroundShapes />
      <RegistrationFormCard />
    </div>
  );
};

export default page;
