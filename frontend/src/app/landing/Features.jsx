import React from "react";

function Features() {
  const features = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b13c7aa8df0d4a4578ed55c84338d712df64bdf5?placeholderIfAbsent=true",
      title: "Skill Exchange System",
      description: "Learn for free by trading skills with others.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1045b19a06e7b491cf827f92292b67f2c9307d88?placeholderIfAbsent=true",
      title: "Best Live Virtual Workshops",
      description: "Gain practical knowledge through interactive sessions.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5942b330e8bc0ee6d4844e2b21aa3cd507baa5bd?placeholderIfAbsent=true",
      title: "Community Forums Coaching",
      description: "Join discussions and collaborate with fellow learners.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/00258e499d1eb8f616c6485b18a5a4c3fbba0e8e?placeholderIfAbsent=true",
      title: "Best One-on-One MentorshipCoaching",
      description: "Connect with experienced peers for guidance.",
    },
  ];

  return (
    <section className="flex flex-col px-7 pt-20 pb-40 mt-12 w-full bg-cyan-100 bg-opacity-40 max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
      <h2 className="self-center text-5xl font-bold leading-none text-center text-sky-950 max-md:max-w-full max-md:text-4xl">
        Check out educate features
      </h2>
      <div className="mt-24 mb-0 max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <article className="w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col items-center px-2 py-9 mx-auto w-full text-center bg-white rounded-3xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:mt-10">
        <img
          src={icon}
          alt={title}
          className="object-contain max-w-full aspect-square rounded-[45px] w-[108px]"
        />
        <h3 className="mt-6 text-2xl font-bold leading-6 text-sky-950">
          {title}
        </h3>
        <p className="self-stretch mt-7 text-base leading-8 text-indigo-900">
          {description}
        </p>
        <button className="flex gap-3.5 px-5 py-6 mt-11 max-w-full text-base tracking-normal leading-4 text-white bg-cyan-500 rounded-[200px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[156px] max-md:mt-10">
          <span>view details</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5fa84eddbccfb8e58a2c48fc7fbe7610e214c7dd?placeholderIfAbsent=true"
            alt="Arrow"
            className="object-contain shrink-0 aspect-[1.21] w-[17px]"
          />
        </button>
      </div>
    </article>
  );
}

export default Features;
