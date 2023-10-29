"use client";
import { useState, useRef, useEffect } from "react";

const SearchBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const dropdownRef = useRef(null);
  const categories = ["All categories", "Home", "Art", "Beauty"];

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      //@ts-ignore
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <form className=" ">
      <div className="flex w-auto">
        <label
          htmlFor="search-dropdown"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <button
          id="dropdown-button"
          ref={dropdownRef}
          onClick={handleDropdownToggle}
          className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-customDarkGreen bg-background border border-customDarkGreen rounded-l-lg hover:bg-customDarkGreen hover:text-white"
          type="button"
        >
          {selectedCategory}
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
            "z-10 bg-background divide-y divide-gray-100 rounded-lg shadow w-44 top-16 absolute " +
            (isDropdownOpen ? "" : "hidden")
          }
        >
          <ul
            className="py-2 text-sm text-gray-700"
            aria-labelledby="dropdown-button"
          >
            {categories.map((category, key) => (
              <li key={key}>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-customDarkGreen hover:text-white"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative" style={{ width: "400px" }}>
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-shm text-customDarkGreen bg-background rounded-r-lg  border-l-0 border border-customDarkGreen "
            placeholder="Search local businesses"
            autoComplete="off"
          />
          <button
            type="submit"
            className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-customDarkGreen rounded-r-lg border border-customDarkGreen"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
