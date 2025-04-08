"use client";

import * as React from "react";
import { SearchBar } from "./SearchBar";
import { ConversationItem } from "./ConversationItem";
import { Conversation, User } from "../app/type"; // Correct path

interface ChatListProps {
  onSelect?: (conversationId: string) => void;
}

export function ChatList({ onSelect }: ChatListProps) {
  const [conversations, setConversations] = React.useState<Conversation[]>([]);
  const userId = "67f42e6c8312548ae8e47168"; // Replace with your actual user ID

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
    <section className="self-stretch my-auto rounded-none min-w-60 w-[411px]">
      <div className="px-10 pt-16 pb-64 w-full bg-white rounded-3xl border border-solid border-black border-opacity-20 shadow-[5px_5px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:pb-24">
        <SearchBar />
        <div className="space-y-12 mt-20 max-md:mt-10">
          {conversations.map((conv) => {
            const otherParticipant: User | undefined = conv.participants.find(
              (p) => p._id !== userId
            );
            return (
              <ConversationItem
                key={conv._id}
                imageSrc={otherParticipant?.profileImageUrl || "https://via.placeholder.com/50"}
                name={otherParticipant?.fullName || "Unknown"}
                message={conv.lastMessage?.text || "No messages yet"}
                time={conv.lastMessage?.timestamp
                  ? new Date(conv.lastMessage.timestamp).toLocaleTimeString()
                  : "N/A"}
                imageRounded
                conversationId={conv._id}
                onSelect={onSelect}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}