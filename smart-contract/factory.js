import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xb4553346896de096460eC42c17DFf2C8e05F4e73"
);

export default instance;
