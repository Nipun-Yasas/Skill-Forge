'use client';

import React, { useState } from 'react';

export default function QuestionForm() {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [question, setQuestion] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    // Handle the publish action
    console.log({ category, title, question, image });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded-md"
      >
        <option value="">Choose categories</option>
        <option value="tech">Technology</option>
        <option value="education">Education</option>
        <option value="career">Career</option>
        {/* Add more options as needed */}
      </select>

      <input
        type="text"
        placeholder="Type an eye catching title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded-md"
      />

      <textarea
        placeholder="Type your question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded-md h-32"
      />

      <div className="flex items-center justify-between mt-4">
        <label className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
          Add Image
          <input type="file" onChange={handleImageChange} className="hidden" />
        </label>

        <button className="text-gray-500">Save as draft</button>

        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Publish
        </button>
      </div>
    </div>
  );
}
