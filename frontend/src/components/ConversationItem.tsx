import * as React from "react";

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
  imageRounded = false,
  conversationId,
  onSelect,
}: ConversationItemProps) {
  return (
    <article
      className="flex gap-5 justify-between w-full max-md:mr-2.5 cursor-pointer hover:bg-gray-100 p-2 rounded"
      onClick={() => onSelect?.(conversationId)}
    >
      <div className="flex gap-6">
        <img
          src={imageSrc}
          alt={`${name}'s profile`}
          className={`object-contain shrink-0 aspect-square w-[50px] ${
            imageRounded ? "rounded-full" : ""
          }`}
          onError={(e) => {
            e.currentTarget.onerror = null; // Prevent infinite loop
            e.currentTarget.src = "placeholder.jpg"; // Reliable fallback
          }}
        />
        <div className="flex flex-col my-auto">
          <h3 className="self-start text-base font-medium tracking-wider">
            {name}
          </h3>
          <p className="mt-2 text-sm font-light tracking-wider">{message}</p>
        </div>
      </div>
      <time className="my-auto text-sm font-light tracking-wider">{time}</time>
    </article>
  );
}