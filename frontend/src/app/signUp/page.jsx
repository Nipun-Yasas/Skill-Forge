"use client";
import { BackgroundShapes } from "./BackgroundShapes";
import { RegistrationFormCard } from "./RegistrationFormCard";

const Page = () => {
  return (
    <div id="signUp" className="flex overflow-hidden relative justify-center items-center p-10 bg-white min-h-[screen]">
      <BackgroundShapes />
      <RegistrationFormCard />
    </div>
  );
};

export const page = Page;
export default Page;
