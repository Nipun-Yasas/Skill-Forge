import * as React from "react";

interface ConversationItemProps {
  imageSrc: string;
  name: string;
  message: string;
  time: string;
  imageRounded?: boolean;
}

export function ConversationItem({
  imageSrc,
  name,
  message,
  time,
  imageRounded = false,
}: ConversationItemProps) {
  return (
    <article className="flex gap-5 justify-between w-full max-md:mr-2.5">
      <div className="flex gap-6">
        <img
          src={imageSrc}
          alt={name}
          className={`object-contain shrink-0 aspect-square w-[50px] ${
            imageRounded ? "rounded-full" : ""
          }`}
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
