import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";

const PK = "572cdf0dfa66a7a97d609e160e6c65f9675bda23805fbb2033295fc289f9f49e"; // channel private key
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);

export const sendNotification = async () => {
  try {
    console.log("Started...");
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer,
      type: 3, // target
      identityType: 2, // direct payload
      notification: {
        title: `[SDK-TEST] notification TITLE:`,
        body: `[sdk-test] notification BODY`,
      },
      payload: {
        title: `[sdk-test] payload title`,
        body: `sample msg body`,
        cta: "",
        img: "",
      },
      recipients: "eip155:5:0xBF17F859989A73C55c7BA5Fefb40e63715216B9b", // recipient address
      channel: "eip155:5:0xBF17F859989A73C55c7BA5Fefb40e63715216B9b", // your channel address
      env: "staging",
    });

    // apiResponse?.status === 204, if sent successfully!
    console.log("API repsonse: ", apiResponse);
  } catch (err) {
    console.error("Error: ", err);
  }
};

// https://docs.push.org/developers/developer-guides/sending-notifications/notification-payload-types/notification-standard-basics
// https://docs.push.org/developers/developer-guides/sending-notifications/using-epns-sdk-gasless
// https://docs.push.org/developers/developer-guides/sending-notifications/using-smart-contract
