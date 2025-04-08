import React from "react";

const Footer = () => {
  return (
    <footer id="Footer" className="px-20 pt-20 pb-44 w-full bg-sky-600 bg-opacity-70 max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col font-medium max-md:mt-10">
            <h3 className="self-start text-2xl text-neutral-50">Contact</h3>
            <address className="mt-10 text-base text-white max-md:mt-10 not-italic">
              2972 Westheimer Rd. Santa Ana, Illinois 85486
            </address>
          </div>
        </div>
        <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <nav className="flex flex-col grow text-base font-medium text-white max-md:mt-10">
            <h3 className="text-2xl text-neutral-50 max-md:mr-2.5">Company</h3>
            <a href="#about" className="self-start mt-9">
              About Us
            </a>
            <a href="#teach" className="mt-7">
              Teach on Byway
            </a>
            <a href="#blog" className="self-start mt-6">
              Blog
            </a>
          </nav>
        </div>
        <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <nav className="flex flex-col grow items-start text-base font-medium text-white max-md:mt-10">
            <h3 className="text-2xl text-neutral-50">Support</h3>
            <a href="#help" className="self-stretch mt-9">
              Help and Support
            </a>
            <a href="#terms" className="mt-6">
              Terms
            </a>
            <a href="#privacy" className="mt-7">
              Privacy Policy
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
