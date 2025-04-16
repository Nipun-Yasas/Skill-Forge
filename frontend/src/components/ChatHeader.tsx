import * as React from "react";
import Image from "next/image";

interface ChatHeaderProps {
  participantName: string;
  participantImage?: string | null;
  lastSeen?: string;
  onExit?: () => void;
}

export function ChatHeader({ participantName, participantImage, lastSeen, onExit }: ChatHeaderProps) {
  return (
    <header className="flex gap-5 items-center p-4 border-b">
      <Image
        src={participantImage || "/default.png"}
        alt={`${participantName} profile`}
        width={60}
        height={60}
        className="object-contain shrink-0 rounded-full aspect-square"
      />
      <div className="flex-1 my-auto">
        <h2 className="text-2xl tracking-wider">{participantName}</h2>
        {lastSeen && (
          <p className="mt-2 text-base tracking-wider max-md:mr-2.5">
            Last seen {new Date(lastSeen).toLocaleTimeString()}
          </p>
        )}
      </div>
      {onExit && (
        <button onClick={onExit} className="p-2 hover:bg-gray-200 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </header>
  );
}