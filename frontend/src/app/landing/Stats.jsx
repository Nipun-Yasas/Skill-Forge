import React from "react";

function Stats() {
  return (
    <section id="stats" className="relative flex flex-col justify-center items-center px-8 py-12 w-full bg-cyan-100 max-md:px-4 max-md:py-8 max-md:bg-[#00B4D8]">
      <div className="relative px-12 py-10 max-w-full rounded-[100px] w-full max-md:px-6 max-md:py-8">
        <figure className="relative flex flex-col w-full">
          <div className="relative w-full h-[200px] rounded-[100px] overflow-hidden max-md:h-[120px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://cdn.builder.io/api/v1/image/assets/TEMP/73d5dde3b8416bd6c537c15fe64d8022533c24f8?placeholderIfAbsent=true')",
              }}
            ></div>
          </div>
          <div className="absolute inset-8 flex flex-col justify-center items-center max-md:inset-4">
            <div className="flex flex-wrap gap-6 justify-center mt-8 max-md:gap-4 max-md:mt-4">
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
        </figure>
      </div>
    </section>
  );
}

function StatItem({ icon, number, text }) {
  return (
    <div className="flex gap-4 max-md:gap-2 max-md:flex-col max-md:items-center">
      <img
        src={icon}
        alt="Stat icon"
        className="object-contain shrink-0 aspect-square rounded-[20px] w-[60px] max-md:w-[40px]"
      />
      <div className="flex flex-col my-auto max-md:items-center">
        <h3 className="self-start text-3xl font-bold max-md:text-xl max-md:self-center">
          {number}
        </h3>
        <p className="mt-4 text-base max-md:mt-2 max-md:text-sm text-center">
          {text}
        </p>
      </div>
    </div>
  );
}

export default Stats;
