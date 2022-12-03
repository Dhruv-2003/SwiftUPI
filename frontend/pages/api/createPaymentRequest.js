// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import ethers from "ethers";
import {
  PaymentRequests_ABI,
  PaymentRequests_Address,
} from "../../constants/constants";

/// call payment Request function with a signer

/// import Contract data from constants - done
/// send the transaction from the PRIVATE KEY from the user
/// return the ID of the request

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const RPC_URL = process.env.RPC_URL;

export default async function createRequest(req, res) {
  const provider = ethers.getDefaultProvider(RPC_URL, {
    chainId: 80001,
    name: "Mumbai",
  });

  const signer = new ethers.Wallet(PRIVATE_KEY, provider);

  const contract = new ethers.Contract(
    PaymentRequests_Address,
    PaymentRequests_ABI,
    signer
  );

  if (!req.body) {
    return res.status(400).json({ message: "invalid input in the body" });
  }

  try {
    const tx = await contract.createRequest(
      req.body.creator,
      req.body.amount,
      req,
      body.detailsURI
    );

    await tx.wait();
    console.log(tx);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  res.status(200).json({ name: "John Doe" });
}
