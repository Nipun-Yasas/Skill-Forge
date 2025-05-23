import React from "react";

function Stats() {
  return (
    <section
      id="stats"
      className="self-center mt-24 w-full max-w-[1298px] px-4 max-md:mt-10"
    >
      <div className="flex flex-col justify-center items-center lg:bg-cyan-200 rounded-lg py-12 px-8 max-md:py-8 max-md:px-4 bg-cyan-500">
        <div
          className="w-full p-8 max-md:p-6 rounded-full"
          style={{
            backgroundImage:
              "url('https://cdn.builder.io/api/v1/image/assets/TEMP/73d5dde3b8416bd6c537c15fe64d8022533c24f8?placeholderIfAbsent=true')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="grid grid-cols-4 gap-8 max-md:grid-cols-2 max-md:gap-4">
            <StatItem
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/daec5606ee8aa45277cec586b290bb1cf3348ea3?placeholderIfAbsent=true"
              number="3K+"
              text="Successfully Trained"
            />
            <StatItem
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/ad455c70ebdfbb477a78022db30e563f3fed5e46?placeholderIfAbsent=true"
              number="15K+"
              text="Classes Completed"
            />
            <StatItem
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/afe3b919fa5b81676d6a6d8868d908025136d798?placeholderIfAbsent=true"
              number="97K+"
              text="Satisfaction Rate"
            />
            <StatItem
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/8709b69cce85b3d079e8c6c9bf0810adf3fb225b?placeholderIfAbsent=true"
              number="102K+"
              text="Students Community"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({ icon, number, text }) {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src={icon}
        alt="Stat icon"
        className="w-16 h-16 rounded-lg mb-4 max-md:w-12 max-md:h-12"
      />
      <h3 className="text-2xl font-bold max-md:text-xl">{number}</h3>
      <p className="text-sm mt-2 max-md:text-xs">{text}</p>
    </div>
  );
}

export default Stats;
