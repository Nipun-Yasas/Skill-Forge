import * as React from "react";

interface ChatHeaderProps {
  participantName: string;
 
  participantImage?: string | null;
  lastSeen?: string;
 
}

export function ChatHeader({ participantName, participantImage, lastSeen }: ChatHeaderProps) {
  return (
    <header className="flex gap-5 self-start">
      <img
        src={participantImage || "placeholder.jpg"}
        alt={`${participantName} profile`}
        className="object-contain shrink-0 rounded-full aspect-square w-[60px]"
      />
      <div className="my-auto">
        <h2 className="text-2xl tracking-wider">{participantName}</h2>
        {lastSeen && (
          <p className="mt-2 text-base tracking-wider max-md:mr-2.5">
            Last seen {new Date(lastSeen).toLocaleTimeString()}
          </p>
          
        )}
      </div>
    </header>
  );
}