import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <section className="mt-16 w-full px-4 max-w-7xl mx-auto">
      <div className="flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Left Content */}
        <div className="text-center md:text-left md:w-1/2 hidden sm:block">
          <div
            className="absolute bg-cyan-100 rounded-full h-[407px] left-[-87px] top-[139px] w-[535px] z-[1]"
            style={{ backgroundColor: "rgba(0, 180, 216, 0.11)" }}
            aria-hidden="true"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight">
            Unlock Your Potential with Peer-to-Peer Learning!
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Join a community of university students exchanging skills through mentorship, live workshops, and hands-on experience.
          </p>
          <button className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-sky-600 rounded-lg shadow-md hover:bg-sky-700">
            <Link href="/signUp">Start Learning</Link>
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4374ad8ebc5e02d887640c28c342ec924f3e21d9?placeholderIfAbsent=true"
            alt="Hero illustration"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
