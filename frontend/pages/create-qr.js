import React, { useEffect, useState } from "react";
import QRCode from "qrcode";
import QrScanner from "qr-scanner"; // if installed via package and bundling with a module bundler like webpack or rollup

const CreateQR = () => {
  const [qrUrl, setQrUrl] = useState();
  const [scanResult, setScanResult] = useState();

  useEffect(() => {
    const qrScanner = new QrScanner(document.getElementById("v"), (result) =>
      console.log("decoded qr code:", setScanResult(result))
    );
    qrScanner.start();
  }, []);

  const createQRCode = async () => {
    const opts = {
      errorCorrectionLevel: "H",
      type: "terminal",
      quality: 0.95,
      margin: 1,
      color: {
        dark: "#208698",
        light: "#FFF",
      },
    };

    // With promises
    QRCode.toDataURL("I am a pony!", opts)
      .then((url) => {
        console.log(url);
        setQrUrl(url);
        // var img = document.getElementById("image");
        // console.log(img);
        // img.src = url;
      })
      .catch((err) => {
        console.error(err);
      });

    // With async/await
    const generateQR = async (text) => {
      try {
        console.log(await QRCode.toDataURL(text));
      } catch (err) {
        console.error(err);
      }
    };
  };

  const scanneQR = () => {
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
      {qrUrl && <button onClick={scanneQR}>SCAN</button>}
      {scanResult && <p>{scanResult}</p>} */}

      <video id="v"></video>
    </div>
  );
};

export default CreateQR;
