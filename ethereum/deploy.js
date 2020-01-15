const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

require("dotenv").config();

// connect to an account - setup the provider
const provider = new HDWalletProvider(process.env.SECRET, process.env.KEY);

// pass the provider to web3
const web3 = new Web3(provider);

// write deploy function and call it after in order to use async - await
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account ", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({
      data: "0x" + compiledFactory.bytecode
    })
    .send({
      from: accounts[0]
    });

  console.log("Contracrt deployed to ", result.options.address);
};

deploy();
