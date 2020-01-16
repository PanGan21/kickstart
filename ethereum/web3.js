import Web3 from "web3";

let web3;

if (typeof window !== "undefined") {
  if (typeof window.ethereum !== "undefined") {
    web3 = new Web3(window.ethereum);
    console.log("eth");
  } else if (typeof window.web3 !== "undefined") {
    web3 = new Web3(window.web3.currentProvider);
    console.log("custom provider");
  }
} else {
  const provider = new Web3.providers.HttpProvider(process.env.KEY);
  web3 = new Web3(provider);
  console.log("infura");
}

export default web3;
