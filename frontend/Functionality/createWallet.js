import React from "react";
// const { strict: assert } = require("assert");
// const passworder = require("browser-passworder");
import { ethers } from "ethers";

import { encrypt, decrypt } from "@metamask/browser-passworder";

const CreatePK = () => {
  let randomWallet = ethers.Wallet.createRandom();

  console.log(randomWallet);
  console.log(randomWallet._isSigner);

  const createPk = () => {
    const secrets = { coolStuff: "all", ssn: "livin large" };
    const password = "hunter55";

    encrypt(password, secrets)
      .then(function (blob) {
        // return passworder.decrypt(password, blob);
        return decrypt(password, blob);
      })
      .then(function (result) {
        // assert.deepEqual(result, secrets);
        console.log(result);
        console.log(secrets);
      });
  };
  //   async function encryptMessage(message, password) {
  //     const encoder = new TextEncoder();
  //     const encodedPlaintext = encoder.encode(message);

  //     const { key, salt } = await generateOrRecoverKey(password);
  //     const initializationVector = crypto.getRandomValues(new Uint8Array(16));

  //     const cipherText = await crypto.subtle.encrypt(
  //       { name: "AES-GCM", iv: initializationVector },
  //       key,
  //       encodedPlaintext
  //     );

  //     return {
  //       salt,
  //       initializationVector: bufferToBase64(initializationVector),
  //       cipherText: bufferToBase64(cipherText),
  //     };
  //   }

  //   async function generateSalt() {
  //     const saltBuffer = crypto.getRandomValues(new Uint8Array(64));
  //     return bufferToBase64(saltBuffer);
  //   }

  //   async function generateOrRecoverKey(password, existingSalt) {
  //     const { crypto } = global;

  //     console.log({ crypto });

  //     const salt = existingSalt || (await generateSalt());

  //     const encoder = new TextEncoder();

  //     const derivationKey = await crypto.subtle.importKey(
  //       "raw",
  //       encoder.encode(password),
  //       { name: "PBKDF2" },
  //       false,
  //       ["deriveKey"]
  //     );

  //     const key = await crypto.subtle.deriveKey(
  //       {
  //         name: "PBKDF2",
  //         salt: encoder.encode(salt),
  //         iterations: 1000000,
  //         hash: "SHA-256",
  //       },
  //       derivationKey,
  //       { name: "AES-GCM", length: 256 },
  //       false,
  //       ["encrypt", "decrypt"]
  //     );

  //     return {
  //       key,
  //       salt,
  //     };
  //   }
  //   async function decryptCipherText(vault, password) {
  //     const { crypto } = global;

  //     const { initializationVector, salt, cipherText } = vault;

  //     const { key } = await generateOrRecoverKey(password, salt);

  //     const plaintext = await crypto.subtle.decrypt(
  //       { name: "AES-GCM", iv: base64ToBuffer(initializationVector) },
  //       key,
  //       base64ToBuffer(cipherText)
  //     );

  //     return new TextDecoder().decode(plaintext);
  //   }

  return (
    <div>
      <p className="text-center mt-8">Private Key</p>
      <button onClick={createPk}>CREATE PK</button>
    </div>
  );
};

export default CreatePK;
