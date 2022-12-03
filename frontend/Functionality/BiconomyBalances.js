import { ChainId } from "@biconomy/core-types";

// npm install @biconomy/core-types

import React from "react";

const BiconomyBalances = async () => {
  const balanceParams = {
    // if no chainId is supplied, SDK will automatically pick active one that
    // is being supplied for initialization
    chainId: ChainId.MAINNET, // chainId of your choice
    eoaAddress: smartAccount.address,
    // If empty string you receive balances of all tokens watched by Indexer
    // you can only whitelist token addresses that are listed in token respostory
    // specified above ^
    tokenAddresses: [],
  };

  const balFromSdk = await smartAccount.getAlltokenBalances(balanceParams);
  console.info("getAlltokenBalances", balFromSdk);

  const usdBalFromSdk = await smartAccount.getTotalBalanceInUsd(balanceParams);
  console.info("getTotalBalanceInUsd", usdBalFromSdk);

  return <div>BiconomyBalances</div>;
};

export default BiconomyBalances;
