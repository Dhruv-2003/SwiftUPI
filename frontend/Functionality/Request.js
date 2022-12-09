import { useAccount, useSigner, useProvider, useContract } from "wagmi";
import React from "react";
import {
  PaymentRequests_ABI,
  PaymentRequests_Address,
  ProfileManager_ABI,
  ProfileManager_Address,
} from "../constants/constants";

export const createRequest = async (creator, amount, detailsURI) => {
  const { address, isConnected } = useAccount();
  const provider = useProvider();
  const { data: signer } = useSigner();

  const Request_contract = useContract({
    address: PaymentRequests_Address,
    abi: PaymentRequests_ABI,
    signerOrProvider: signer || provider,
  });

  try {
    const tx = await Request_contract.createRequest(
      creator,
      amount,
      detailsURI
    );
    await tx.wait();
    console.groupCollapsed(tx);
  } catch (err) {
    console.log(err);
  }
};

export const sendRequest = async (requestId, payerAddress) => {
  const { address, isConnected } = useAccount();
  const provider = useProvider();
  const { data: signer } = useSigner();

  const Request_contract = useContract({
    address: PaymentRequests_Address,
    abi: PaymentRequests_ABI,
    signerOrProvider: signer || provider,
  });

  try {
    const tx = await Request_contract.sendRequest(requestId, payerAddress);
    await tx.wait();
    console.log(tx);
  } catch (error) {
    console.log(error);
  }
};

export const createRequestDirect = async (payer, amount, detailsURI) => {
  const { address, isConnected } = useAccount();
  const provider = useProvider();
  const { data: signer } = useSigner();

  const Request_contract = useContract({
    address: PaymentRequests_Address,
    abi: PaymentRequests_ABI,
    signerOrProvider: signer || provider,
  });

  try {
    const tx = await Request_contract.createRequestDirect(
      payer,
      amount,
      detailsURI
    );
    await tx.wait();
    console.log(tx);
  } catch (error) {
    console.log(error);
  }
};

export const fetchRequest = async (requestId) => {
  const provider = useProvider();

  const Request_contract = useContract({
    address: PaymentRequests_Address,
    abi: PaymentRequests_ABI,
    signerOrProvider: provider,
  });

  try {
    console.log("Fetching the request on the gateway");
    const data = await Request_contract.fetchRequest(requestId);

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
