"use client";

import * as React from "react";
import Image from "next/image";

interface ConversationItemProps {
  imageSrc: string;
  name: string;
  message: string;
  time: string;
  imageRounded?: boolean;
  conversationId: string;
  onSelect?: (conversationId: string) => void;
}

export function ConversationItem({
  imageSrc,
  name,
  message,
  time,
  imageRounded,
  conversationId,
  onSelect,
}: ConversationItemProps) {
  const handleClick = () => {
    if (onSelect) {
      console.log("ConversationItem clicked, conversationId:", conversationId);
      onSelect(conversationId);
    }
  };

  return (
    <div
      className="flex items-center gap-3 p-2 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
      onClick={handleClick}
    >
      <Image
        src={imageSrc}
        alt={name}
        width={40}
        height={40}
        className={`w-10 h-10 ${imageRounded ? "rounded-full" : "rounded-lg"}`}
      />
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium text-gray-800">{name}</p>
          <p className="text-xs text-gray-500">{time}</p>
        </div>
        <p className="text-xs text-gray-600 truncate">{message}</p>
      </div>
    </div>
  );
}