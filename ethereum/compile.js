const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

// reset-delete the build directory
const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath);

// read Campaign.sol from the contracts folder
const campaignPath = path.resolve(__dirname, "contracts", "Campaign.sol");
const source = fs.readFileSync(campaignPath, "utf8");

// compile both contracts with solc
const output = solc.compile(source, 1).contracts;

// create the build directory
fs.ensureDirSync(buildPath);

// iterate over the output of compile and write in json files the two compiled contracts
for (let contract in output) {
  console.log("buildPath: " + buildPath);
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(":", "") + ".json"),
    output[contract]
  );
}
