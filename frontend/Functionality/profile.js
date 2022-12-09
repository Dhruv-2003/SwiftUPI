import { useAccount, useSigner, useProvider, useContract } from "wagmi";
import React from "react";
import {
  ProfileManager_ABI,
  ProfileManager_Address,
} from "../constants/constants";

export const createUser = async (
  SCWAddress,
  swiftAlias,
  ens,
  lens,
  name,
  qrURI
) => {
  const { address, isConnected } = useAccount();
  const provider = useProvider();
  const { data: signer } = useSigner();

  const ProfileManager_Contract = useContract({
    address: ProfileManager_Address,
    abi: ProfileManager_ABI,
    signerOrProvider: signer || provider,
  });

  try {
    console.log("Creating the user Profile");
    const tx = await ProfileManager_Contract.createUser(
      SCWAddress,
      swiftAlias,
      ens,
      lens,
      name,
      qrURI
    );
    await tx.wait();
    console.log(tx);
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserAlias = async (swiftAlias) => {
  const { address, isConnected } = useAccount();
  const provider = useProvider();
  const { data: signer } = useSigner();

  const ProfileManager_Contract = useContract({
    address: ProfileManager_Address,
    abi: ProfileManager_ABI,
    signerOrProvider: signer || provider,
  });

  try {
    console.log("Fetching the user Profile");
    const data = await ProfileManager_Contract.fetchUserByAlias(swiftAlias);
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchUser = async (userAddress) => {
  const { address, isConnected } = useAccount();
  const provider = useProvider();
  const { data: signer } = useSigner();

  const ProfileManager_Contract = useContract({
    address: ProfileManager_Address,
    abi: ProfileManager_ABI,
    signerOrProvider: signer || provider,
  });

  try {
    console.log("Fetching the user Profile");
    const data = await ProfileManager_Contract.fetchUser(userAddress);
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
};
