/// checked and approved
// customized to store a json file created from the data we enter
import { Web3Storage } from "web3.storage";

import { WEB3STORAGE_TOKEN } from "../constants/constants";
function getAccessToken() {
  return WEB3STORAGE_TOKEN;
}

function MakeStorageClient() {
  return new Web3Storage({ token: getAccessToken() });
}

export const StorePageData = async (merchantName, orderID, orderAmount) => {
  const obj = {
    MerchantName: merchantName,
    OrderID: orderID,
    OrderAmount: orderAmount,
  };
  const blob = new Blob([JSON.stringify(obj)], { type: "application/json" });
  const files = [new File([blob], "request.json")];
  console.log("Uploading data to IPFS with web3.storage....");
  const client = MakeStorageClient();
  const cid = await client.put(files, { wrapWithDirectory: false });
  console.log("Stored files with cid:", cid);
  return cid;
};
