import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { createWallet } from "../helper";

export default function Mregister() {
  const [pin, setPin] = useState("");
  return (
    <div className=" text-white flex flex-col">
      <div className="flex items-end justify-between px-4 border-b pb-3">
        <h1 className=" text-xl text-center mx-auto mt-4 mb-0 font-bold">
          Register Merchant
        </h1>
      </div>
      <h1 className=" text-2xl text-center font-bold mt-16 underline">
        {" "}
        Enter Details
      </h1>

      <label className="mt-4 md:mx-auto px-10 pt-4" htmlFor="">
        Merchant Name
      </label>
      <input
        type="text"
        className="mt-3 bg-gray-50 px-4 md:mx-auto border text-sm w-72 mx-auto border-gray-300 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="enter name..."
      />
      <label className="mt-4 px-10 pt-4 md:mx-auto" htmlFor="">
        UserID
      </label>
      <input
        type="text"
        className="mt-3 bg-gray-50 px-4 border md:mx-auto text-sm w-72 mx-auto border-gray-300 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="unique username..."
      />
      <label className="mt-4 px-10 pt-4 md:mx-auto" htmlFor="">
        Enter CPIN{" "}
        <span className=" text-xs italic">
          &#40; 6 Digit Secret Crypto PIN &#41;
        </span>
      </label>
      <input
        onChange={(e) => setPin(e.target.value)}
        value={pin}
        type="password"
        pattern="[0-9]*"
        inputmode="numeric"
        minlength="6"
        maxlength="6"
        className="mt-3 bg-gray-50 px-4 border w-72 mx-auto md:mx-auto border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="secret CPIN..."
      />

      <div className="w-[85%] mx-auto mt-5 md:w-[27%]">
        <button onClick={createWallet(pin)} className={`${styles.btn} text-xs`}>
          Register
        </button>
      </div>
    </div>
  );
}
