import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";
import { useSigner, useAccount } from "wagmi";

export const optIn = async () => {
  const { data: signer } = useSigner();
  const { address } = useAccount();
  try {
    console.log("Started...");
    const apiResponse = await await PushAPI.channels.subscribe({
      signer: signer,
      channelAddress: `eip155:80001:${address}`, // channel address in CAIP
      userAddress: "eip155:80001:0xBF17F859989A73C55c7BA5Fefb40e63715216B9b", // user address in CAIP
      onSuccess: () => {
        console.log("opt in success");
      },
      onError: () => {
        console.error("opt in error");
      },
      env: "staging",
    });

    // apiResponse?.status === 204, if sent successfully!
    console.log("API repsonse: ", apiResponse);
  } catch (err) {
    console.error("Error: ", err);
  }
};
