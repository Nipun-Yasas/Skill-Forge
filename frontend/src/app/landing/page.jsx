"use client";
import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Stats from "./Stats";
import Features from "./Features";
import AboutUs from "./AboutUs.jsx";
import Testimonials from "./Testimonials";
import CallToAction from "./CallToAction";
import Footer from "./Footer";

function page() {
  return (
    <main className="flex overflow-hidden flex-col bg-white">
      <Header />
      <Hero />
      <Stats />
      <AboutUs />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}

export default page;