"use client";

import * as React from "react";
import { SearchBar } from "./SearchBar";
import { ConversationItem } from "./ConversationItem";
import { Conversation, User } from "../app/type";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

interface ChatListProps {
  onSelect?: (conversationId: string) => void;
}

export function ChatList({ onSelect }: ChatListProps) {
  const [conversations, setConversations] = React.useState<Conversation[]>([]);
  const [users, setUsers] = React.useState<User[]>([]); // State for all users
  const { user, token } = useAuth();
  const router = useRouter();

  // Fetch conversations for the logged-in user
  React.useEffect(() => {
    if (!user || !token) {
      router.push("/login");
      return;
    }

    const fetchConversations = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/chat/conversations/${user._id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) throw new Error("Failed to fetch conversations");
        const data: Conversation[] = await response.json();
        console.log("Fetched conversations:", data);
        setConversations(data);
      } catch (error) {
        console.error("Error fetching conversations:", error);
      }
    };

    fetchConversations();
  }, [user, token, router]);

  // Fetch all users (excluding the logged-in user)
  React.useEffect(() => {
    if (!user || !token) {
      router.push("/login");
      return;
    }

    const fetchUsers = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/chat/users`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          console.log("Fetch users response status:", response.status);
          console.log("Fetch users response statusText:", response.statusText);
          const errorData = await response.json().catch(() => ({})); // Try to parse error message from response
          console.log("Fetch users error data:", errorData);
          throw new Error(`Failed to fetch users: ${response.status} ${response.statusText}`);
        }
        const data: User[] = await response.json();
        console.log("Fetched users:", data);
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [user, token, router]);

  // Function to start a new conversation
  const startNewConversation = async (selectedUserId: string) => {
    try {
      // Generate a unique conversation ID
      const conversationId = new Date().getTime().toString(); // Simple ID generation; you can use a UUID library for better uniqueness
      const participants = [user._id, selectedUserId];

      // Create a new conversation
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/chat/conversations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          _id: conversationId,
          participants,
          lastMessage: null,
        }),
      });

      if (!response.ok) throw new Error("Failed to create conversation");

      const newConversation = await response.json();
      console.log("New conversation created:", newConversation);

      // Update the conversations list
      setConversations((prev) => [...prev, ...newConversation]);

      // Optionally, select the new conversation
      if (onSelect) {
        onSelect(conversationId);
      }
    } catch (error) {
      console.error("Error starting new conversation:", error);
    }
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <section className="flex-1 max-w-[350px] h-full max-md:max-w-full">
      <div className="px-6 pt-6 pb-6 bg-white rounded-3xl border border-solid border-black border-opacity-20 shadow-[5px_5px_4px_rgba(0,0,0,0.25)] h-full flex flex-col">
        <div className="mb-4 bg-gray-100 rounded-lg p-4 shadow-inner shrink-0">
          <h1 className="text-2xl font-semibold text-gray-800 tracking-wider">ChatList</h1>
        </div>
        <div className="mb-4 shrink-0">
          <SearchBar />
        </div>
        <div className="flex-1 overflow-y-auto min-h-0">
          {/* Existing Conversations */}
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-700">Conversations</h2>
            {conversations.length === 0 ? (
              <p className="text-gray-500">No conversations yet.</p>
            ) : (
              conversations.map((conv) => {
                const otherParticipant: User | undefined = conv.participants.find(
                  (p) => p._id !== user._id
                );
                return (
                  <ConversationItem
                    key={conv._id}
                    imageSrc={otherParticipant?.profileImageUrl || "/placeholder.png"}
                    name={otherParticipant?.fullName || "Unknown User"}
                    message={conv.lastMessage?.text || "No messages yet"}
                    time={
                      conv.lastMessage?.timestamp
                        ? new Date(conv.lastMessage.timestamp).toLocaleTimeString()
                        : "N/A"
                    }
                    imageRounded
                    conversationId={conv._id}
                    onSelect={onSelect}
                  />
                );
              })
            )}
          </div>

          {/* Start a New Chat Section */}
          <div className="mt-6 space-y-4">
            <h2 className="text-lg font-semibold text-gray-700">Start a New Chat</h2>
            {users.length === 0 ? (
              <p className="text-gray-500">No other users available.</p>
            ) : (
              users.map((u) => (
                <div
                  key={u._id}
                  className="flex items-center p-2 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
                  onClick={() => startNewConversation(u._id)}
                >
                  <img
                    src={u.profileImageUrl || "/placeholder.png"}
                    alt={u.fullName}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-800">{u.fullName}</p>
                    <p className="text-xs text-gray-500">{u.email}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}