import React from "react";

const FormField = ({ label, value }) => {
  return (
    <div className="mb-10">
      <label className="block mb-4 text-lg font-bold text-black max-sm:text-base">
        {label}
      </label>
      <div className="flex items-center px-5 text-lg bg-white rounded-xl border border-solid border-zinc-500 h-[43px] text-zinc-500 max-sm:text-base">
        {value}
      </div>
    </div>
  );
};

export default FormField;
