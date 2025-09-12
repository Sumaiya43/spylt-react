import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <div className="h-dvh border border-amber-600"></div>
    </div>
  );
};

export default App;
