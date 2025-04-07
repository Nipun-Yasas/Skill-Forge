import * as React from "react";

interface MessageProps {
  text: string;
  time: string;
  isOutgoing: boolean;
}

export function Message({ text, time, isOutgoing }: MessageProps) {
  if (isOutgoing) {
    return (
      <div className="flex flex-col items-end">
        <div className="flex gap-5 items-start text-base tracking-wider text-violet-50">
          <div className="grow shrink-0 self-end px-4 py-4 mt-6 rounded-xl basis-0 bg-sky-600 bg-opacity-70 w-fit">
            {text}
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3295ba19251201465708a456c34b800eb53b1547?placeholderIfAbsent=true&apiKey=fd0c2c04ade54c2997bae3153b14309c"
            alt="User avatar"
            className="object-contain shrink-0 self-start aspect-square w-[42px]"
          />
        </div>
        <time className="mt-2.5 mr-16 text-xs tracking-wide max-md:mr-2.5">
          {time}
        </time>
      </div>
    );
  }

  return (
    <div className="flex gap-2.5 self-start">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6048c758b606ac70b3d4ba058462c93c7c329414?placeholderIfAbsent=true&apiKey=fd0c2c04ade54c2997bae3153b14309c"
        alt="Recipient avatar"
        className="object-contain shrink-0 self-start w-10 rounded-full aspect-square"
      />
      <div className="flex flex-col">
        <p className="px-4 py-4 text-base tracking-wider bg-violet-50 rounded-xl">
          {text}
        </p>
        <time className="self-end mt-2.5 text-xs tracking-wide max-md:mr-0.5">
          {time}
        </time>
      </div>
    </div>
  );
}
