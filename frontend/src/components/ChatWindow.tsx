"use client";

import * as React from "react";
import { Message, } from "../app/type";
import { useAuth } from "../context/AuthContext";

interface ChatWindowProps {
  conversationId: string | null;
}

export function ChatWindow({ conversationId }: ChatWindowProps) {
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [newMessage, setNewMessage] = React.useState("");
  const { user, token } = useAuth();

  // Fetch messages for the selected conversation
  React.useEffect(() => {
    if (!conversationId) {
      setMessages([]);
      return;
    }

    const fetchMessages = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/chat/messages/${conversationId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) throw new Error("Failed to fetch messages");
        const data: Message[] = await response.json();
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, [conversationId, token]);

  // Handle sending a new message
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !conversationId) return;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/chat/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          conversationId,
          senderId: user?._id,
          text: newMessage,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) throw new Error("Failed to send message");

      const newMsg = await response.json();
      setMessages((prev) => [...prev, ...newMsg]);
      setNewMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  if (!conversationId) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-gray-500">Select a conversation to start chatting.</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.length === 0 ? (
          <p className="text-gray-500 text-center">No messages yet.</p>
        ) : (
          messages.map((msg) => (
            <div
              key={msg._id}
              className={`mb-4 flex ${
                msg.sender === user?._id ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs p-3 rounded-lg ${
                  msg.sender === user?._id ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
                }`}
              >
                <p>{msg.text}</p>
                <span className="text-xs opacity-75">
                  {new Date(msg.timestamp).toLocaleTimeString()}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
      <form onSubmit={handleSendMessage} className="p-4 border-t">
        <div className="flex items-center">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}