import React from "react";
import Image from "next/image";
import avatar from "../assets/avatar.png";
import styles from "../styles/Home.module.css";

export default function Pay() {
  return (
    <div className=" text-white flex flex-col px-4 py-6 text-center">
      <h1 className=" text-3xl mb-0 font-bold underline">SwiftUPI</h1>
      <div className="bg-purple-700 max-w-[200px] mx-auto rounded-xl mt-10   ">
        <Image src={avatar} />
      </div>
      <span className="mt-12 text-xl font-bold">Kushagara Sarathe</span>
      <span className=" text-lg font-bold">kushagra@swift</span>

      <span className=" mt-12">You are paying </span>
      <span className="my-5  text-2xl font-bold">$ 100</span>

      <input
        type="text"
        id="input-group-1"
        className="mt-6 bg-gray-50 px-4 border w-11/12 mx-auto border-gray-300 text-gray-300 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Note..."
      />

      <div className=" flex flex-col  mt-8">
        <span>
          {" "}
          Paying with wallet:
          <span className="font-bold text-sm  block my-2">
            0xF0bAfD58E23726785A1681e1DEa0da15cB038C61
          </span>
        </span>

        <button className={styles.btn}>Pay Now</button>
      </div>
    </div>
  );
}
