import React from 'react';
import { Search as SearchIcon } from 'lucide-react';

export const Search = ({ className }) => {
  return <SearchIcon className={className} />;
};

const SearchBar = () => {
  return (
    <div className="flex items-center w-full max-w-md px-4 py-2 border rounded-md shadow-sm bg-white border-gray-300">
      <Search className="w-5 h-5 text-gray-500" />
      <input
        type="text"
        placeholder='Search for skills (e.g, “Web Development”)'
        aria-label="Search for skills"
        className="ml-2 w-full outline-none text-gray-700 placeholder-gray-500 bg-transparent"
      />
    </div>
  );
};

export default SearchBar;
