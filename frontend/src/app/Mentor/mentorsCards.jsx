 'use client'
import React from "react";
import { Star } from "lucide-react";


const mentors = Array(6).fill({
    name: "Alex Jhons",
    location: "Moratuwa, Sri Lanka",
    rating: "4.5/5",
    skills: ["Web Development", "Java", "Python", "Node.Js", "Video Editing"],
  });

export const MentorsCards = () => {
  return (
    <><div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mentors.map((mentor, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4 text-white relative">
                      <div className="text-lg font-bold">{mentor.name}</div>
                      <div className="text-xs">{mentor.location}</div>
                      <div className="absolute top-2 right-2 flex items-center gap-1 bg-white text-black px-2 py-1 text-xs rounded-full">
                          <Star className="w-3 h-3 text-yellow-400" fill="currentColor" />
                          {mentor.rating}
                      </div>
                  </div>
                  <div className="p-4">
                      <div className="mb-2 text-sm font-medium">CAN TEACH</div>
                      <div className="flex flex-wrap gap-2 mb-4">
                          {mentor.skills.map((skill, i) => (
                              <span
                                  key={i}
                                  className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                              >
                                  {skill}
                              </span>
                          ))}
                      </div>
                      <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 rounded-md text-sm font-medium">
                          Request mentorship
                      </button>
                  </div>
              </div>
          ))}
      </div><div className="flex justify-center mt-8">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
                  Load More
              </button>
          </div></>
    );
};
export default MentorsCards;