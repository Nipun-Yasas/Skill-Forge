import React, { useEffect } from "react";


const AboutUs = () => {
  useEffect(() => {
    const handleScroll = () => {
      const aboutSectionElements = document.querySelectorAll('#about div,#cta div,#testimonials div,#features div,#Footer div,#stats div');
      aboutSectionElements.forEach(element => {
        const position = element.getBoundingClientRect();

        // Checking if the element is in the viewport
        if (position.top < window.innerHeight && position.bottom >= 0) {
          element.style.animation = 'fadeIn 2s ease-out forwards';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <> <style>{`
      @keyframes fadeIn {
        0% {
          opacity: 0;
          transform: translateY(30px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

     

      .fadeInAnimate {
        animation: fadeIn 2s ease-out forwards, filling 10s ease-in-out infinite;
      }
    `}</style>
    <section id="about" className="self-center mt-24 w-full max-w-[1298px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col" data-animate>
        <div className="w-6/12 max-md:ml-0 max-md:w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/aee2d33204de82882d73ea6d114032f0cc80597d?placeholderIfAbsent=true"
            alt="About us illustration"
            className="object-contain grow w-full aspect-[0.98] max-md:mt-10 max-md:max-w-full"
          />
        </div>
        <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-28 w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-1.5 self-start text-lg leading-loose text-cyan-500 uppercase">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/552537a730cd8d509b9bbf6fa1f0d4c3f97a8ada?placeholderIfAbsent=true"
                alt="About icon"
                className="object-contain shrink-0 w-3.5 aspect-[0.87]"
              />
              <span>about us</span>
            </div>
            <div className="flex flex-col items-start pl-1.5 mt-8 max-md:max-w-full">
              <h2 className="text-5xl font-bold leading-[50px] text-sky-950 max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
                Empowering Students Through Peer-to-Peer Learning
              </h2>
              <p className="self-stretch mt-7 text-lg leading-8 text-neutral-600 max-md:max-w-full">
                At SkillForge, we believe that learning is most effective when it's shared.
                Our platform connects university students who want to learn new skills with
                peers who already master those skills. Through mentorship, live workshops,
                and hands-on experience, we create a collaborative learning environment that
                makes education practical, engaging, and accessible.
              </p>
              <button className="px-6 py-3 mt-6 text-lg font-semibold text-white bg-sky-600 rounded-lg shadow-md hover:bg-sky-700">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};



export default AboutUs;
