import Hero from "../parts/hero/Hero";
import Navbar from "../parts/navbar/Navbar";
import Showcase from "parts/showcase/Showcase.jsx";
import Testimoni from "parts/testimonial/Testimoni.jsx";
import Gallery from "parts/gallery/Gallery.jsx";
import Footer from "parts/footer/Footer.jsx";
import React, { useState, useEffect, useRef } from "react";
import useScrollPosition from "@react-hook/window-scroll";

function LandingPage() {
  // looking height of every section

  const scroll = useScrollPosition(60);

  // scrolling event
  const [activePos, setActivePos] = useState("About");

  const about = useRef(null);
  const services = useRef(null);
  const testimony = useRef(null);
  // const contact = useRef(null);

  const changeNav = () => {
    const h1 = about.current.offsetHeight;
    const h2 = services.current.offsetHeight;
    const h3 = testimony.current.offsetHeight;
    // const h4 = contact.current.offsetHeight;

    const calculatedScroll = scroll + window.innerHeight / 2;

    if (calculatedScroll < h1) {
      console.log("Sekarang di hero");
      setActivePos("About");
    } else if (calculatedScroll < h1 + h2) {
      console.log("Sekarang di Services");
      setActivePos("Services");
    } else if (calculatedScroll < h1 + h2 + h3) {
      console.log("Sekarang ada di Projects");
      setActivePos("Projects");
    } else {
      console.log("Sekarang di Contact");
      setActivePos("Contact");
    }
  };

  useEffect(() => {
    changeNav();
  }, [scroll]);

  useEffect(() => {
    console.log(`use effect of active post ${activePos}`);
  }, [activePos]);

  return (
    <>
      <Navbar active={activePos} setActivePos={setActivePos} />
      <div ref={about}>
        <Hero />
      </div>

      <div ref={services}>
        <Showcase />
      </div>

      <div ref={testimony}>
        <Testimoni />
      </div>

      <Gallery />
      <Footer setActivePos={setActivePos} />
    </>
  );
}

export default LandingPage;
