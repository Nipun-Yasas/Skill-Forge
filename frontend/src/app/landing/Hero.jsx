import React from "react";

function Hero() {
  return (
    <section className="self-end mt-32 w-full max-w-[1331px] max-md:mt-10 max-md:max-w-full overflow-hidden">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-6/12 ml-10 max-md:ml-4 max-md:w-full">
          <div className="flex flex-col pb-8 mt-8 w-full max-md:mt-10 max-md:max-w-full">
            <div className="max-md:max-w-full"></div>
            <div className="max-md:max-w-full">
              <div
                className="absolute bg-cyan-100 rounded-full h-[407px] left-[-87px] top-[139px] w-[535px] z-[1] max-md:hidden"
                style={{ backgroundColor: "rgba(0, 180, 216, 0.11)" }}
                aria-hidden="true"
              />
              <h1 className="text-5xl font-bold text-stone-900 max-md:max-w-full max-md:text-4xl">
                Unlock Your Potential with Peer-to-Peer Learning!
              </h1>
              <div className="mt-10 text-2xl text-black max-md:max-w-full">
                <span className="font-bold text-4xl block">
                  Learn. Teach. Grow.
                </span>
                <p className="mt-4">
                  Join a community of university students exchanging skills
                  through mentorship, live workshops, and hands-on experience.
                </p>
              </div>
            </div>
            <button className="flex gap-2 justify-center items-center self-start px-4 py-8 mt-16 text-2xl font-semibold leading-none text-white bg-sky-600 rounded-3xl min-h-20 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:mt-10">
              Start Learning
              <svg
                width="24"
                height="20"
                viewBox="214 30 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="text-white"
              >
                <path
                  d="M224.7 43.3L227.3 40.7C227.483 40.5167 227.575 40.2833 227.575 40C227.575 39.7167 227.483 39.4833 227.3 39.3L224.675 36.675C224.492 36.4917 224.263 36.404 223.988 36.412C223.713 36.4207 223.483 36.5167 223.3 36.7C223.117 36.8833 223.025 37.1167 223.025 37.4C223.025 37.6833 223.117 37.9167 223.3 38.1L224.2 39H220.975C220.692 39 220.458 39.0957 220.275 39.287C220.092 39.479 220 39.7167 220 40C220 40.2833 220.096 40.5207 220.288 40.712C220.479 40.904 220.717 41 221 41H224.2L223.275 41.925C223.092 42.1083 223.004 42.3377 223.012 42.613C223.021 42.8877 223.117 43.1167 223.3 43.3C223.483 43.4833 223.717 43.575 224 43.575C224.283 43.575 224.517 43.4833 224.7 43.3ZM224 50C222.617 50 221.317 49.7373 220.1 49.212C218.883 48.6873 217.825 47.975 216.925 47.075C216.025 46.175 215.313 45.1167 214.788 43.9C214.263 42.6833 214 41.3833 214 40C214 38.6167 214.263 37.3167 214.788 36.1C215.313 34.8833 216.025 33.825 216.925 32.925C217.825 32.025 218.883 31.3123 220.1 30.787C221.317 30.2623 222.617 30 224 30C225.383 30 226.683 30.2623 227.9 30.787C229.117 31.3123 230.175 32.025 231.075 32.925C231.975 33.825 232.687 34.8833 233.212 36.1C233.737 37.3167 234 38.6167 234 40C234 41.3833 233.737 42.6833 233.212 43.9C232.687 45.1167 231.975 46.175 231.075 47.075C230.175 47.975 229.117 48.6873 227.9 49.212C226.683 49.7373 225.383 50 224 50Z"
                  fill="currentColor"
                />
              </svg>
              <div className="flex shrink-0 self-stretch my-auto w-5 h-5" />
            </button>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/73a9136882a46ffb2c0990fdb50c7a3d45d94cd0?placeholderIfAbsent=true"
              alt="Decorative element"
              className="object-contain z-10 self-center mt-0 w-5 aspect-square"
            />
          </div>
        </div>
        <div className="ml-10 w-6/12 max-md:ml-4 max-md:w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4374ad8ebc5e02d887640c28c342ec924f3e21d9?placeholderIfAbsent=true"
            alt="Hero illustration"
            className="object-contain grow w-full aspect-[1.01] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
