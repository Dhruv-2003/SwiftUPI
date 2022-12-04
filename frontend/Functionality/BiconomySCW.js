// npm install @biconomy/smart-account
//

import React from "react";

const BiconomySCW = () => {
  // Get the EOA provider for choice of your wallet which manages your signer
  // This provider can also come from the Social login module or libraries like web3Modal

  /// take the private key and use it for Signing the transaction

  // All values are optional except networkConfig only in the case of gasless dappAPIKey is required

  const createSCW = async () => {
    try {
      // const provider = new HDWalletProvider(<PRIVATE_KEY>, <RPC_URL>);

      let options = {
        activeNetworkId: ChainId.GOERLI,
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
            providerUrl: "https://data-seed-prebsc-1-s1.binance.org:8545/",
          },
        ],
      };

      // const walletProvider = new ethers.providers.Web3Provider(provider);

      let smartAccount = new SmartAccount(walletProvider, options);
      smartAccount = await smartAccount.init();
      console.log(smartA);

      const address = smartAccount.address;
      console.log("address", address);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={() => createSCW()}>Create SCW</button>
    </div>
  );
};

export default BiconomySCW;
