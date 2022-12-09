import React, { useEffect, useState } from "react";
import QrScanner from "qr-scanner"; // if installed via package and bundling with a module bundler like webpack or rollup
import { Router } from "next/router";

const CreateQR = () => {
  const [scanResult, setScanResult] = useState("DONE");

  useEffect(() => {
    scanQR();
  }, []);

  const letGo = () => {
    try {
      Router.push(scanResult);
    } catch (error) {
      console.log(error);
    }
  };

  // const createQRCode = async () => {
  //   const opts = {
  //     errorCorrectionLevel: "H",
  //     type: "terminal",
  //     quality: 0.95,
  //     margin: 1,
  //     color: {
  //       dark: "#208698",
  //       light: "#FFF",
  //     },
  //   };

  //   // With promises
  //   QRCode.toDataURL("I am a pony!", opts)
  //     .then((url) => {
  //       console.log(url);
  //       return url;
  //       setQrUrl(url);
  //       // var img = document.getElementById("image");
  //       // console.log(img);
  //       // img.src = url;
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });

  //   // With async/await
  //   const generateQR = async (text) => {
  //     try {
  //       console.log(await QRCode.toDataURL(text));
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  // };

  const scanQR = () => {
    const qrScanner = new QrScanner(document.getElementById("v"), (result) =>
      console.log("decoded qr code:", setScanResult(result))
    );
    qrScanner.start();
  };

  return (
    <div>
      {/* <p className="text-center mt">CreateQR</p>
      <button onClick={createQRCode}>CREATE QR</button>
      {qrUrl && <img src={qrUrl} />}
      {qrUrl && <button onClick={scanneQR}>SCAN</button>} */}
      {scanResult && <p>{scanResult}</p>}

      <video id="v"></video>

      <button onClick={() => letGo()}>Go</button>
    </div>
  );
};

export default CreateQR;
