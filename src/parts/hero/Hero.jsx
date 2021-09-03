import React, { useState, useEffect } from "react";

function Hero() {
  return (
    <section
      className="w-full h-screen bg-bottom bg-no-repeat bg-cover bg-yellow"
      style={{
        zIndex: -1,
        backgroundImage: `url("/images/desktop/image-header.jpg")`,
      }}
    ></section>
  );
}

export default Hero;
