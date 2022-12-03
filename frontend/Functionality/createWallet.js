import React, { useState } from "react";
import { ethers } from "ethers";

import { encrypt, decrypt } from "@metamask/browser-passworder";

const CreatePK = () => {
  const [password, setPassword] = useState("hunter55");
  const createPk = () => {
    let randomWallet = ethers.Wallet.createRandom();
    console.log(randomWallet._signingKey());

    console.log(randomWallet._signingKey().privateKey);

    encrypt(password, randomWallet._signingKey().privateKey)
      .then(function (blob) {
        console.log("BLOB", blob);
        console.log(typeof blob);
        localStorage.setItem("wallet", blob);
        return decrypt(password, blob);
      })
      .then(function (result) {
        console.log(result);
      });
  };

  const getWallet = () => {
    console.log("AAAAAAAaaa", JSON.parse(localStorage.getItem("wallet")));
    decrypt(password, localStorage.getItem("wallet"))
      .then((res) => {
        console.log("DECRYPT");
        console.log(res);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <div>
      <p className="text-center mt-8">Private Key</p>
      <button onClick={createPk}>CREATE PK</button>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={getWallet}>GET WALLET</button>
    </div>
  );
};

export default CreatePK;

export const createWallet = (password) => {
  let randomWallet = ethers.Wallet.createRandom();
  encrypt(password, randomWallet._signingKey().privateKey).then(function (
    blob
  ) {
    localStorage.setItem("wallet", blob);
  });
};

export const getWallet = (password) => {
  decrypt(password, localStorage.getItem("wallet"))
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log("error", err);
    });
};
