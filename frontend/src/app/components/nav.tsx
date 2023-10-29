import React from "react";
import logo from "../images/logo.png";
import Image from "next/image";

export default function Nav() {
  const name = "Kind Korner";
  const menuOptions = [
    { name: "Our Story", link: "#our-story" },
    { name: "Our Mission", link: "#our-mission" },
    { name: "Events (Coming Soon)", link: "#" },
  ];
  const scrollToSection = (anchor: string) => {
    const section = document.getElementById(anchor);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-background dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-customDarkGreen ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <Image src={logo} className="w-40 mr-3" alt="Kind Korner Logo" />
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            onClick={() => scrollToSection("join-us")}
            className="text-white bg-customDarkGreen hover:bg-customGreen focus:ring-4 focus:outline-none focus:background-customDarkGreen font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
          >
            Join Us
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-customDarkGreen-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            {menuOptions.map((option, key) => (
              <li key={key}>
                <a
                  href={option.link}
                  className="block py-2 pl-3 pr-4 text-customDarkGreen rounded md:bg-transparent md:text-customDarkGreen-700 md:p-0 "
                  aria-current="page"
                >
                  {option.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
