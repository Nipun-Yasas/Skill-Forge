"use client";

import * as React from "react";
import { ChatList } from "../../components/ChatList";
import { ChatWindow } from "../../components/ChatWindow";

export default function ChatInterface() {
  const [selectedConversation, setSelectedConversation] = React.useState<string | null>(null);
  const userId = "67f42e328312548ae8e47165"; // Replace with your user ID

  const handleSelectConversation = (conversationId: string) => {
    setSelectedConversation(conversationId);
  };

  return (
    <main className="flex flex-wrap gap-8 justify-center items-center min-h-screen text-black">
      <ChatList onSelect={handleSelectConversation} />
      <ChatWindow conversationId={selectedConversation} userId={userId} />
    </main>
  );
}