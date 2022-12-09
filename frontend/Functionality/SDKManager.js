import { useAccount, useSigner, useProvider, useContract } from "wagmi";
import React from "react";
import { SDKManager_ABI, SDKManager_Address } from "../constants/constants";

export const createManager = async (
  SCWAddress,
  swiftAlias,
  name,
  qrURI,
  token
) => {
  const { address, isConnected } = useAccount();
  const provider = useProvider();
  const { data: signer } = useSigner();

  const SDKManager_Contract = useContract({
    address: SDKManager_Address,
    abi: SDKManager_ABI,
    signerOrProvider: signer || provider,
  });

  try {
    console.log("Creating the user Profile");
    const tx = await SDKManager_Contract.createUser(
      SCWAddress,
      swiftAlias,
      name,
      qrURI,
      token
    );
    await tx.wait();
    console.log(tx);
  } catch (error) {
    console.log(error);
  }
};

export const fetchManagerAlias = async (swiftAlias) => {
  const { address, isConnected } = useAccount();
  const provider = useProvider();
  const { data: signer } = useSigner();

  const SDKManager_Contract = useContract({
    address: SDKManager_Address,
    abi: SDKManager_ABI,
    signerOrProvider: signer || provider,
  });

  try {
    console.log("Fetching the user Profile");
    const data = await SDKManager_Contract.fetchUserByAlias(swiftAlias);
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchManager = async (userAddress) => {
  const { address, isConnected } = useAccount();
  const provider = useProvider();
  const { data: signer } = useSigner();

  const SDKManager_Contract = useContract({
    address: SDKManager_Address,
    abi: SDKManager_ABI,
    signerOrProvider: signer || provider,
  });

  try {
    console.log("Fetching the user Profile");
    const data = await SDKManager_Contract.fetchUser(userAddress);
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
};
