import { useAccount, useSigner, useProvider, useContract } from "wagmi";
import React from "react";
import {
  PaymentRequests_ABI,
  PaymentRequests_Address,
} from "../constants/constants";

const createRequest = () => {
  const { address, isConnected } = useAccount();
  const provider = useProvider();
  const { data: signer } = useSigner();

  const Request_contract = useContract({
    address: PaymentRequests_Address,
    abi: PaymentRequests_ABI,
    signerOrProvider: signer || provider,
  });

  const create = async () => {
    try {
      const tx = await Request_contract.createRequest(
        creator,
        amount,
        detailsURI
      );
    } catch (err) {
      console.log(err);
    }
  };
  return <div>createRequest</div>;
};

export default createRequest;
