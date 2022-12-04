import QRCode from "qrcode";
import QrScanner from "qr-scanner";
import { ethers } from "ethers";
import { encrypt, decrypt } from "@metamask/browser-passworder";

export const createQRCode = async (requestId) => {
  QRCode.toDataURL(requestId)
    .then((url) => {
      return url;
    })
    .catch((err) => {
      console.error(err);
      return err;
    });
};

export const createWallet = (password) => {
  let randomWallet = ethers.Wallet.createRandom();
  console.log(randomWallet);
  console.log(password);
  encrypt(password, randomWallet._signingKey().privateKey).then(function (
    blob
  ) {
    localStorage.setItem("wallet", blob);
  });
};

export const getWallet = (password) => {
  decrypt(password, localStorage.getItem("wallet"))
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log("error", err);
    });
};
