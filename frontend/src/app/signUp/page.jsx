"use client";
import { BackgroundShapes } from "./BackgroundShapes";
import { RegistrationFormCard } from "./RegistrationFormCard";

export const page = () => {
  return (
    <div className="flex overflow-hidden relative justify-center items-center p-10 bg-white min-h-[screen]">
      <BackgroundShapes />
      <RegistrationFormCard />
    </div>
  );
};

export default page;
