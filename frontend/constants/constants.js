export const PaymentRequests_Address =
  "0x0D80E4EE912e12467EC87dfb930A8E4c3B4bB13C";
export const ProfileManager_Address =
  "0x331d1eB264EC5bd27D89B2638018B262b2414C98";
export const SDKManager_Address = "0x331d1eB264EC5bd27D89B2638018B262b2414C98";
export const USDC_Address = "0x321507ea5218ee046ac0c94c1749c487b7236051";

export const RPC_URL =
  "https://flashy-cold-choice.matic-testnet.discover.quiknode.pro/a27666d2e485f614bdb3ac5b4ed4f59c067a8d28/";

export const WEB3STORAGE_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDMxQjM3MjRlN2E2RjgyMTg3NEFEYzMyYjEzZDQwNjM2YkFiMDA0NzEiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTg0MTc0ODY2ODksIm5hbWUiOiJDYXplIn0.BoGp0mNQc_syBHBZFj6Mb2dTUjAlpLWHd6DwCwFSc_4";

export const PaymentRequests_ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "payer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RequestPaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RequestsCreated",
    type: "event",
  },
  {
    inputs: [],
    name: "EPNS_COMM_ADDRESS",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "channelAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "detailsURI",
        type: "string",
      },
    ],
    name: "createRequest",
    outputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_payer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "detailsURI",
        type: "string",
      },
    ],
    name: "createRequestDirect",
    outputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_requestId",
        type: "uint256",
      },
    ],
    name: "getRequest",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "requestCreator",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "detailsURI",
            type: "string",
          },
          {
            internalType: "enum requestHandler.payState",
            name: "_state",
            type: "uint8",
          },
        ],
        internalType: "struct requestHandler.PaymentRequest",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalRequests",
    outputs: [
      {
        internalType: "uint256",
        name: "_total",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "requestId",
        type: "uint32",
      },
    ],
    name: "payRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "requests",
    outputs: [
      {
        internalType: "address",
        name: "requestCreator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "detailsURI",
        type: "string",
      },
      {
        internalType: "enum requestHandler.payState",
        name: "_state",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "requestsForUser",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_reciever",
        type: "address",
      },
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "sendNotViaPush",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "requestId",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "reciever",
        type: "address",
      },
    ],
    name: "sendRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalRequests",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export const ProfileManager_ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_userAddres",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_swiftId",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "UserCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "SCWAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "_swiftAlias",
        type: "string",
      },
      {
        internalType: "string",
        name: "_ens",
        type: "string",
      },
      {
        internalType: "string",
        name: "_lens",
        type: "string",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_qrCode",
        type: "string",
      },
    ],
    name: "createUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "fetchUser",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "userAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "SCW",
            type: "address",
          },
          {
            internalType: "string",
            name: "swiftId",
            type: "string",
          },
          {
            internalType: "string",
            name: "ens",
            type: "string",
          },
          {
            internalType: "string",
            name: "lens",
            type: "string",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "qrCodeCId",
            type: "string",
          },
        ],
        internalType: "struct profileManager.User",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_swiftAlias",
        type: "string",
      },
    ],
    name: "fetchUserByAlias",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "userAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "SCW",
            type: "address",
          },
          {
            internalType: "string",
            name: "swiftId",
            type: "string",
          },
          {
            internalType: "string",
            name: "ens",
            type: "string",
          },
          {
            internalType: "string",
            name: "lens",
            type: "string",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "qrCodeCId",
            type: "string",
          },
        ],
        internalType: "struct profileManager.User",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "swiftIds",
    outputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "SCW",
        type: "address",
      },
      {
        internalType: "string",
        name: "swiftId",
        type: "string",
      },
      {
        internalType: "string",
        name: "ens",
        type: "string",
      },
      {
        internalType: "string",
        name: "lens",
        type: "string",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "qrCodeCId",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_newAlias",
        type: "string",
      },
    ],
    name: "updateSwiftAlias",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userProfiles",
    outputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "SCW",
        type: "address",
      },
      {
        internalType: "string",
        name: "swiftId",
        type: "string",
      },
      {
        internalType: "string",
        name: "ens",
        type: "string",
      },
      {
        internalType: "string",
        name: "lens",
        type: "string",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "qrCodeCId",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export const SDKManager_ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "managerAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "_token",
        type: "string",
      },
    ],
    name: "addAuthToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "SCWAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "_swiftAlias",
        type: "string",
      },
      {
        internalType: "string",
        name: "merchantName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_qrCode",
        type: "string",
      },
      {
        internalType: "string",
        name: "_token",
        type: "string",
      },
    ],
    name: "createUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "fetchUser",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "managerAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "SCW",
            type: "address",
          },
          {
            internalType: "string",
            name: "swiftId",
            type: "string",
          },
          {
            internalType: "string",
            name: "MerchantName",
            type: "string",
          },
          {
            internalType: "string",
            name: "qrCodeCId",
            type: "string",
          },
          {
            internalType: "string",
            name: "authToken",
            type: "string",
          },
        ],
        internalType: "struct SDKManager.Manager",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_swiftAlias",
        type: "string",
      },
    ],
    name: "fetchUserByAlias",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "managerAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "SCW",
            type: "address",
          },
          {
            internalType: "string",
            name: "swiftId",
            type: "string",
          },
          {
            internalType: "string",
            name: "MerchantName",
            type: "string",
          },
          {
            internalType: "string",
            name: "qrCodeCId",
            type: "string",
          },
          {
            internalType: "string",
            name: "authToken",
            type: "string",
          },
        ],
        internalType: "struct SDKManager.Manager",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "managers",
    outputs: [
      {
        internalType: "address",
        name: "managerAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "SCW",
        type: "address",
      },
      {
        internalType: "string",
        name: "swiftId",
        type: "string",
      },
      {
        internalType: "string",
        name: "MerchantName",
        type: "string",
      },
      {
        internalType: "string",
        name: "qrCodeCId",
        type: "string",
      },
      {
        internalType: "string",
        name: "authToken",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "swiftIds",
    outputs: [
      {
        internalType: "address",
        name: "managerAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "SCW",
        type: "address",
      },
      {
        internalType: "string",
        name: "swiftId",
        type: "string",
      },
      {
        internalType: "string",
        name: "MerchantName",
        type: "string",
      },
      {
        internalType: "string",
        name: "qrCodeCId",
        type: "string",
      },
      {
        internalType: "string",
        name: "authToken",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export const USDC_ABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "implementationContract",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  { stateMutability: "payable", type: "fallback" },
  {
    inputs: [],
    name: "admin",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newAdmin", type: "address" }],
    name: "changeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "newImplementation", type: "address" },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "newImplementation", type: "address" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];
