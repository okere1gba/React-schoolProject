import Web3 from "web3";

//'https://data-seed-prebsc-1-s1.binance.org:8545'

const provider = new Web3.providers.HttpProvider(
  "https://data-seed-prebsc-1-s1.binance.org:8545/"
);

const web3 = new Web3(provider);
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

const npcContract = new web3.eth.Contract(
  abi,
  "0xBD8a8Fd514bA949624d08d6f011d26E52141B303"
);

export default npcContract;
