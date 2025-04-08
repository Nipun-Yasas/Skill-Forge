"use client";
import React from "react";
import FilterTabs from "./FilterTabs";
import NewDiscussionButton from "./NewDiscussionButton";
import DiscussionCard from "./DiscussionCard";

const ForumDiscussion = () => {
  return (
    <section className="overflow-hidden px-5 py-0 mx-auto mt-10 mb-0 max-w-[772px] max-md:px-4 max-md:py-0 max-sm:px-2.5 max-sm:py-0">
      <header className="flex flex-wrap gap-5 justify-between items-center self-stretch mx-auto my-0 w-full max-w-[729px] max-md:px-2.5 max-md:py-0 max-md:max-w-full">
        <FilterTabs />
        <NewDiscussionButton />
      </header>

      {/* Discussion Cards */}
      <DiscussionCard />
      <DiscussionCard />
      <DiscussionCard />
    </section>
  );
};

export default ForumDiscussion;
