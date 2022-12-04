import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { encrypt, decrypt } from "@metamask/browser-passworder";
import HDWalletProvider from "@truffle/hdwallet-provider";
import {
  ProfileManager_ABI,
  ProfileManager_Address,
} from "../constants/constants";
import SmartAccount from "@biconomy/smart-account";
import { ethers } from "ethers";
import { ChainId } from "@biconomy/core-types";

export default function Uregister() {
  const [pin, setPin] = useState("");
  const [userName, setUserName] = useState("");
  const [swiftAlias, setSwiftAlias] = useState("");

  const RPC_URL =
    "https://flashy-cold-choice.matic-testnet.discover.quiknode.pro/a27666d2e485f614bdb3ac5b4ed4f59c067a8d28/";

  const createWallet = (password) => {
    try {
      let randomWallet = ethers.Wallet.createRandom();
      console.log(randomWallet);
      console.log(randomWallet._signingKey().privateKey);
      localStorage.setItem("walletAddress", randomWallet.address);
      encrypt(password, randomWallet._signingKey().privateKey).then(function (
        blob
      ) {
        localStorage.setItem("wallet", blob);
        createSCW();
      });
    } catch (error) {
      console.log(error);
    }
  };

  const createSCW = async () => {
    try {
      const pk = await decrypt(pin, localStorage.getItem("wallet"));
      const privateKey = pk.slice(2);
      console.log(privateKey, RPC_URL);

      const providerWithSigner = new HDWalletProvider(privateKey, RPC_URL);
      const providerwallet = new ethers.providers.Web3Provider(
        providerWithSigner
      );
      let options = {
        activeNetworkId: ChainId.POLYGON_MUMBAI,
        supportedNetworksIds: [
          ChainId.GOERLI,
          ChainId.POLYGON_MAINNET,
          ChainId.POLYGON_MUMBAI,
        ],
        networkConfig: [
          {
            chainId: ChainId.POLYGON_MUMBAI,
            // Optional dappAPIKey (only required if you're using Gasless)
            dappAPIKey: "59fRCMXvk.8a1652f0-b522-4ea7-b296-98628499aee3",
            // if need to override Rpc you can add providerUrl:
            // providerUrl: "https://data-seed-prebsc-1-s1.binance.org:8545/",
          },
        ],
      };

      // const walletProvider = wallet.provider;

      let smartAccount = new SmartAccount(providerwallet, options);
      smartAccount = await smartAccount.init();
      let smartAccountInfo = await smartAccount.getSmartAccountState();
      console.log("smartAccountInfo", smartAccountInfo);
      // setSmartConnectWallet(smartAccount);
      const address = smartAccountInfo.address;
      console.log("address", address);
      addUser(address);
    } catch (error) {
      console.log(error);
    }
  };

  const addUser = async (_address) => {
    try {
      console.log("Adding user to the contract");
      const privateKey = await decrypt(pin, localStorage.getItem("wallet"));

      const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
      const wallet = new ethers.Wallet(privateKey, provider);

      const ProfileManager_Contract = new ethers.Contract(
        ProfileManager_Address,
        ProfileManager_ABI,
        wallet
      );

      const tx = await ProfileManager_Contract.createUser(
        _address,
        swiftAlias,
        "",
        "",
        "",
        ""
      );

      await tx.wait();
      console.log(tx);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" text-white flex flex-col">
      <div className="flex items-end justify-between px-4 border-b pb-3">
        <h1 className=" text-xl text-center mx-auto mt-4 mb-0 font-bold">
          Register User
        </h1>
      </div>
      <h1 className=" text-2xl text-center font-bold mt-16 underline">
        {" "}
        Enter Details
      </h1>

      <label className="mt-4 md:mx-auto px-10 pt-4" htmlFor="">
        User Name
      </label>
      <input
        type="text"
        className="mt-3 bg-gray-50 px-4 md:mx-auto border text-sm w-72 mx-auto border-gray-300 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="user name ..."
        onChange={(e) => setUserName(e.target.value)}
      />
      <label className="mt-4 px-10 pt-4 md:mx-auto" htmlFor="">
        UserID
      </label>
      <input
        type="text"
        className="mt-3 bg-gray-50 px-4 border md:mx-auto text-sm w-72 mx-auto border-gray-300 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="example@swift"
        onChange={(e) => setSwiftAlias(e.target.value)}
      />
      <label className="mt-4 px-10 pt-4 md:mx-auto" htmlFor="">
        Enter CPIN{" "}
        <span className=" text-xs italic">
          &#40; 6 Digit Secret Crypto PIN &#41;
        </span>
      </label>
      <input
        type="password"
        pattern="[0-9]*"
        inputMode="numeric"
        minlength="6"
        maxLength="6"
        className="mt-3 bg-gray-50 px-4 border w-72 mx-auto md:mx-auto border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="secret CPIN..."
        onChange={(e) => setPin(e.target.value)}
      />

      <div className="w-[85%] mx-auto mt-5 md:w-[27%]">
        <button
          className={`${styles.btn} text-xs  `}
          onClick={() => {
            createWallet(pin);
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
}
