"use client";

import * as React from "react";

interface MessageInputProps {
  onSend: (text: string) => void;
}

export function MessageInput({ onSend }: MessageInputProps) {
  const [text, setText] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onSend(text);
      setText("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap gap-5 justify-between items-start self-center py-3.5 pr-6 pl-16 mt-80 max-w-full text-xl tracking-wider bg-zinc-300 bg-opacity-50 rounded-[50px] w-[603px] max-md:px-5 max-md:mt-10"
    >
      <input
        type="text"
        placeholder="Type your message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="my-auto bg-transparent outline-none"
      />
      <button type="submit">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/41f7bf1de2a5232e939ea6fd6cb5b1c5fc7f5bf7?placeholderIfAbsent=true&apiKey=fd0c2c04ade54c2997bae3153b14309c"
          alt="Send message"
          className="object-contain shrink-0 self-start aspect-[0.92] w-[34px]"
        />
      </button>
    </form>
  );
}