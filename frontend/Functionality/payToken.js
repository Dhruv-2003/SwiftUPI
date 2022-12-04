import React, { useState } from "react";
import {
  USDC_ABI,
  USDC_Address,
  PaymentRequests_ABI,
  PaymentRequests_Address,
} from "../constants/constants";
import SmartAccount from "@biconomy/smart-account";
import HDWalletProvider from "@truffle/hdwallet-provider";

const RPC_URL =
  "https://flashy-cold-choice.matic-testnet.discover.quiknode.pro/a27666d2e485f614bdb3ac5b4ed4f59c067a8d28";

const payToken = (privateKey, amount, receiverAddress) => {
  const [receiverSCW, setReceiverSCW] = useState("");
  const [smartContractWallet, setsmartContractWallet] = useState();

  const Request_contract = new ethers.Contract(
    PaymentRequests_Address,
    PaymentRequests_ABI,
    providerwallet
  );

  const fetchRecipient = async () => {
    try {
      const data = await Request_contract.fetchUser(receiverAddress);
      console.log(data);
      setReceiverSCW(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSmartContractWallet = async (privateKey) => {
    try {
      const providerWithSigner = new HDWalletProvider(privateKey, RPC_URL);
      const providerwallet = new ethers.providers.Web3Provider(
        providerWithSigner
      );

      let option = {
        activeNetworkId: ChainId.POLYGON_MUMBAI,
        supportedNetworksIds: [
          ChainId.GOERLI,
          ChainId.POLYGON_MAINNET,
          ChainId.POLYGON_MUMBAI,
        ],
        networkConfig: [
          {
            chainId: ChainId.POLYGON_MUMBAI,
            // Optional dappAPIKey (only required if you're using Gasless)
            dappAPIKey: "59fRCMXvk.8a1652f0-b522-4ea7-b296-98628499aee3",
            // if need to override Rpc you can add providerUrl:
            // providerUrl: "https://data-seed-prebsc-1-s1.binance.org:8545/",
          },
        ],
      };

      // const walletProvider = wallet.provider;

      let smartAccount = new SmartAccount(providerwallet, option);
      smartAccount = await smartAccount.init();
      setsmartContractWallet(smartAccount);
    } catch (error) {
      console.log(error);
    }
  };

  const pay = async () => {
    try {
      const _amount = amount * (10 ^ 6);
      const erc20Interface = new ethers.utils.Interface([
        "function transfer(address _to, uint256 _value)",
      ]);
      const data1 = erc20Interface.encodeFunctionData("transfer", [
        receiverSCW,
        _amount,
      ]);

      const tx1 = {
        to: USDC_Address,
        data: data1,
      };

      const txResponse = await smartContractWallet.sendGaslessTransactionBatch({
        transactions: tx1,
      });

      await txResponse.wait();

      console.log(txResponse);
    } catch (error) {
      console.log();
    }
  };

  return <div>payToken</div>;
};

export default payToken;
