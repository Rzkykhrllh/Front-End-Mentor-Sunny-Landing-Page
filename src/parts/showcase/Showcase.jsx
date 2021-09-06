import React from "react";
import EggImage from "images/desktop/image-transform.jpg";
import data from "./data";
import data2 from "./data2";
import "./showcase.css";

function Showcase() {
  return (
    <section id="showcase" className="relative">
      <div className="absolute" style={{ top: "-64px" }}></div>
      {data.map((info, index) => (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 bg-mywhite"
          key={"showcase1-" + index}
        >
          {/* left */}
          <div
            className={
              ` flex-initial block py-10 mx-auto my-auto text-center text-gray-700 sm:py-5 sm:text-left ` +
              (index % 2 === 0 ? "sm:order-1" : "sm:order-2")
            }
            style={{ width: "80%" }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-fraunces ">
              {info.Title}
            </h2>
            <p className="my-10 text-sm text-gray-400 md:my-5 sm:my-3 md:text-base lg:text-xl lg:my-10">
              {info.Caption}
            </p>
            <div className="relative learnmore">
              <a href="#" className="font-fraunces">
                LEARN MORE
              </a>
            </div>
          </div>

          {/* kanan */}
          <div
            className={
              `flex-initial order-1 bg-green-900 ` +
              (index % 2 === 0 ? "sm:order-2" : "sm:order-1")
            }
          >
            <div className="overflow-hidden img-wrapper">
              <img src={info.Image} className="w-full" />
            </div>
          </div>
        </div>
      ))}

      <div className="grid grid-cols-1 sm:grid-cols-2">
        {data2.map((info2, index) => (
          <div
            className={
              `flex-initial order-1 bg-green-900 relative` +
              (index % 2 === 0 ? "sm:order-2" : "sm:order-1")
            }
            key={"showcase2-" + index}
          >
            <div className="relative overflow-hidden img-wrapper">
              <img
                src={info2.Imagedekstop}
                className="hidden w-full sm:block"
              />
              <img src={info2.Imagemobile} className="block w-full sm:hidden" />
              <div
                className="absolute left-0 right-0 z-20 mx-auto text-center mb-44 lg:w-60% w-80%"
                style={{ top: "63%", color: info2.color }}
              >
                <h3 className="lg:text-3xl sm:text-xl font-fraunces">
                  {info2.Title}
                </h3>
                <p className="mt-2 text-base sm:text-sm md:mt-4 lg:mt-6 md:text-base lg:text-xl">
                  {info2.Caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Showcase;
