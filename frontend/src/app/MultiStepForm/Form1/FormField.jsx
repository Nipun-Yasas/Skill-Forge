import React from "react";

const FormField = ({ label, value, type = "text" }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-lg font-bold tracking-wide">{label}</label>
      <div className="relative">
        <input
          type={type}
          value={value}
          className="px-4 w-full text-lg bg-white rounded-xl border border-zinc-500 h-[43px] text-zinc-500"
        />
      </div>
    </div>
  );
};

export default FormField;
