import React from "react";
import EggImage from "images/desktop/image-transform.jpg";
import data from "./data";
import { InformationCircleIcon } from "@heroicons/react/outline";

function Showcase() {
  return (
    <section>
      {data.map((info, index) => (
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* left */}
          <div
            className={
              `flex-initial block py-10 mx-auto my-auto text-center text-gray-700 sm:py-5 sm:text-left ` +
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
            <a href="#" className="font-fraunces">
              LEARN MORE
            </a>
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
    </section>
  );
}

export default Showcase;
