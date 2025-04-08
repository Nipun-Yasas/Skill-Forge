"use client";

import * as React from "react";
import { ChatList } from "../../components/ChatList";
import { ChatWindow } from "../../components/ChatWindow";
import { Conversation } from "../../app/type";

export default function ChatInterface() {
  const [selectedConversation, setSelectedConversation] = React.useState<Conversation | null>(null);
  const userId = "67f42e6c8312548ae8e47168"; // John Doe

  const handleSelectConversation = (conversationId: string) => {
    const conv = conversations.find((c) => c._id === conversationId);
    setSelectedConversation(conv || null);
  };

  const [conversations, setConversations] = React.useState<Conversation[]>([]);

  React.useEffect(() => {
    const fetchConversations = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/chat/conversations/${userId}`);
        if (!response.ok) throw new Error("Failed to fetch conversations");
        const data: Conversation[] = await response.json();
        setConversations(data);
      } catch (error) {
        console.error("Error fetching conversations:", error);
      }
    };
    fetchConversations();
  }, [userId]);

  return (
    <div className="flex flex-row gap-6 w-full h-[calc(100vh-60px)] max-md:flex-col ml-6">
      <ChatList onSelect={handleSelectConversation} />
      <ChatWindow
        conversationId={selectedConversation?._id || null}
        userId={userId}
        conversation={selectedConversation}
      />
    </div>
  );
}