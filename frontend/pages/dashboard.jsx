import React, { useState, useEffect } from "react";
import Image from "next/image";
import avatar from "../assets/avatar.png";
import {
  ProfileManager_ABI,
  ProfileManager_Address,
  SDKManager_ABI,
  SDKManager_Address,
} from "../constants/constants";
import { ethers } from "ethers";

export default function Dashboard() {
  const [publicKey, setPublicKey] = useState("");
  const [userData, setUserData] = useState("");
  const [isUser, setIsUser] = useState(false);
  const [isMerchant, setIsMerchant] = useState(false);
  const [userBalance, setUserBalance] = useState(0);

  const RPC_URL =
    "https://flashy-cold-choice.matic-testnet.discover.quiknode.pro/a27666d2e485f614bdb3ac5b4ed4f59c067a8d28/";

  const fetchPublicKey = async () => {
    try {
      const walletAddress = localStorage.getItem("walletAddress");
      console.log(walletAddress);
      setPublicKey(walletAddress);
      if (walletAddress) {
        /// we are fetching both for now , can be customized later
        fetchMerchant();
        fetchUser();

        fetchBalance();
      } else {
        console.log("User not registered");
        Router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUser = async () => {
    try {
      const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

      const SDKManager_contract = new ethers.Contract(
        SDKManager_Address,
        SDKManager_ABI,
        provider
      );

      const data = await SDKManager_contract.fetchUser(walletAddress);
      console.log(data);
      setUserData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMerchant = async () => {
    try {
      const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

      const SDK = new ethers.Contract(
        ProfileManager_Address,
        ProfileManager_ABI,
        provider
      );

      const data = await ProfileManager_Contract.fetchUser(walletAddress);
      console.log(data);
      setUserData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBalance = async () => {
    try {
      const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
      const _balance = await provider.getBalance(publicKey);
      const balance = ethers.utils.formatEther(_balance);
      console.log(balance);
      setUserBalance(balance);
    } catch (error) {
      console.error(error);
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
