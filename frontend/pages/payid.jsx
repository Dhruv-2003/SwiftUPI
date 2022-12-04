import Link from 'next/link';
import React from 'react'
import styles from "../styles/Home.module.css";

export default function Payid() {
  const [pin, setPin] = React.useState("");
  const [id, setId] = React.useState("");

  return (
    <div className=" text-white flex flex-col">
      <div className="flex items-end justify-between px-4 border-b pb-3">
        <h1 className=" text-xl text-center mx-auto mt-4 mb-0 font-bold">
          Pay Using Unique ID
        </h1>
      </div>
      <h1 className=" text-2xl text-center font-bold mt-16 underline">
        {" "}
        Enter Details
      </h1>

      <label className="mt-4 md:mx-auto px-10 pt-4" htmlFor="">
        Enter UCPI ID
      </label>
      <input
        type="text"
        onChange={(e) => setId(e.target.value)}
        value={id}
        className="mt-3 bg-gray-50 px-4 md:mx-auto border text-sm w-72 mx-auto border-gray-300 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="enter swift ucpi id..."
      />

      <div className="w-[85%] mx-auto mt-5 md:w-[27%]">
        <Link href={`/pay/${id}`}  className={`${styles.btn} text-xs`}>
          Proceed
        </Link>
      </div>
    </div>
  )
}
