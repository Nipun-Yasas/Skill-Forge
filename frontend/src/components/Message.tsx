import * as React from "react";

interface MessageProps {
  text: string;
  time: string;
  isOutgoing: boolean;
}

export function Message({ text, time, isOutgoing }: MessageProps) {
  return (
    <div
      className={`flex ${
        isOutgoing ? "justify-end" : "justify-start"
      } w-full`}
    >
      <div
        className={`max-w-[70%] rounded-lg px-4 py-2 ${
          isOutgoing ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
        }`}
      >
        <p>{text}</p>
        <span className="text-xs text-gray-900">{time}</span>
      </div>
    </div>
  );
}