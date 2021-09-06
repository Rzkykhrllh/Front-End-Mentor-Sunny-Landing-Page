import React from "react";

function Gallery() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4">
      {Picture.map((picture, index) => (
        <div className="flex-initial" key={"gallery-" + index}>
          <img src={picture.picture} alt="" className="h-full" />
        </div>
      ))}
    </section>
  );
}

export default Gallery;

const Picture = [
  {
    picture: "/images/desktop/image-gallery-milkbottles.jpg",
  },
  {
    picture: "/images/desktop/image-gallery-orange.jpg",
  },
  {
    picture: "/images/desktop/image-gallery-cone.jpg",
  },
  {
    picture: "/images/desktop/image-gallery-sugarcubes.jpg",
  },
];
