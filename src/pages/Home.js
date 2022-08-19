import React from "react";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Medium from "../components/Medium"
import Contact from "../components/Contact/Contact";
import Footer from "../components/footer/Footer";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Medium />
      <Contact />
      <Footer />
      <FixSocialIcon />
    </>
  );
}

export default Home;
