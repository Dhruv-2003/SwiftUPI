import React from "react";

///https://github.com/bcnmy/token-list/blob/master/biconomy.tokenlist.json

///https://biconomy.gitbook.io/sdk/sdk-reference/sending-transactions/gasless-transactions/sending-erc-20-tokens

const BiconomySendTransaction = () => {
  const erc20Interface = new ethers.utils.Interface([
    "function transfer(address _to, uint256 _value)",
  ]);

  // Encode two different ERC-20 token transfers
  const data1 = erc20Interface.encodeFunctionData("transfer", [
    recipient1Address,
    amount1,
  ]);

  const tx1 = {
    to: usdcAddress,
    data: data1,
  };

  const sendTransaction = async () => {
    try {
      const txResponse = await smartAccount.sendGaslessTransactionBatch({
        transactions: txs,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button>Send Transaction</button>
    </div>
  );
};

export default BiconomySendTransaction;
