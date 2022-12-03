import React, { useEffect, useState } from "react";
import QRCode from "qrcode";
import QrScanner from "qr-scanner"; // if installed via package and bundling with a module bundler like webpack or rollup

const CreateQR = () => {
  const [qrUrl, setQrUrl] = useState();
  const [videoElem, setVideoElem] = useState();

  useEffect(() => {
    setVideoElem(document.getElementById("v"));
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
    // To enforce the use of the new api with detailed scan results, call the constructor with an options object, see below.
    // const qrScanner = new QrScanner(
    //   videoElem,
    //   (result) => console.log("decoded qr code:", result),
    //   {
    //     /* your options or returnDetailedScanResult: true if you're not specifying any other options */
    //   }
    // );

    // For backwards compatibility, omitting the options object will currently use the old api, returning scan results as
    // simple strings. This old api will be removed in the next major release, by which point the options object is then
    // also not required anymore to enable the new api.
    const qrScanner = new QrScanner(
      videoElem,
      (result) => console.log("decoded qr code:", result)
      // No options provided. This will use the old api and is deprecated in the current version until next major version.
    );
    qrScanner.start();

    // QrScanner.scanImage(qrUrl)
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log(error || "No QR code found."));
  };
  return (
    <div>
      <p className="text-center mt">CreateQR</p>
      <button onClick={createQRCode}>CREATE QR</button>
      {qrUrl && <button onClick={scanneQR}>SCAN</button>}
      <video id="v"></video>
    </div>
  );
};

export default CreateQR;
