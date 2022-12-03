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

      <div>
        <h1 className="text-3xl text-center text-white mt-6 font-bold">
          Experience UPI on chain with ease
        </h1>
      </div>

      <div className="mt-8">
        <Image src={landing} />
      </div>

      <div className=" text-white flex flex-col px-4 py-6 text-center">
        <h2 className=" text-white text-center text-2xl mt-2  mb-8 font-bold underline ">
          Payment Options{" "}
        </h2>
        <div className="mt-3 flex items-center justify-around text-xl font-bold">
          <Link href={"/create-qr"}>
            <div className=" hover:scale-105 cursor-pointer transition ease-in-out">
              <div className=" h-[60px] w-[60px] bg-purple-700 max-w-[60px] mx-auto rounded-xl   ">
                <Image src={scannpay} />
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
  );
}
