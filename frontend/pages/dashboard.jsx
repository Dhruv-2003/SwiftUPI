import React, { useState, useEffect } from "react";
import Image from "next/image";
import avatar from "../assets/avatar.png";

export default function Dashboard() {
  const [publicKey, setPublicKey] = useState("");

  const fetchUser = async () => {
    try {
      const walletAddress = localStorage.getItem("walletAddress");
      console.log(walletAddress);
      setPublicKey(walletAddress);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div className=" text-white flex flex-col text-center">
      <h1 className=" text-3xl mb-0 mt-16 font-bold underline">Dashboard</h1>
      <div className="bg-purple-700 max-w-[200px] mx-auto rounded-xl mt-10   ">
        <Image src={avatar} alt="avatar" />
      </div>
      {/* if merchant render name else dont */}
      <span className="mt-12 text-xl font-bold">Kushagara Sarathe</span>
      <span className=" text-lg font-bold mt-4 underline">kushagra@swift</span>
      <span className=" text-xl font-bold mt-4">Balance is $ 756</span>
      <span className=" mt-8 font-bold">
        {" "}
        Wallet Address:
        <span className="font-bold text-xs  block my-2">
          0xF0bAfD58E23726785A1681e1DEa0da15cB038C61
        </span>
      </span>
    </div>
  );
}
