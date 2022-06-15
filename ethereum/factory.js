import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance= new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x2c9a6d02D30BF2146b716B4771f1b6bE18A1C623'
);

export default instance;
