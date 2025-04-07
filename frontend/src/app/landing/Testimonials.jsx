"use client";
import React from "react";

// TestimonialSection Component
const testimonials = () => {
  const testimonials = [
    {
      quote:
        "Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim. Amet consectetur adipiscing",
      author: "Kathy Sullivan",
      role: "CEO at Ordian IT",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim. Amet consectetur adipiscing",
      author: "Elsie Stroud",
      role: "CEO at Edwards",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim. Amet consectetur adipiscing",
      author: "Kathy Sullivan",
      role: "CEO at Ordian IT",
    },
  ];

  return (
    <section id="testimonials" className="flex flex-col items-center px-8 py-44 w-full bg-white">
      <div className="flex flex-col gap-10 items-center w-full max-w-[1350px]">
        <div className="relative w-full">
          <TestimonialHeader />
          <div className="flex gap-12 justify-center mt-16 max-md:flex-wrap max-sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
              />
            ))}
          </div>
          <BackgroundShape
            className="absolute left-[274px] top-[-72px] w-[240px] h-[234px]"
            color="#00B4D8"
            opacity="0.16"
            width={240}
            height={234}
            cx={120}
            cy={117}
            rx={120}
            ry={117}
          />
          <BackgroundShape
            className="absolute right-[274px] top-[1px] w-[192px] h-[197px]"
            color="#0077B6"
            opacity="0.05"
            width={192}
            height={197}
            cx={96}
            cy={98.5}
            rx={96}
            ry={98.5}
          />
        </div>
      </div>
    </section>
  );
};

export default testimonials;

// TestimonialHeader Component
const TestimonialHeader = () => {
  return (
    <>
      <div className="px-6 mx-auto h-8 text-sm leading-8 text-center text-cyan-500 uppercase bg-white rounded-md w-[142px]">
        Testimonial
      </div>
      <h2 className="mt-14 text-5xl font-bold text-center leading-[58.5px] max-w-[578px] mx-auto text-sky-950 max-md:text-4xl max-md:leading-10 max-sm:text-3xl max-sm:leading-10">
        Creating A Community Of Life Long Learners.
      </h2>
    </>
  );
};

export { TestimonialHeader };

// TestimonialCard Component
const TestimonialCard = ({ quote, author, role }) => {
  return (
    <article className="flex relative flex-col p-8 bg-blue-50 rounded-3xl shadow-sm w-[407px] max-sm:w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b613640e22bf34bbbee18e0ecf20e976c22f9909"
        alt="Quote icon"
        className="absolute -top-[29px] -left-[19px] w-[70px] h-[46px]"
      />
      <blockquote className="mb-4 text-lg leading-8 text-neutral-700">
        &quot;{quote}&quot;
      </blockquote>
      <h3 className="mt-4 text-xl font-bold leading-6 text-sky-950">
        {author}
      </h3>
      <p className="mt-4 text-lg leading-8 text-neutral-600">{role}</p>
    </article>
  );
};

export { TestimonialCard };

// BackgroundShape Component
const BackgroundShape = ({
  className,
  color,
  opacity,
  width,
  height,
  cx,
  cy,
  rx,
  ry,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <ellipse
        cx={cx}
        cy={cy}
        rx={rx}
        ry={ry}
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};

export { BackgroundShape };
