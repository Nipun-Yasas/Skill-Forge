import * as React from "react";

export function ChatHeader() {
  return (
    <header className="flex gap-5 self-start">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/763bb739cff99cd8d2ea55eb107f3ca66b2da9c3?placeholderIfAbsent=true&apiKey=fd0c2c04ade54c2997bae3153b14309c"
        alt="Mary Jones profile"
        className="object-contain shrink-0 rounded-full aspect-square w-[60px]"
      />
      <div className="my-auto">
        <h2 className="text-2xl tracking-wider">Mary Jones</h2>
        <p className="mt-2 text-base tracking-wider max-md:mr-2.5">
          Last seen 2h ago
        </p>
      </div>
    </header>
  );
}
