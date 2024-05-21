import React from "react";

const SingleCurrencyRect = () => {
  return (
    <div className="p-8 bg-gray-200 shadow-md w-1/3 space-y-4">
      <div className="flex space-x-4">
        <img
          className="h-10 w-10 rounded-full"
          src="/src/assets/flags/united-states.png"
          alt=""
        />
        <div className="relative ">
          <input
            type="number"
            id="floating_outlined"
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="floating_outlined"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Floating outlined
          </label>
        </div>
      </div>
      <hr />
      <button
        type="button"
        className="p-3 text-sm font-medium text-gray-500 focus:outline-none bg-gray-100 rounded-lg hover:bg-gray-200 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
      >
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 10H1m0 0 3-3m-3 3 3 3m1-9h10m0 0-3 3m3-3-3-3"
          />
        </svg>
        <span className="sr-only">Convert currency</span>
      </button>
      <div className="flex space-x-4 ">
        <img
          className="h-10 w-10 rounded-full"
          src="/src/assets/flags/turkey.png"
          alt=""
        />
        <div className="relative ">
          <input
            type="number"
            id="floating_outlined"
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            disabled
          />
          {/* <label
            htmlFor="floating_outlined"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Floating outlined
          </label> */}
        </div>
      </div>
    </div>
  );
};

export default SingleCurrencyRect;
