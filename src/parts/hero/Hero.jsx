import React, { useState, useEffect } from "react";

function Hero() {
  return (
    <section
      id="landingpage"
      className="w-full h-screen bg-bottom bg-no-repeat bg-cover bg-yellow"
      style={{
        zIndex: -1,
        backgroundImage: `url("/images/desktop/image-header.jpg")`,
      }}
    >
      <h1 className="pt-40 text-4xl tracking-widest text-center text-white font-fraunces">
        WE ARE CREATIVES
      </h1>
      <img
        src="\images\icon-arrow-down.svg"
        alt=""
        className="mx-auto mt-20 sm:mt-24"
      />
    </section>
  );
}

export default Hero;
