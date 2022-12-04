import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import landing from "../assets/2.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SwiftUPI</title>
        <meta name="description" content="SwiftUPI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" text-white">
        <h1 className="text-4xl text-center mt-6 font-bold ">UCPI</h1>
        <h1 className="text-center mx-auto italic mt-3 underline">
          &#40;Unified Crypto Payment Interface&#41;
        </h1>
        <Image className="mx-auto" alt="image" src={landing} />
        <h1 className="text-xl text-center mt-6 font-bold">
          Experience UPI on chain with the power of Crypto
        </h1>
        <Link className="w-11/12" href="/home" passHref>
          <button type="button" class={`w-11/12  text-sm mt-0 ${styles.btn}`}>
            Home
          </button>
        </Link>
        {/* <p className="text-center mt-5">Defination here</p> */}
      </div>

      {/* <div className="mt-8">
        <Image alt="image" src={landing} />
      </div> */}

      {/* render when user is already registered */}

      {/* render to ask user registeration */}

      <div className=" text-white w-full flex flex-col px-4 py-6 text-center">
        <h2 className=" text-white text-center text-lg mt-2  mb-0 font-bold underline ">
          Register Wallet
        </h2>
        <div className="mt-3 flex w-full flex-col items-center justify-around text-xl font-bold">
          <Link className="w-11/12" href="/mregister" passHref>
            <button className={`  text-sm mt-0 ${styles.btn}`}>Register Merchant</button>
          </Link>
          <span className="italic text-md font-normal">or</span>
          <Link className="w-11/12" href="/uregister" passHref>
            <button className={`w-11/12  text-sm mt-0 ${styles.btn}`}>
              Register User
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
