"use client";

import * as React from "react";
import { ChatHeader } from "./ChatHeader";
import { Message } from "./Message";
import { MessageInput } from "./MessageInput";
import { Message as MessageType } from "../app/type"; // Import type

interface ChatWindowProps {
  conversationId: string | null;
  userId: string;
}

export function ChatWindow({ conversationId, userId }: ChatWindowProps) {
  const [messages, setMessages] = React.useState<MessageType[]>([]);

  React.useEffect(() => {
    if (!conversationId) return;
    const fetchMessages = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/chat/messages/${conversationId}`);
        if (!response.ok) throw new Error("Failed to fetch messages");
        const data: MessageType[] = await response.json();
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    fetchMessages();
  }, [conversationId]);

  const sendMessage = async (text: string) => {
    try {
      const response = await fetch("http://localhost:8000/api/chat/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ conversationId, senderId: userId, text }),
      });
      if (!response.ok) throw new Error("Failed to send message");
      const newMessage: MessageType = await response.json();
      setMessages([...messages, newMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <section className="flex overflow-hidden flex-col self-stretch py-6 my-auto font-medium rounded-3xl bg-white bg-opacity-90 min-w-60 shadow-[4px_0px_4px_rgba(0,0,0,0.25)] w-[678px] max-md:max-w-full">
      <div className="flex flex-col items-end px-10 w-full max-md:px-5 max-md:max-w-full">
        <ChatHeader />
        <div className="w-full space-y-14 mt-16 max-md:mt-10">
          {messages.map((msg) => (
            <Message
              key={msg._id}
              text={msg.text}
              time={new Date(msg.timestamp).toLocaleTimeString()}
              isOutgoing={msg.sender._id === userId}
            />
          ))}
        </div>
      </div>
      {conversationId && <MessageInput onSend={sendMessage} />}
    </section>
  );
}