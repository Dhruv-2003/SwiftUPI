import React, { useEffect, useState } from "react";
import sampleqr from "../assets/sampleqr.webp";
import Image from "next/image";

import createQRCode from "/helper.js";

export default function GenerateQR() {
  const [qrUrl, setQrUrl] = useState();

  useEffect(() => {
    let rid
    (async () => {
      rid = await fetch('/api/createRequest' , {
        method: "POST",
        body: JSON.stringify({
          creator: "0x",
          amount: 10,
          detailsURI: ""
        })()
      })
    })
    console.log(rid)

  }, [])
  

  return (
    <div className=" w-full">
      <div className="relative mb-6 w-full flex justify-around items-start rounded-md border-gray-300 border my-4 py-6 px-4">
        <div className=" bg-white w-[140px] mx-auto">
          <Image className="my-auto blur-sm" src={sampleqr} alt="qr" />
          <div className="  mx-2 absolute top-[70px]">
            <button
              onClick={() => createQRCode()}
              type="button"
              className=" w-[120px]  bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md"
            >
              Show QR
            </button>
          </div>
        </div>
        <span className=" max-w-[150px]">
          Scan the QR using <span className="font-semibold ">SwiftUPI</span> QR
          code scanner
        </span>
      </div>
    </div>
  );
}
