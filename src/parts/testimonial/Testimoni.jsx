import React from "react";
import TestimoniData from "./TestimoniData";

function Testimoni() {
  return (
    <section className="flex max-h-full min-h-screen px-8 py-16 text-gray-700 bg-mywhite">
      <div className="mx-auto my-auto text-center">
        <h2 className="mb-20 text-2xl text-gray-500 font-fraunces">
          CLIENT TESTIMONIAL
        </h2>

        <div className="flex flex-wrap justify-center">
          {TestimoniData.map((testi, index) => (
            <div className="w-full mx-6 mt-20 text-center md:flex-none md:w-80 lg:w-96">
              <img
                src={testi.Photo}
                alt=""
                className="h-20 mx-auto rounded-full"
              />
              <p className="mt-12 mb-8 text-xl text-gray-500">
                {testi.Testimony}
              </p>

              <h3 className="text-xl font-fraunces">{testi.Name}</h3>
              <p className="mt-4 text-base text-gray-500">{testi.Job}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimoni;
