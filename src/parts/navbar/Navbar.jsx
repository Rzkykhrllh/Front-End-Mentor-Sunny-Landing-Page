/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import LogoType from "../../images/logo.svg";

const navigation = [
  { name: "About", href: "#", current: false },
  { name: "Services", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Contact", href: "#", current: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="fixed w-full ">
      {({ open }) => (
        <>
          <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8 bg-lightblue">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button
                  id="mobile"
                  className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon
                      className="block w-6 h-6 text-white"
                      aria-hidden="true"
                    />
                  ) : (
                    <MenuIcon
                      className="block w-6 h-6 text-white"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>

              {/* navbar kiri */}
              <div
                id="leftNavbar"
                className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start"
              >
                {/* flex-shrink-0 biar gak bisa mengecil */}
                <div
                  className="flex items-center flex-shrink-0"
                  id="logo image"
                >
                  <img
                    // dibawah lg baru keliatan
                    className="block w-auto h-8 lg:hidden"
                    src={LogoType}
                  />

                  <img
                    // diatas lg keliatan
                    className="hidden w-auto h-8 lg:block"
                    src={LogoType}
                  />
                </div>
              </div>

              {/* navbar-right */}
              <div
                id="right-navbar"
                className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
              >
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "text-gray-900 bg-white rounded-3xl font-fraunces hover:text-white hover:bg-white_transparent" //aktif state
                            : "text-white hover:text-gray-900", //nonaktif state
                          "px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="p-5 mx-5 mt-5 bg-white">
              <div className="pb-3 space-y-5">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-yellow text-black font-fraunces rounded-full "
                        : " text-gray-500 hover:text-black",
                      "block px-3 py-2 rounded-md  text-xl text-center"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}