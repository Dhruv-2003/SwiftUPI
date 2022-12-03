export const PaymentRequests_Address = "";
export const ProfileManager_Address = "";
export const SDKManager_Address = "";

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
