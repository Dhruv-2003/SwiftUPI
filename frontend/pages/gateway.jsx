import React from "react";

export default function gateway() {
  return (
    <div className="flex flex-col text-white">
      <div>
        <h1 className=" w-full py-6 px-4 font-bold text-2xl">
          Merchant Name
        </h1>
      </div>
      
      <div className=" flex flex-col items-start justify-center my-[50%]  py-16 px-4">
        <label
          for="input-group-1"
          className="block font-medium mb-6  text-xl"
        >
          Wallet Address
        </label>
        <div className="relative mb-6 w-full">
          <div className="absolute inset-y-0 left-0 flex items-center w-full pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </div>
          <input
            type="text"
            id="input-group-1"
            className="bg-gray-50 border w-full border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="0x095..."
          />
        </div>
      </div>

      <div className=" py-6 px-4 w-full absolute bottom-0">
        <button
          type="button"
          class=" w-full bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md"
        >
          Proceed
        </button>
      </div>
    </div>
  );
}
