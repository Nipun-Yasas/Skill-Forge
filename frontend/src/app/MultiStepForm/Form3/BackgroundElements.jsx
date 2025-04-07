import React from "react";

const BackgroundElements = () => {
  return (
    <div className="absolute top-0 left-0 z-0 pointer-events-none size-full">
      {/* Blue shape on the right */}
      <div>
        <svg
          width="656"
          height="666"
          viewBox="0 0 656 666"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-0 top-1/2 transform -translate-y-1/2"
          aria-hidden="true"
        >
          <g opacity="0.7">
            <path
              opacity="0.7"
              d="M702 301.405C702 452.301 572.165 604.905 414 604.905C255.834 604.905 284.5 287.301 284.5 136.405C284.5 -14.4909 440.834 0.404944 599 0.404944C757.165 0.404944 702 150.509 702 301.405Z"
              fill="#00B4D8"
            />
            <path
              opacity="0.7"
              d="M359.486 220.757C435.855 269.222 505.341 390.797 449.977 478.038C394.613 565.278 308.23 650.716 231.861 602.251C155.492 553.785 45.838 382.878 101.202 295.638C156.567 208.398 283.117 172.292 359.486 220.757Z"
              fill="#CAF0F8"
            />
          </g>
        </svg>
      </div>

      {/* Light blue ellipse on the left */}
      <div>
        <svg
          width="318"
          height="506"
          viewBox="0 0 318 506"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-0 top-1/2 transform -translate-y-1/2"
          aria-hidden="true"
        >
          <ellipse
            cx="27.5"
            cy="253"
            rx="290.5"
            ry="253"
            fill="#00B4D8"
            fillOpacity="0.11"
          />
        </svg>
      </div>

      {/* Clock illustration */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b8c2d8e92e353c752ac8accfc5ae871424a4a2e"
        alt="Clock illustration"
        className="absolute bottom-1/4 h-[239px] right-[15%] w-[239px] max-md:h-[180px] max-md:right-[10%] max-md:w-[180px] max-sm:hidden"
      />
    </div>
  );
};

export default BackgroundElements;
