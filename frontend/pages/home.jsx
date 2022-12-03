import React from "react";
import Image from "next/image";
import scannpay from "../assets/scannpay.png";
import landing from "../assets/landing.png";
import avatar from "../assets/avatar.png";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Alert, Avatar } from "flowbite-react";
import { useState } from "react";

export default function Home() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className=" text-white flex flex-col px-4 pt-6">
        <div className="flex items-end justify-between px-4 border-b pb-3">
          <h1 className=" text-xl mb-0 font-bold">Home</h1>
          <div
            onClick={() => setToggle(!toggle)}
            className={`flex flex-wrap gap-2 ${
              toggle ? "bg-purple-400" : "bg-purple-600"
            } rounded-[100%]`}
          >
            <Avatar
              img="https://raw.githubusercontent.com/Dhruv-2003/SwiftUPI/main/frontend/assets/avatar.png"
              rounded={true}
            />
          </div>
        </div>

        <div className="mt-10 max-w-[320px] mx-auto  ">
          <Image src={landing} />
        </div>

        <div className=" text-white flex flex-col px-4 py-6 pb-14 text-center">
          <h2 className=" text-white text-center text-2xl mt-2  mb-8 font-bold underline ">
            Payment Options{" "}
          </h2>
          <div className="mt-3 flex items-center justify-around text-xl font-bold">
            <Link href={"/create-qr"}>
              <div className=" hover:scale-105 cursor-pointer transition ease-in-out">
                <div className=" h-[60px] w-[60px] bg-purple-700 max-w-[60px] mx-auto rounded-xl   ">
                  <Image alt="image" src={scannpay} />
                </div>
                <label className=" text-sm" htmlFor="">
                  Scan &#38; Pay
                </label>
              </div>
            </Link>

            <Link href={"/create-qr"}>
              <div className=" hover:scale-105 cursor-pointer transition ease-in-out">
                <div className=" h-[60px] w-[60px] bg-purple-700 max-w-[60px] mx-auto rounded-xl   ">
                  <div className="text-4xl pt-3">👱🏻‍♂️</div>
                </div>
                <label className=" text-sm" htmlFor="">
                  To UserID
                </label>
              </div>
            </Link>

            <Link href={"/create-qr"}>
              <div className=" hover:scale-105 cursor-pointer transition ease-in-out">
                <div className=" h-[60px] w-[60px] bg-purple-700 max-w-[60px] mx-auto rounded-xl   ">
                  <div className="text-4xl pt-3">💸</div>
                </div>
                <label className=" text-sm" htmlFor="">
                  Dashboard
                </label>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${
          toggle ? "visible" : "hidden"
        } bg-[#191935] backdrop-filter backdrop-blur-2xl bg-opacity-25 blur-none absolute min-h-screen w-full top-20 `}
      >
        <h2 className=" text-white text-center text-lg font-bold mt-6">
          Notifications
        </h2>
        {/* add mapping here for new notifications */}
        <div className="mt-3 mx-5">
        <Alert color="info">
          <span>
            <span className="font-semibold">New Request!</span> Dhruv has requested $60
          </span>
        </Alert>
        </div>
      </div>
    </>
  );
}
