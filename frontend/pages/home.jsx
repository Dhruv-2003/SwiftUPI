import React from "react";
import Image from "next/image";
import avatar from "../assets/avatar.png";
import scannpay from "../assets/scannpay.png";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className=" text-white flex flex-col px-4 py-6 text-center">
      <h1 className=" text-3xl mb-0 font-bold underline">Dashboard</h1>
      <div className="bg-purple-600 max-w-[200px] mx-auto rounded-xl mt-10   ">
        <Image src={avatar} />
      </div>

      

      <span className=" mt-12">You are paying </span>
      <span className="my-5  text-2xl font-bold">$ 100</span>
    </div>
  );
}
