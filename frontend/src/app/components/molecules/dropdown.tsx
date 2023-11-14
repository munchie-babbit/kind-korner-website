"use client";

import { useState, useEffect, useRef } from "react";
import { Store } from "../../../../types";

export default function Dropdown({
  name,
  options,
}: {
  name: string;
  options: string[];
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(name);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      //@ts-ignore
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  const dropdownRef = useRef(null);
  useEffect(() => {
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, []);

  return (
    <>
      <button
        id={`dropdown-button-${name}`}
        ref={dropdownRef}
        onClick={() => {
          setIsDropdownOpen(!isDropdownOpen);
        }}
        className="text-white bg-customDarkGreen hover:bg-customBlue hover:text-customDarkGreen border border-customDarkGreen font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
        type="button"
      >
        {selectedValue}
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdown"
        className={
          "z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute " +
          (isDropdownOpen ? "" : "hidden")
        }
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby={`dropdown-button-${name}`}
        >
          {options.map((option) => (
            <li key={option}>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 hover:bg-customDarkGreen hover:text-white"
                onClick={() => {
                  setSelectedValue(option);
                }}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
