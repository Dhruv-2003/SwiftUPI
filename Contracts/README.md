/// Contracts Deployed

1. Request handler - 0x1E806d0204CdbD6bDd307875F477978D629298C0
2. Profile Manager - 0x331d1eB264EC5bd27D89B2638018B262b2414C98
3. SDK Manager - 0xc9C9723267eBCCef40AAD62c4C59a98eEC83d1D0

graph init --contract-name paymentRequests --product hosted-service itsanishjain/swiftupi --from-contract 0x1E806d0204CdbD6bDd307875F477978D629298C0 --abi ./Contracts/artifacts/paymentRequests.sol/requestHandler.json --network mumbai graph

graph auth --product hosted-service API_KEY
