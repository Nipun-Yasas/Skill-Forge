import { ImageSection } from "./ImageSection";
import { FormSection } from "./FormSection";

export const RegistrationFormCard = () => {
  return (
    <main className="relative p-10 h-auto border-gray-100 backdrop-blur-[[25px]] bg-white bg-opacity-10 border-[5px] rounded-[30px] w-[1202px] max-md:w-[90%] max-sm:p-5 max-sm:w-[95%]">
      <div className="flex gap-10 max-md:flex-col max-md:items-center">
        <ImageSection />
        <FormSection />
      </div>
    </main>
  );
};
