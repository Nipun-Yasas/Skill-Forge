"use client";

import React from "react";
import { ThumbsUp, MessageCircle } from "lucide-react";

const question = {
  user: "@Golanginya",
  date: "12 November 2020 13:35",
  title: "How to patch KDE on FreeBSD?",
  content:
    "Mi magna sed nec nisi mattis. Magna cursus tincidunt rhoncus imperdiet fermentum pretium.",
  linkText: "phasellus nisl. Euismod.",
  code: `package main
import "fmt"

func main() {
    fmt.Println("Hello, world!")
}`,
};

const replies = [
  {
    user: "@unkind",
    date: "12 November 2020 19:35",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare rutrum amet.",
    code: "package main",
    likes: 12,
    comments: 3,
  },
  {
    user: "@morgensterns",
    date: "12 November 2020 21:55",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare rutrum amet.",
    likes: 256,
    comments: 43,
  },
  {
    user: "@kikzaru",
    date: "12 November 2020 19:55",
    content:
      "Mi ac id faucibus laoreet. Nulla quis in interdum imperdiet. Lacus mollis massa netus.",
    likes: 1,
    comments: 0,
  },
];

export default function DiscussionPage() {
  return (
    <div className="flex min-h-screen max-w-7xl mx-auto">
      <div className="flex-1 ml-74 p-6 space-y-6">
        {/* Ask a Question Button */}
        <div className="flex justify-center items-center h-16 text-white font-semibold text-lg">
          <a
            href="/AskQuestions"
            className="inline-block bg-[#0074D9] text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition duration-200"
          >
            Ask a Question
          </a>
        </div>

        {/* Discussion Content */}
        <div className="p-6 space-y-6">
          {/* Question */}
          <div className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-cyan-100 opacity-10 rounded-xl pointer-events-none"></div>
            <div className="relative z-10 space-y-4">
              <div>
                <div className="text-sm text-gray-500">{question.user}</div>
                <div className="text-xs text-gray-400">{question.date}</div>
              </div>
              <h2 className="text-lg font-semibold">{question.title}</h2>
              <p className="text-sm text-gray-700">
                {question.content}{" "}
                <span className="text-blue-500 underline cursor-pointer">
                  {question.linkText}
                </span>
              </p>
              <pre className="bg-gray-100 text-sm p-4 rounded-lg overflow-x-auto">
                <code>{question.code}</code>
              </pre>
              <p className="text-sm text-gray-600">
                Posuere arcu arcu consectetur turpis rhoncus tellus. Massa,
                consectetur massa sit fames nulla eu vehicula ullamcorper. Ante
                sit mauris elementum sollicitudin arcu sit suspendisse pretium.
                Nisi egestas fringilla justo bibendum.
              </p>
              <div className="flex justify-end items-center">
                <button className="bg-[#0074D9] text-white px-4 py-1 rounded-md text-sm hover:bg-blue-700 transition duration-200 flex items-center gap-1">
                  <ThumbsUp className="w-4 h-4" />
                  Vote
                </button>
              </div>
            </div>
          </div>

          {/* Replies */}
          {replies.map((reply, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow p-4 space-y-3 text-left"
            >
              <div>
                <div className="text-sm text-gray-500">{reply.user}</div>
                <div className="text-xs text-gray-400">{reply.date}</div>
              </div>
              {reply.code && (
                <pre className="bg-gray-100 text-sm p-2 rounded overflow-x-auto">
                  <code>{reply.code}</code>
                </pre>
              )}
              <p className="text-sm text-gray-700">{reply.content}</p>
              <div className="flex justify-between items-center text-xs text-gray-500">
                <div className="flex gap-4 items-center">
                  <span className="flex items-center gap-1">
                    <ThumbsUp className="w-4 h-4" />
                    {reply.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    {reply.comments}
                  </span>
                </div>
                <div className="flex gap-3">
                  <button className="text-[#00B4D8] hover:underline text-xs">
                    {idx === 1
                      ? "Show All Replies (21)"
                      : idx === 0
                      ? "Hide All Replies (2)"
                      : ""}
                  </button>
                  <button className="text-[#00B4D8] hover:underline text-xs">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
