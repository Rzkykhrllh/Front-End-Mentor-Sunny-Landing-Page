import React from "react";

function Footer() {
  return (
    <section>
      <div
        className="py-20 text-center bg-green-200"
        style={{ color: "#25534C" }}
      >
        <h3 className="justify-center lg:text-3xl sm:text-xl font-fraunces">
          Sunnyside
        </h3>
        <div
          className="flex justify-center my-10 gap-x-16"
          style={{ color: "#2E7565" }}
        >
          {navigation.map((nav, index) => (
            <a
              href={nav.href}
              className="justify-center flex-none hover:text-white"
            >
              {nav.name}
            </a>
          ))}
        </div>

        <div className="flex justify-center mt-16 gap-x-10 hover:text-white">
          {sosmed.map((sosmed, idx) => (
            <a href={sosmed.href}>
              <img src={sosmed.src} alt="" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Footer;

const navigation = [
  {
    name: "About",
    href: "#About",
  },
  {
    name: "Services",
    href: "#Services",
  },
  {
    name: "Projects",
    href: "#Projects",
  },
];

const sosmed = [
  {
    src: "/images/icon-facebook.svg",
    alt: "Facebook Icon",
    href: "#facebook",
  },
  {
    src: "/images/icon-instagram.svg",
    alt: "Instagram Icon",
    href: "#instagram",
  },
  {
    src: "/images/icon-twitter.svg",
    alt: "Twitter Icon",
    href: "#twitter",
  },
  {
    src: "/images/icon-pinterest.svg",
    alt: "Pinterest Icon",
    href: "#pinterest",
  },
];
