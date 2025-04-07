import React from "react";

const ProgressIndicator = ({ currentStep = 1, totalSteps = 3 }) => {
  return (
    <div className="flex gap-8 items-center max-w-[364px]">
      <div className="flex flex-col gap-4 items-center">
        <div>
          <svg
            width="364"
            height="102"
            viewBox="0 0 364 102"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[364px] h-[102px]"
          >
            <rect
              width="98"
              height="6"
              rx="3"
              transform="matrix(1 0 0 -1 216 63)"
              fill="#EFF0F7"
            />
            <rect
              width="98"
              height="6"
              rx="3"
              transform="matrix(1 0 0 -1 54 63)"
              fill="#EFF0F7"
            />
            <rect
              width="50"
              height="6"
              rx="3"
              transform="matrix(1 0 0 -1 54 63)"
              fill="#4A3AFF"
            />
            <circle cx="22" cy="45" r="22" fill="#03045E" fillOpacity="0.81" />
            <text
              fill="white"
              xmlSpace="preserve"
              style={{ whiteSpace: "pre" }}
              fontFamily="DM Sans"
              fontSize="25"
              fontWeight="500"
              letterSpacing="0em"
            >
              <tspan x="17" y="54.3324">
                1
              </tspan>
            </text>
            <circle cx="182" cy="45" r="22" fill="#03045E" fillOpacity="0.81" />
            <text
              fill="white"
              xmlSpace="preserve"
              style={{ whiteSpace: "pre" }}
              fontFamily="DM Sans"
              fontSize="25"
              fontWeight="500"
              letterSpacing="0em"
            >
              <tspan x="174" y="54.3324">
                2
              </tspan>
            </text>
            <circle cx="342" cy="45" r="22" fill="#03045E" fillOpacity="0.81" />
            <text
              fill="white"
              xmlSpace="preserve"
              style={{ whiteSpace: "pre" }}
              fontFamily="DM Sans"
              fontSize="25"
              fontWeight="500"
              letterSpacing="0em"
            >
              <tspan x="334" y="54.3324">
                3
              </tspan>
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;
