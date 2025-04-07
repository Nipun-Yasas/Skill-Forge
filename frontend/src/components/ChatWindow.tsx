"use client";

import * as React from "react";
import { ChatHeader } from "./ChatHeader";
import { Message } from "./Message";
import { MessageInput } from "./MessageInput";

export function ChatWindow() {
  return (
    <section className="flex overflow-hidden flex-col self-stretch py-6 my-auto font-medium rounded-3xl bg-white bg-opacity-90 min-w-60 shadow-[4px_0px_4px_rgba(0,0,0,0.25)] w-[678px] max-md:max-w-full">
      <div className="flex flex-col items-end px-10 w-full max-md:px-5 max-md:max-w-full">
        <ChatHeader />
        <div className="w-full space-y-14 mt-16 max-md:mt-10">
          <Message
            text="Hi, can you help me with my project"
            time="10.45 AM"
            isOutgoing
          />
          <Message
            text="Of course, what's the issue"
            time="10.57 AM"
            isOutgoing={false}
          />
          <Message
            text="I have a problem with my layout."
            time="12.15 PM"
            isOutgoing
          />
        </div>
      </div>
      <MessageInput />
    </section>
  );
}
