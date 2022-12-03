import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";
import { useAccount } from "wagmi";

export const listenNotification = async () => {
  try {
    // const { address } = useAccount();
    const address = "0xBF17F859989A73C55c7BA5Fefb40e63715216B9b";
    console.log("Started...");
    const apiResponse = await PushAPI.user.getFeeds({
      user: `eip155:80001:${address}`, // user address in CAIP
      env: "staging",
    });

    /// can sort via app name and show

    /// listen the new Notifications coming uppp

    // apiResponse?.status === 204, if sent successfully!
    console.log("API repsonse: ", apiResponse);
  } catch (err) {
    console.error("Error: ", err);
  }
};
