import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import landing from "../assets/landing.png";
import avatar from "../assets/avatar.png";
import scannpay from "../assets/scannpay.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SwiftUPI</title>
        <meta name="description" content="SwiftUPI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" text-white">
        <h1 className="text-4xl text-center mt-6 font-bold underline">UCPI</h1>
        <h1 className="text-center mx-auto italic mt-3">&#40;Unified Crypto Payment Interface&#41;</h1>
        <h1 className="text-xl text-center mt-6 font-bold">
          Experience UPI on chain with ease
        </h1>
        <p className="text-center mt-5">
          Defination here
        </p>
      </div>

      {/* <div className="mt-8">
        <Image alt="image" src={landing} />
      </div> */}

      {/* render when user is already registered */}
     

      {/* render to ask user registeration */}

      <div className=" text-white flex flex-col px-4 py-6 text-center">
        <h2 className=" text-white text-center text-2xl mt-2  mb-0 font-bold underline ">
          Register Wallet
        </h2>
        <div className="mt-3 flex flex-col items-center justify-around text-xl font-bold">
          <button className={`  text-sm mt-0 ${styles.btn}`}>
            Create a Merchant Wallet
          </button>
          <span className="italic text-md font-normal" >or</span>
          <button className={`  text-sm mt-0 ${styles.btn}`}>
            Create a User Wallet
          </button>
        </div>
      </div>
    </div>
  );
}
