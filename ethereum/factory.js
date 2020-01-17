import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xf99925D4C7d0C35908df10BAFd3d57c71e3C3Af0"
);

export default instance;
