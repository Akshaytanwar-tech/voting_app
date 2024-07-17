import config from "../../config";
import HTTPS_REQ from "../helper/constant";
import apiHandler from "../helper/httphandler";

const getCandidates = async () => {
  try {
    const url = `${config.Url}/candidate/getCandidates`;
    const res = await apiHandler(HTTPS_REQ.GET, config.urlencoded, url);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export default getCandidates;
