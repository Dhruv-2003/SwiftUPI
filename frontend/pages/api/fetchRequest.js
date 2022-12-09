import { ethers } from "ethers";
import {
  PaymentRequests_ABI,
  PaymentRequests_Address,
} from "../../constants/constants";
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const RPC_URL = process.env.RPC_URL;
const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
const signer = new ethers.Wallet(PRIVATE_KEY, provider);

const Request_contract = new ethers.Contract(
  PaymentRequests_Address,
  PaymentRequests_ABI,
  signer
);

export default async function createRequest(req, res) {
  if (req.method !== "POST") {
    return res.status(405);
  }
  // let requestId;

  if (!req.body) {
    return res.status(400).json({ message: "invalid input in the body" });
  }

  try {
    console.log("Starting to work ... creating Transactions");
    const tx = await Request_contract.createRequest(
      req.body.creator,
      req.body.amount,
      req.body.detailsURI
    );
    console.log("Tx sent");

    await tx.wait();
    console.log(tx);

    const data = await Request_contract.totalRequests();
    const requestId = data - 1;
    console.log(requestId);
    res.json(requestId);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }

  // res.status(200).json({ name: "John Doe" });
}
