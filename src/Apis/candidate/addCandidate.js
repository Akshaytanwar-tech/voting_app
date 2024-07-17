import apiHandler from "../helper/httphandler";
import HTTPS_REQ from "../helper/constant";
import config from "../../config";
const addCandidate = async (params) => {
  const api = `${config.Url}/candidate`;
  const res = await apiHandler(HTTPS_REQ.POST, config.urlencoded, api, params);
  console.log(res);
};
export default addCandidate;
