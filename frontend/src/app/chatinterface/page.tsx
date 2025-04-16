"use client";

import * as React from "react";
import { ChatList } from "../../components/ChatList";
import { ChatWindow } from "../../components/ChatWindow";
import { Conversation, User } from "../type";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";

export default function ChatInterface() {
  const [conversations, setConversations] = React.useState<Conversation[]>([]);
  const [selectedConversationId, setSelectedConversationId] = React.useState<string | null>(null);
  const { user, token } = useAuth();
  const router = useRouter();

  // Fetch conversations for the logged-in user
  const fetchConversations = async () => {
    if (!user || !token) return;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/chat/conversations/${user._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error("Failed to fetch conversations");
      const data: Conversation[] = await response.json();
      setConversations(data);
    } catch (error) {
      console.error("Error fetching conversations:", error);
    }
  };

  React.useEffect(() => {
    if (!user || !token) {
      router.push("/login");
      return;
    }

    fetchConversations();
  }, [user, token, router]);

  // Handle new message sent (to re-fetch conversations)
  const handleMessageSent = () => {
    fetchConversations();
  };

  // Handle deselecting the conversation
  const handleDeselectConversation = () => {
    setSelectedConversationId(null);
  };

  // Get the selected conversation's participant details
  const selectedConversation = conversations.find(conv => conv._id === selectedConversationId);
  const otherParticipant: User | undefined = selectedConversation?.participants.find(
    (p) => p._id !== user?._id
  );

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <main className="flex h-screen">
      <ChatList
        conversations={conversations}
        setConversations={setConversations}
        onSelect={setSelectedConversationId}
      />
      <ChatWindow
        conversationId={selectedConversationId}
        onMessageSent={handleMessageSent}
        onDeselect={handleDeselectConversation} // Pass deselect callback
        participantName={otherParticipant?.fullName || "Unknown User"}
        participantImage={otherParticipant?.profileImageUrl}
        lastSeen={otherParticipant?.lastSeen}
      />
    </main>
  );
}