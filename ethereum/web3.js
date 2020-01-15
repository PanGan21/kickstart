import Web3 from "web3";

let web3;

if (typeof web3 != "undefined" && typeof window.web3 !== "undefined") {
  // We are in the browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  // we are on the server or the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/271ef2b747b2493c9150c821c5ecd307"
  );
  web3 = new Web3(provider);
}

export default web3;
