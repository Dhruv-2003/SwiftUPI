import React from "react";
import styles from '../styles/Home.module.css'

export default function Mregister() {
  return (
    <div className=" text-white flex flex-col">

        <h1 className=" text-2xl text-center font-bold mt-16 underline"> Enter Details</h1>

      <label  className="mt-4 px-10 pt-4" htmlFor="">Merchant Name</label>
      <input
        type="text"
        className="mt-3 bg-gray-50 px-4 border text-sm w-72 mx-auto border-gray-300 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="enter name..."
      />
      <label className="mt-4 px-10 pt-4" htmlFor="">UserID</label>
      <input
        type="text"
        className="mt-3 bg-gray-50 px-4 border text-sm w-72 mx-auto border-gray-300 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="unique username..."
      />
      <label  className="mt-4 px-10 pt-4" htmlFor="">Enter CPIN <span className=" text-xs italic">&#40; 6 Digit Secret Crypto PIN &#41;</span></label>
      <input
        type="password"
        pattern="[0-9]*" inputmode="numeric"
        minlength="6" maxlength="6"
        className="mt-3 bg-gray-50 px-4 border w-72 mx-auto border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="secret CPIN..."
      />

      <div className="w-[85%] mx-auto mt-5">
      <button className={`${styles.btn} text-xs  `}>Register</button>
      </div>
    </div>
  );
}
