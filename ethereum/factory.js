import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xe305a19b3a59962ED29ED371e87d615BD614A8f6"
);

export default instance;
