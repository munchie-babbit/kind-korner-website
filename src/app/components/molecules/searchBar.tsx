"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function SearchBar({
  business_categories = [],
}: {
  business_categories: string[];
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event: any) => {
    setSearchValue(event.target.value);
  };

  const dropdownRef = useRef(null);

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
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
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
          onClick={() => {
            setIsDropdownOpen(!isDropdownOpen);
          }}
          className="flex-shrink-0 z-10 inline-flex items-center min-w-[160px] py-2.5 px-4 text-sm font-medium text-center text-customDarkGreen bg-background border-[1.5px] border-customDarkGreen rounded-l-lg hover:bg-customDarkGreen hover:text-white"
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
            {business_categories.length > 0
              ? business_categories.map((category, key) => (
                  <li key={key}>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 hover:bg-customDarkGreen hover:text-white"
                      onClick={() => {
                        setSelectedCategory(category);
                      }}
                    >
                      {category}
                    </button>
                  </li>
                ))
              : null}
          </ul>
        </div>
        <div className="relative" style={{ width: "400px" }}>
          <input
            type="search"
            id="search-dropdown"
            className="search-input block p-2.5 w-full z-20 text-shm text-customDarkGreen bg-background rounded-r-lg  border-l-0 border-[1.5px] border-customDarkGreen "
            placeholder="Search local businesses"
            autoComplete="off"
            value={searchValue}
            onChange={handleInputChange}
          />
          <Link
            href={
              "/directory" +
              (selectedCategory !== "All categories"
                ? `?category=${selectedCategory}`
                : "") +
              (searchValue
                ? `${
                    selectedCategory !== "All categories" ? "&" : "?"
                  }search=${searchValue}`
                : "")
            }
          >
            <button
              type="submit"
              className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-customDarkGreen rounded-r-lg border-[1.5px] border-customDarkGreen"
              onClick={() => {
                setSearchValue("");
              }}
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
          </Link>
        </div>
      </div>
    </form>
  );
}
