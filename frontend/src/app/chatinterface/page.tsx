"use client";

import * as React from "react";
import { ChatList } from "../../components/ChatList";
import { ChatWindow } from "../../components/ChatWindow";

export default function ChatInterface() {
  return (
    <main className="flex flex-wrap gap-8 justify-center items-center min-h-screen text-black">
      <ChatList />
      <ChatWindow />
    </main>
  );
}