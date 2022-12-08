import React, { useState, useEffect } from "react";
import GenerateQR from "../components/GenerateQR";

export default function gateway() {
  // create the hook to create a Request , basically calls API in the backend
  // Model Opens Up
  // Then passes the ID to the Qr generator below
  // Or take alias input from the User and then send the request directly to the person using it
  // Recieve a Confirm Payment message and then close the component

  /// this page is when the gateway / modal is Open

  // default reqId is 2 ,for now , giving Example
  const [reqId, setReqId] = useState(2);

  // useEffect(() => {}, [third]);

  return (
    <div className="flex flex-col text-white">
      <div className=" w-full bg-[#5c80ff] text-black">
        <h1 className=" w-full py-6 px-4 font-bold text-2xl">SwiftUPI</h1>
      </div>

      <div className=" flex flex-col items-start justify-center mt-6 py-16 px-4">
        <label htmlFor="" className="text-xl mt-6 mb-3 font-semibold">
          Pay Using Unique ID
        </label>
        <div className="relative mb-6 w-full rounded-md border-gray-300 border my-4 py-6 px-4">
          <label htmlFor="" className="text-md font-semibold">
            Enter Unique ID
          </label>

          <input
            type="text"
            id="input-group-1"
            className="bg-gray-50 px-4 mt-4 border w-full border-gray-300 text-gray-300 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="example@swift"
          />
        </div>

        <label htmlFor="" className="text-xl mt-6 mb-3 font-semibold">
          Pay Using QR Code
        </label>
        <GenerateQR id={reqId} />
      </div>

      <div className=" py-6 px-4 flex justify-between items-center w-full absolute bottom-0">
        <span className=" font-bold text-2xl ">$ 60</span>
        <button
          type="button"
          className=" w-[200px] bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md"
        >
          Pay Now
        </button>
        {/* use for loading button */}
        {/* <button
          type="button"
          className=" w-[200px] bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md"
        >
          <svg
            role="status"
            class="inline mr-3 w-4 h-4 text-white animate-spin"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
          Loading...
        </button> */}
      </div>
    </div>
  );
}
