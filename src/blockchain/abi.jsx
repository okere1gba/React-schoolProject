const abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "empid",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "dateRegistered",
        type: "string",
      },
      {
        internalType: "string",
        name: "hospitalRegistered",
        type: "string",
      },
      {
        internalType: "string",
        name: "placeOfbirth",
        type: "string",
      },
      {
        internalType: "string",
        name: "fatherName",
        type: "string",
      },
      {
        internalType: "string",
        name: "motherName",
        type: "string",
      },
      {
        internalType: "string",
        name: "lga",
        type: "string",
      },
    ],
    name: "addindividual",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "empid",
        type: "uint256",
      },
    ],
    name: "getidividual",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mymassage",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];
const contractAddress = "0xBD8a8Fd514bA949624d08d6f011d26E52141B303";
