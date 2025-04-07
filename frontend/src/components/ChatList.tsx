"use client";

import * as React from "react";
import { SearchBar } from "./SearchBar";
import { ConversationItem } from "./ConversationItem";

export function ChatList() {
  return (
    <section className="self-stretch my-auto rounded-none min-w-60 w-[411px]">
      <div className="px-10 pt-16 pb-64 w-full bg-white rounded-3xl border border-solid border-black border-opacity-20 shadow-[5px_5px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:pb-24">
        <SearchBar />
        <div className="space-y-12 mt-20 max-md:mt-10">
          <ConversationItem
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/3785a5a92367a2b99a0a56147bf5a5b5fba3d5aa?placeholderIfAbsent=true&apiKey=fd0c2c04ade54c2997bae3153b14309c"
            name="Mary Jones"
            message="I have a problem..."
            time="15 mins"
          />
          <ConversationItem
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/2675b9009c986f0c9f9636137789c1c11870b4e2?placeholderIfAbsent=true&apiKey=fd0c2c04ade54c2997bae3153b14309c"
            name="Mary Jones"
            message="I have a problem..."
            time="15 mins"
            imageRounded
          />
          <ConversationItem
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/955004154a755d22f18a10aafb4f51cee1607ee7?placeholderIfAbsent=true&apiKey=fd0c2c04ade54c2997bae3153b14309c"
            name="Mary Jones"
            message="I have a problem..."
            time="15 mins"
            imageRounded
          />
          <ConversationItem
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/0fb881ca59bb2790fb8b24dcd4d730a1c20d1a5e?placeholderIfAbsent=true&apiKey=fd0c2c04ade54c2997bae3153b14309c"
            name="Mary Jones"
            message="I have a problem..."
            time="15 mins"
            imageRounded
          />
          <ConversationItem
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ec030667a68ab8d91dc493170d602555c11eeb06?placeholderIfAbsent=true&apiKey=fd0c2c04ade54c2997bae3153b14309c"
            name="Mary Jones"
            message="I have a problem..."
            time="15 mins"
            imageRounded
          />
        </div>
      </div>
    </section>
  );
}
