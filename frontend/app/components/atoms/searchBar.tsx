import React from "react";

const SearchBar = () => {
  return (
    <form>
      <div className="relative " style={{ width: "400px" }}>
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-customDarkGreen border border-customDarkGreen rounded-lg bg-gray-50"
          placeholder="Search local businesses"
          required
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-customDarkGreen hover:bg-customGreen font-medium rounded-lg text-sm px-4 py-2 "
        >
          Search
        </button>
      </div>
    </form>
    // <form className=" ">
    //   <div className="flex w-auto">
    //     <label
    //       htmlFor="search-dropdown"
    //       className="mb-2 text-sm font-medium text-gray-900 sr-only"
    //     >
    //       Search
    //     </label>
    //     <button
    //       id="dropdown-button"
    //       data-dropdown-toggle="dropdown"
    //       className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-customDarkGreen bg-background border border-customDarkGreen rounded-l-lg hover:bg-customDarkGreen hover:text-white"
    //       type="button"
    //     >
    //       All categories{" "}
    //       <svg
    //         className="w-2.5 h-2.5 ml-2.5"
    //         aria-hidden="true"
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 10 6"
    //       >
    //         <path
    //           stroke="currentColor"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth="2"
    //           d="m1 1 4 4 4-4"
    //         />
    //       </svg>
    //     </button>
    //     <div
    //       id="dropdown"
    //       className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
    //     >
    //       <ul
    //         className="py-2 text-sm text-gray-700"
    //         aria-labelledby="dropdown-button"
    //       >
    //         <li>
    //           <button
    //             type="button"
    //             className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
    //           >
    //             Mockups
    //           </button>
    //         </li>
    //         <li>
    //           <button
    //             type="button"
    //             className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
    //           >
    //             Templates
    //           </button>
    //         </li>
    //         <li>
    //           <button
    //             type="button"
    //             className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
    //           >
    //             Design
    //           </button>
    //         </li>
    //         <li>
    //           <button
    //             type="button"
    //             className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
    //           >
    //             Logos
    //           </button>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="relative" style={{ width: "400px" }}>
    //       <input
    //         type="search"
    //         id="search-dropdown"
    //         className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg  border-l-0 border border-customDarkGreen focus:ring-blue-500 focus:border-blue-500"
    //         placeholder="Search local businesses"
    //         required
    //       />
    //       <button
    //         type="submit"
    //         className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-customDarkGreen rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
    //       >
    //         <svg
    //           className="w-4 h-4"
    //           aria-hidden="true"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 20 20"
    //         >
    //           <path
    //             stroke="currentColor"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
    //           />
    //         </svg>
    //         <span className="sr-only">Search</span>
    //       </button>
    //     </div>
    //   </div>
    // </form>
  );
};

export default SearchBar;
